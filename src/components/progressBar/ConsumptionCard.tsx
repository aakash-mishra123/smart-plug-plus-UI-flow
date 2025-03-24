"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { Card, Badge, Text, Metric } from "@tremor/react/dist";
import { InfoIcon } from "lucide-react";
import { PowerUsageProps } from "@/utils/types";
import { IoIosCheckmarkCircle } from "react-icons/io";
const DrawerModal = dynamic(
  () => import("../../components/drawer/DrawerModal")
);
const CustomLinearProgress = dynamic(
  () => import("../progressBar/progressBar")
);

const ConsumptionCard = ({ powerUsage, maxPower }: PowerUsageProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Card className="bg-transparent montserrat-custom rounded-sm p-4">
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
              {`${dayjs().locale("it").format("dddd D MMMM YYYY")} ore 09:30 -`}{" "}
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
              {2}, {3}{" "}
            </Metric>
            <Metric className=" text-3xl ">di {maxPower} </Metric>
            <p className="text-xl font-bold">kW</p>
          </div>

          <CustomLinearProgress value={powerUsage} />
        </div>
        <hr />
        <div className="rounded-lg border-2 mt-4 p-4 flex flex-row gap-2 border-[#01855d] bg-[#f5fff6] text-black montserrat-custom items-center">
          <IoIosCheckmarkCircle className="text-lg w-12 h-12 text-[#01855d]" />
          <p>
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
