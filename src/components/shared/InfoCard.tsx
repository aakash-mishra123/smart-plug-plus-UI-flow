"use client";
import Image from "next/image";
import { Card, Text, Title, Flex } from "@tremor/react/dist";
import { CiPlug1 } from "react-icons/ci";
import MeterIcon from "../../../public/assets/meter_Icon.png";
// import { startMQTTService } from "@/lib/iot_core/temp-mqtt";
import { useEffect, useState } from "react";
import axios from "axios";
import { chain2gatedummy } from "@/utils/constants";
import { TbCircleFilled } from "react-icons/tb";

type InfoCardProps = {
  online: boolean;
  id: string;
  serial: string;
};

const InfoCard = ({ online }: InfoCardProps) => {
  //const data = FetchDeviceData();

  const [iotData, setiotData] = useState<InfoCardProps>(chain2gatedummy);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const STATUS_SLUG = "v1/energy/chain-to-gate";

  useEffect(
    () => {
      const FetchDeviceData = async () => {
        const url = `${BASE_URL}/${STATUS_SLUG}`;

        // const [data, setData] = useState<DeviceStatusResponseType | null>(null);
        try {
          const { data } = await axios.get(url, {
            params: {},
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZFByZXNhRm9ybWlkYWJpbGUiOiIwMzY2ZDQ4My0zYjI2LTRjMGUtOTZkZS1lZjRlNWNkOWYyMzAiLCJpc3MiOiJBUFAiLCJleHAiOjE3NDE2ODg5OTR9.Bste60xcPzeVwDwSC54xr8XuoXhc2qB7AhC-9M9G6ZfrWkZd8qGMfYiVqomk3DR37_-XlagqoDgvNjrSf2eDXAzkrXQH8ZVnJXz08aDhZjouZYMN_nv4QKo3eNek20mO9MsSjLNmn1MfPqKWYLwPMOCFo4O62LCs2mESexUAaSYPI-FWowtwWuWyOI_fs_7OQvGvKXyzhRNt9EBz1FzBvs5I1QSFXTyzm8pz8nyOPNiRbtSDrLcFiiS422Jv6P-SmD0rTxlbxfvZPYHosAEmq217Xg0SMp715kKrbxBAu6Y3wiRTWwnn92JXjJ_n3uH5oNHv9nCErcfBBKiGt81NnQ`,
              "Cache-Control": "no-cache",
            },
          });
          setiotData(data[0]);
          return data;
        } catch (err) {
          if (err instanceof Error) {
            console.log(err.message);
            return;
          }
        }
      };

      FetchDeviceData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <div className="bg-[#C81D5E] h-fit p-4 min-w-[100vw]">
        <Card className="bg-white rounded-md p-4">
          <Title className="text-xl text-black font-semibold mb-2">
            La mia presa plus
          </Title>

          <div className="flex flex-row gap-4">
            <Image src={MeterIcon} className="w-20 h-24" alt="meter_icon" />
            <div className="flex flex-col gap-0 text-black">
              <Flex justifyContent="start" alignItems="center" className="mt-2">
                <CiPlug1 className="font-bold text-xl text-green-800" />
                <div className="text-xs flex flex-col ml-2">
                  <Text className="text-gray-500 text-md">Numero seriale</Text>
                  <Text className="font-semibold">{`${
                    iotData?.serial ?? "abcdefg"
                  }`}</Text>
                </div>
              </Flex>

              <Flex justifyContent="start" alignItems="center" className="mt-2">
                {iotData?.online ? (
                  <TbCircleFilled className="text-blue-600 rounded-full w-4 h-4" />
                ) : (
                  <TbCircleFilled className="text-red-800 rounded-full w-4 h-4" />
                )}
                <div className="flex flex-col ml-2">
                  <Text className="text-gray-700 text-sm">
                    Stato connessione
                  </Text>
                  <div className="flex flex-col gap-0">
                    <Text
                      className={` ${
                        online ? "text-green-600" : "text-red-800"
                      }`}
                    >
                      {online ? "Connessa" : "Non-connessa"}
                    </Text>
                  </div>
                </div>
              </Flex>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default InfoCard;
