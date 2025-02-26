import { PowerUsageProps } from "@/utils/types";
import { Card, Badge, Text, Metric } from "@tremor/react";
import OverlappingProgressBar from "../progressBar/progressBar";

const ConsumptionCard = ({  powerUsage, maxPower, limitPower }: PowerUsageProps) => {
    const isOverLimit = powerUsage > limitPower;

    return (
        <div className="mx-4">
        <Card
        className="bg-white p-2 montserrat-custom"
      >
        <div className="flex flex-col p-2 justify-between">
          <div className="flex justify-between">

          <Text className="text-lg font-semibold">Consumo istantaneo</Text>
            <Badge color="green" className="text-green-[#4bbf52] font-medium font-medium bg-green-100">TEMPO REALE</Badge>
          </div>
        <Text className="text-sm font-black opacity-70 mt-2">Mercoledì 22 gennaio 2025, ore 09:30 - <strong>Fascia F1</strong></Text>
       
        </div>
        <hr />
        <Metric className={`mt-2 ${isOverLimit ? 'text-2xl text-red-600' : 'text-green-600'} pl-3 mb-2`}>{2.4} di {maxPower} kW</Metric>

      <OverlappingProgressBar value={45} buffer={65} />
      </Card>

        </div>

    )
};

export default ConsumptionCard;