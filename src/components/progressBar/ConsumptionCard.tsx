"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { Card, Badge, Text } from "@tremor/react/dist";
import { InfoIcon } from "lucide-react";
import Paho from "paho-mqtt";
import { meterEventDummyData } from "@/utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [iotData, setIotData] = useState(meterEventDummyData);
  const serial = useSelector(
    (store: RootState) => store.deviceData.data.serial
  );

  useEffect(() => {
    const clientId = crypto.randomUUID().replace(/-/g, "");
    const client = new Paho.Client(url, clientId);
    client.connect({
      useSSL: true,
      timeout: 3,
      mqttVersion: 4,
      userName: mqttUsername,
      password: "password",
      onSuccess: function () {
        client.subscribe(`c2/d/${serial}`); //serial from chain-2-gate
      },
    });
    client.onMessageArrived = function (message) {
      if (
        JSON.parse(message.payloadString).Chain2Data?.type === "CF21" ||
        "CF51"
      ) {
        const messageRecieved = JSON.parse(message.payloadString);
        setIotData(messageRecieved.Chain2Data);

        return { iotData: JSON.parse(message.payloadString).Chain2Data };
      } else return { iotData: { message: meterEventDummyData } };
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Card className="bg-transparent font-roboto rounded-sm p-4 px-2 my-0 !ring-0 !dark:ring-0">
        <div className="flex flex-col p-2 justify-between">
          <div className="flex justify-between">
            <Text className="text-xl text-black font-medium">
              Consumo istantaneo
            </Text>
            <Badge className="text-black text-md rounded-lg mb-1 ring-green-500 ring-1 bg-[#f5fff6] px-2">
              TEMPO REALE
            </Badge>
          </div>
          <div className="flex flex-row gap-2 items-end mt-1 font-roobert">
            <Text className="text-sm text-gray-600 font-medium mt-0">
              {`${dayjs(iotData?.Ts, "YYYY/MM/DD HH:mm:ss")
                .set("hour", 9)
                .set("minute", 30)
                .format("dddd D MMMM YYYY, [ore] HH:mm")} - `}
              <strong className="text-gray-700 font-roobert tracking-tight">
                Fascia F1
              </strong>
            </Text>

            <InfoIcon
              className="font-bold text-pink-800 text-sm w-4 h-4"
              onClick={() => setIsModalOpen(() => true)}
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-col bg-white rounded-md px-4">
          <CustomLinearProgress
            serial={serial}
            value={iotData?.Payload?.InstantPower ?? 0}
          />
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
