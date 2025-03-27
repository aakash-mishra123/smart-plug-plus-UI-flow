"use client";
import Image from "next/image";
import { Card, Text, Title, Flex } from "@tremor/react/dist";
import { CiPlug1 } from "react-icons/ci";
import MeterIcon from "../../../public/assets/meter_Icon.png";
import { TbCircleFilled } from "react-icons/tb";
import { useState } from "react";
import { fetchEnergyData } from "@/app/api/deviceStatusAPI";
import { useEffect } from "react";
type InfoCardProps = {
  online: boolean;
  id: string;
  serial: string;
};

const InfoCard = () => {
  const [data, setData] = useState<InfoCardProps>({
    online: true,
    id: "",
    serial: "",
  });
  useEffect(() => {
    const getData = async () => {
      const result = await fetchEnergyData();
      setData(result);
    };

    getData();
  }, []);

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
                    data?.serial ?? "abcdefg"
                  }`}</Text>
                </div>
              </Flex>

              <Flex
                justifyContent="start"
                alignItems="center"
                className="mt-2 gap-1"
              >
                {data?.online ? (
                  <TbCircleFilled className="text-blue-600 rounded-full w-3 h-3" />
                ) : (
                  <TbCircleFilled className="text-red-800 rounded-full w-3 h-3" />
                )}
                <div className="flex flex-col ml-2">
                  <Text className="text-gray-700 text-sm">
                    Stato connessione
                  </Text>
                  <div className="flex flex-col gap-0">
                    <Text
                      className={` ${
                        data?.online ? "text-green-600" : "text-red-800"
                      }`}
                    >
                      {data?.online ? "Connessa" : "Non-connessa"}
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
