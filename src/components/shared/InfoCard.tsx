"use client";
import Image from "next/image";
import { Card, Text, Title, Flex } from "@tremor/react/dist";
import { GoCheckCircle } from "react-icons/go";
import { CiPlug1 } from "react-icons/ci";
import MeterIcon from "../../../public/assets/meter_Icon.png";

type InfoCardProps = {
  online: boolean;
  id: string;
  serial: string;
};

const InfoCard = ({ online }: InfoCardProps) => {
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
                  <Text className="text-gray-500">Numero seriale</Text>
                  <Text className="font-semibold">{`c2g`}</Text>
                </div>
              </Flex>

              <Flex justifyContent="start" alignItems="center" className="mt-2">
                <GoCheckCircle
                  className={`font-bold text-lg w-4 ${
                    online ? "text-green-800" : "text-red-800"
                  }`}
                />
                <div className="flex flex-col ml-2">
                  <Text className="text-gray-700 text-sm">
                    Stato connessione
                  </Text>
                  <div className="flex flex-col gap-1">
                    <Text
                      className={` ${
                        online ? "text-green-600" : "text-red-800"
                      }`}
                    >
                      {online ? "Connessa" : "Non-connessa"}
                    </Text>
                    <Text className="text-md font-thin">Non-connessaa</Text>
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
