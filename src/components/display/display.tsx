import React from "react";
import { Card, Text } from "@tremor/react";
import { FaEuroSign } from "react-icons/fa";
import { TbBolt } from "react-icons/tb";
import { FaMoneyBills } from "react-icons/fa6";
import { convertToItalicNumber } from "@/utils/methods";
import { FaPercentage } from "react-icons/fa";
//import { fetchData, resetData } from "@/app/store/redux/slice/powerSlice";
interface ConsumptionDisplayProps {
  title: string;
  value: number;
  unit?: string;
}

type DisplayProps = {
  currentDayConsumption: number;
  previousDayConsumption: number;
};

const ConsumptionDisplay: React.FC<ConsumptionDisplayProps> = ({
  title,
  value,
  unit,
}) => {
  return (
    <Card className="w-full max-w-xs p-4 py-6 montserrat-custom rounded-xl !dark:border-none ring-0 !dark:ring-0 bg-[#ecf2f6] flex-col justify-items-left ">
      <Text className="text-gray-800 font-black text-2xl">{title}</Text>
      <p className="text-sm mt-1 text-gray-600">dalle 00 alle 13:30</p>
      <div className="flex flex-col gap-2 justify-items-center mt-4">
        <div className="flex-col gap-1 flex text-semibold">
          <p className="tex-sm font-thin">Hai consumato</p>
          <div className="flex flex-row gap-1">
            <TbBolt className="text-pink-800 font-bold text-2xl" />
            <p className="text-lg sm:text-2xl font-black ">
              {convertToItalicNumber(value, 1000, 2)} {unit}
            </p>
          </div>
        </div>

        <div className="flex-col gap-0 flex text-semibold">
          <p className="tex-sm font-thin">Hai speso*</p>
          <div className="flex flex-row gap-2 items-center">
            <FaMoneyBills className="text-2xl font-bold text-pink-600" />
            <div className="flex flex-row gap-1 items-baseline">
              <p className=" text-lg sm:text-2xl font-black ">
                {(value * 0.2).toFixed(1)}
              </p>
              <FaEuroSign className="text-md md:text-lg font-bold mt-2 text-black" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Display = ({
  currentDayConsumption,
  previousDayConsumption,
}: DisplayProps) => {
  const difference = Math.ceil(((67 - 78) / 87) * 100);

  return (
    <div className="flex flex-col gap-4 bg-white px-4">
      <div className="flex flex-col gap-0 pt-8 px-2">
        <p className="font-bold montserrat-custom text-gray-700">
          Andamento consumo
        </p>
        <div className="flex flex-row gap-1 items-baseline text-[#397a5c] ">
          <div className="flex flex-row gap-0 items-baseline">
            <Text className="text-3xl font-black ">{difference}</Text>
            <FaPercentage className="text-2xl font-black" />
          </div>
          <p className="text-xl font-bold ">kWh</p>
        </div>
      </div>
      <div className="w-full text-black flex flex-row gap-4 justify-between pb-4">
        <ConsumptionDisplay
          title="Oggi"
          value={currentDayConsumption}
          unit="kW"
        />
        <ConsumptionDisplay
          title="Leri"
          value={previousDayConsumption}
          unit="kW"
        />
      </div>
      <div className="rounded-lg border-2 mt-4 p-4 flex flex-row gap-2 border-[#01855d] bg-[#f5fff6] text-black font-roboto items-center">
        <p>
          Lo sapevi che questo mese hai consumato il 41% in meno rispetto allo
          scorso mese?{" "}
        </p>
      </div>

      <hr className="text-gray-600 text-md" />

      <p className="text-[#667890] montserrat-custom text-sm font-bold mx-2">
        {" "}
        * Dicitura costo dell’energia. Lorem ipsum dolor sit amet, consectetur
        adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna
        aliqua.{" "}
      </p>
    </div>
  );
};

export default Display;
