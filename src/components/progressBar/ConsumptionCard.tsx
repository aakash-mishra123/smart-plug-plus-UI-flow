"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { Card, Badge, Text, Metric } from "@tremor/react/dist";
import { InfoIcon } from "lucide-react";
import { EnergyMeterData } from "@/utils/types";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Paho from "paho-mqtt";
import { convertToItalicNumber } from "@/utils/methods";
import { MeterEvent } from "@/app/types/deviceStatusTypes";
import { meterEventDummyData, podDataDummy } from "@/utils/constants";
import { fetchPodData } from "@/app/api/podDeviceData";

const DrawerModal = dynamic(
  () => import("../../components/drawer/DrawerModal")
);
const CustomLinearProgress = dynamic(
  () => import("../progressBar/progressBar")
);

const url = "wss://d008824835nrpjnf3rj9q-ats.iot.eu-west-1.amazonaws.com/mqtt";
const mqttUsername =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZFByZXNhRm9ybWlkYWJpbGUiOiIwMzY2ZDQ4My0zYjI2LTRjMGUtOTZkZS1lZjRlNWNkOWYyMzAiLCJpc3MiOiJBUFAiLCJleHAiOjE3NDE2ODg5OTR9.Bste60xcPzeVwDwSC54xr8XuoXhc2qB7AhC-9M9G6ZfrWkZd8qGMfYiVqomk3DR37_-XlagqoDgvNjrSf2eDXAzkrXQH8ZVnJXz08aDhZjouZYMN_nv4QKo3eNek20mO9MsSjLNmn1MfPqKWYLwPMOCFo4O62LCs2mESexUAaSYPI-FWowtwWuWyOI_fs_7OQvGvKXyzhRNt9EBz1FzBvs5I1QSFXTyzm8pz8nyOPNiRbtSDrLcFiiS422Jv6P-SmD0rTxlbxfvZPYHosAEmq217Xg0SMp715kKrbxBAu6Y3wiRTWwnn92JXjJ_n3uH5oNHv9nCErcfBBKiGt81NnQ";

const ConsumptionCard = () => {
  //startMQTTService();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [podData, setPodData] = useState<EnergyMeterData | undefined>(
    podDataDummy[0]
  );
  const [iotData, setiotData] = useState<MeterEvent>(meterEventDummyData);
  dayjs.locale("it");

  useEffect(() => {
    const getData = async () => {
      const result = await fetchPodData();
      setPodData(result);
    };

    getData();
  }, []);

  useEffect(() => {
    const client = new Paho.Client(url, "test");
    client.connect({
      useSSL: true,
      timeout: 3,
      mqttVersion: 4,
      userName: mqttUsername,
      password: "password",
      onSuccess: function () {
        client.subscribe("c2/d/c2g-57CFB6E1C"); //serial from chain-2-gate
      },
      onFailure: function (e) {
        console.log("FETCH DATA ERROR: ", e);
      },
    });
    client.onMessageArrived = function (message) {
      setiotData(JSON.parse(message.payloadString).Chain2Data);
    };
  }, []);

  const contractPowerToShow = podData?.contractPower
    ? podData?.contractPower
    : 90;

  return (
    <>
      <Card className="bg-transparent montserrat-custom rounded-sm p-4 !ring-0 !dark:ring-0">
        <div className="flex flex-col p-2 justify-between">
          <div className="flex justify-between">
            <Text className="text-lg text-black font-semibold">
              Consumo istantaneo
            </Text>
            <Badge className="text-black font-bold rounded-md  bg-green-100 px-2">
              TEMPO REALE
            </Badge>
          </div>
          <div className="flex flex-row gap-2 items-end ">
            <Text className="text-xs text-black font-semibold mt-2">
              {`${dayjs(iotData?.Ts, "YYYY/MM/DD HH:mm:ss")
                .set("hour", 9)
                .set("minute", 30)
                .format("dddd D MMMM YYYY [ore] HH:mm")} - `}
              <strong>Fascia F1</strong>
            </Text>

            <InfoIcon
              className="font-semibold text-pink-800 text-sm w-4 h-4"
              onClick={() => setIsModalOpen(() => true)}
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-col bg-white rounded-md px-4">
          <div className="flex flex-row gap-2 items-end mt-4 mb-4 pl-2 text-black">
            <Metric className={"text-3xl text-green-600 font-bold"}>
              {convertToItalicNumber(iotData?.Payload?.InstantPower, 100) ??
                "2,3"}
            </Metric>
            <Metric className=" text-3xl ">
              di {contractPowerToShow / 100}{" "}
            </Metric>
            <p className="text-2xl font-bold">kW</p>
          </div>

          <CustomLinearProgress
            value={(iotData?.Payload.InstantPower ?? 2500) / 10}
          />
        </div>
        <hr />
        <div className="rounded-lg border-2 mt-4 p-4 flex flex-row gap-2 border-[#01855d] bg-[#f5fff6] text-black montserrat-custom items-center">
          <IoIosCheckmarkCircle className="text-lg w-12 h-12 text-[#01855d]" />
          <p className="text-sm">
            Lorem ipsum Lorem Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum{" "}
          </p>
        </div>
      </Card>
      <DrawerModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        className="bg-white pb-12"
      />
    </>
  );
};

export default ConsumptionCard;
