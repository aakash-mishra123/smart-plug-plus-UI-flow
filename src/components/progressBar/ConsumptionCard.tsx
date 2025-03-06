import { PowerUsageProps } from "@/utils/types";
import { Card, Badge, Text, Metric } from "@tremor/react";
import OverlappingProgressBar from "../progressBar/progressBar";

import { dummyAlertData } from "@/utils/constants";
import WarningCard from "../elements/WarningCard";

const ConsumptionCard = ({
  powerUsage,
  maxPower,
  limitPower,
}: PowerUsageProps) => {
  const isOverLimit = powerUsage > limitPower;

  return (
    <div className="mx-4">
      <Card className="bg-white p-2  montserrat-custom rounded-sm">
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
          <Text className="text-xs text-black mt-2">
            Mercoledì 22 gennaio 2025, ore 09:30 - <strong>Fascia F1</strong>
          </Text>
        </div>
        <hr />
        <div className="flex flex-row gap-2 items-end mt-4 mb-2">
          <Metric
            className={`${
              isOverLimit ? "text-3xl   text-red-600" : "text-green-600 font"
            } pl-3 font-bold`}
          >
            {2}, {3}{" "}
          </Metric>
          <Metric className="text-black text-3xl ">di {maxPower} </Metric>
          <p className="text-xl font-bold">kW</p>
        </div>

        <OverlappingProgressBar value={powerUsage}/>

        <hr className="mt-4"/>

        {/* <div 
          key={0}
          className="space-y-4 mt-4"
        > */}
          {dummyAlertData.map((alert, index) => {
            return (
              <WarningCard 
                alert={alert}
                index={index}
                />
          )})}
        {/* </div> */}
      </Card>
    </div>
  );
};

export default ConsumptionCard;
