"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

import { Card, Badge, Text, Metric } from "@tremor/react/dist";
import { InfoIcon } from "lucide-react";
import { PowerUsageProps, DrawerModalProps } from "@/utils/types";

const DrawerModal = dynamic(() => import("../../components/drawer/DrawerModal"));
const CustomLinearProgress = dynamic(() => import("../progressBar/progressBar"));

// import useMqttClient from "../hooks/useMqttClient";

const ConsumptionCard = ({
  powerUsage,
  maxPower,
}: PowerUsageProps) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const { client, isConnected } = useMqttClient();
  return (
    <div>
      <Card
        className="bg-transparent p-2 mt-2 montserrat-custom rounded-sm"
      >
        <div className="flex flex-col p-2 justify-between">
          <div className="flex justify-between">
            <Text className="text-lg text-black font-semibold">Consumo istantaneo</Text>
            <Badge
              className="text-green-700 font-bold  bg-green-100 px-2"
            >
              TEMPO REALE
            </Badge>
          </div>
          <div className="flex flex-row gap-2 items-end ">
            <Text className="text-xs text-black font-semibold mt-2">
              Mercoledì 22 gennaio 2025, ore 09:30 - <strong>Fascia F1</strong>
            </Text>

            <InfoIcon className="font-semibold text-pink-800 text-sm w-4 h-4" onClick={() => setIsModalOpen(() => true)} />
          </div>
        </div>
        <hr />
        <div className="flex flex-col bg-white rounded-md px-4">

          <div className="flex flex-row gap-2 items-end mt-4 mb-4 pl-2 text-black">
          <Metric
              className={"text-3xl text-green-600 font-bold"}
            >
            {2}, {3}{" "}
          </Metric>
            <Metric className=" text-3xl ">di {maxPower} </Metric>
          <p className="text-xl font-bold">kW</p>
        </div>

        <CustomLinearProgress value={powerUsage} />
        </div>
        {/* {dummyAlertData.map((alert, index) => {
            return (
              <WarningCard 
                key={index}
                alert={alert}
                index={index}
                />
            )
          })} */}
      </Card>
      <DrawerModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        className="bg-white pb-12 h-full"
      />
    </div>
  );
};

export default ConsumptionCard;
