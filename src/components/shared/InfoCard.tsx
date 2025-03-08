"use client";

import { Card, Text, Title, Flex, } from "@tremor/react";
import { GoCheckCircle } from "react-icons/go";
import { IoChevronBack } from "react-icons/io5";
import { PiGearBold } from "react-icons/pi";
import { CiPlug1 } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Image from "next/image";
import meterIcon from "../../../public/assets/meter_Icon.png";

const InfoCard = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#C81D5E] h-fit p-4 min-w-[100vw] mb-4">
        {/* Header */}
        <Flex justifyContent="between" alignItems="center" className="mb-4">
          <IoChevronBack
            onClick={() => {
              router.push("/");
            }}
            className="w-10 h-10 p-2 rounded-3xl bg-white text-lg text-black font-bold m-2"
          />

          <Title className="font-bold text-white montserrat-custom text-md">La mia presa plus</Title>

          <PiGearBold
            onClick={() => {
              router.push("/settings");
            }}
            className="w-10 h-10 p-2 rounded-3xl bg-white text-lg text-black font-bold "
          />

        </Flex>

        {/* Card for Device Info */}
        <Card className="bg-white rounded-md p-4">
          <Title className="text-xl font-semibold mb-2">La mia presa plus</Title>

          <div className="flex flex-row gap-4">

            <Image
              src={meterIcon}
              className="w-20 h-24"
              alt="meter_icon"
            />
            <div className="flex flex-col gap-0">
              <Flex justifyContent="start" alignItems="center" className="mt-2" >
                <CiPlug1 className="font-bold text-xl text-green-800" />
                <div className="text-xs flex flex-col ml-2">
                  <Text className="text-gray-500">Numero seriale</Text>
                  <Text className="font-semibold">c2G-XXXXXXX</Text>
                </div>
              </Flex>

              <Flex justifyContent="start" alignItems="center" className="mt-2" >
                <GoCheckCircle className="font-bold text-lg w-4 text-green-800" />
                <div className="flex flex-col ml-2">
                  <Text className="text-gray-700 text-sm">Stato connessione</Text>
                  <Text className="text-green-600">Connessa</Text>
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
