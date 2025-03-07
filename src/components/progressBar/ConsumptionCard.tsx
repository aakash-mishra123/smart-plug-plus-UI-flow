"use client";
import { PowerUsageProps } from "@/utils/types";
import { Card, Badge, Text, Metric } from "@tremor/react";
// import { dummyAlertData } from "@/utils/constants";
// import WarningCard from "../elements/WarningCard";
import CustomLinearProgress from "../progressBar/progressBar";
import { InfoIcon } from "lucide-react";
import { DrawerModal } from "../drawer/DrawerModal";
import { useState } from "react";

const ConsumptionCard = ({
  powerUsage,
  maxPower,
}: PowerUsageProps) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="mx-2 mt-2 rounded-sm w-[90%]">
      <Card className="bg-white p-2 montserrat-custom rounded-sm">
        <div className="flex flex-col p-2 justify-between">
          <div className="flex justify-between">
            <Text className="text-lg font-semibold">Consumo istantaneo</Text>
            <Badge
              color="green"
              className="text-green-[#4bbf52] font-medium bg-green-100"
            >
              TEMPO REALE
            </Badge>
          </div>
          <div className="flex flex-row justify-between pt-1">

          <Text className="text-xs text-black mt-2">
            Mercoledì 22 gennaio 2025, ore 09:30 - <strong>Fascia F1</strong>
          </Text>

          <InfoIcon className="font-semibold text-pink-800 text-md " onClick={() => setIsModalOpen(() => true)}/>
          </div>
        </div>
        <hr />
        <div className="flex flex-row gap-2 items-end mt-4 mb-2">
          <Metric
            className={"text-3xl text-green-600 fontfont-bold"}
          >
            {2}, {3}{" "}
          </Metric>
          <Metric className="text-black text-3xl ">di {maxPower} </Metric>
          <p className="text-xl font-bold">kW</p>
        </div>

        <CustomLinearProgress value={powerUsage}/>

        <hr className="mt-4"/>

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
      <DrawerModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default ConsumptionCard;
