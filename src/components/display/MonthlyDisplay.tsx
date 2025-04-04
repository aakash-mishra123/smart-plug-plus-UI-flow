import React from "react";
import { Card, Text } from "@tremor/react";
import { FaEuroSign } from "react-icons/fa";
import { TbBolt } from "react-icons/tb";
import { FaMoneyBills } from "react-icons/fa6";
import { convertToItalicNumber } from "@/utils/methods";
import { FaPercentage } from "react-icons/fa";

// import queryString from "query-string";
// import dayjs from "dayjs";

interface ConsumptionDisplayProps {
  title: string;
  value: number;
  timeString: string;
  unit?: string;
}

const ConsumptionDisplay: React.FC<ConsumptionDisplayProps> = ({
  title,
  value,
  timeString,
  unit,
}) => {
  return (
    <Card className="w-full max-w-xs p-4 py-6 montserrat-custom rounded-[16px] !dark:border-none ring-0 !dark:ring-0 bg-[#ecf2f6] flex-col justify-items-left ">
      <Text className="text-gray-800 font-black text-md xsm:text-sm xs:text-[14px] sm:text-[16px] md:text-2xl">
        {title}
      </Text>
      <p className="text-sm mt-1 text-gray-600">{timeString}</p>
      <div className="flex flex-col gap-2 justify-items-center mt-4">
        <div className="flex-col gap-1 flex text-semibold">
          <p className="tex-sm font-thin">Hai consumato</p>
          <div className="flex flex-row gap-1">
            <TbBolt className="text-pink-800 font-bold text-2xl" />
            <p className="text-lg sm:text-2xl font-extrabold ">
              {convertToItalicNumber(value, 1000, 2) ?? "0"} {unit}
            </p>
          </div>
        </div>

        <div className="flex-col gap-0 flex text-semibold">
          <p className="tex-sm font-thin">Hai speso*</p>
          <div className="flex flex-row gap-2 items-center">
            <FaMoneyBills className="text-2xl font-bold text-pink-600" />
            <div className="flex flex-row gap-1 items-baseline">
              <p className=" text-lg sm:text-2xl font-extrabold ">
                {((value / 1000) * 0.2).toFixed(2)}
              </p>
              <FaEuroSign className="text-md md:text-lg font-bold mt-2 text-black" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const MonthlyDisplay = () => {
  //   const serialId = useSelector(
  //     (store: RootState) => store.deviceData.data.serial
  //   );

  return (
    <div className="flex flex-col gap-4 bg-white px-4">
      <div className="flex flex-col gap-0 pt-8 px-2">
        <p className="font-bold montserrat-custom text-gray-700">
          Andamento consumo
        </p>
        <div className="flex flex-row gap-1 items-baseline text-[#397a5c] ">
          <div className="flex flex-row gap-0 items-baseline">
            <Text className="text-3xl font-black ">{"-41%"}</Text>
            <FaPercentage className="text-2xl font-black" />
          </div>
          <p className="text-xl font-bold ">kWh</p>
        </div>
      </div>
      <div className="w-full text-black flex flex-row gap-4 justify-between pb-4">
        <ConsumptionDisplay
          title="Questo mese"
          value={212400}
          timeString="dal 01/03/25 al 17/03/25"
          unit="kWh"
        />
        <ConsumptionDisplay
          title="Lo Scorso mese"
          value={361100}
          timeString="dal 01/02/25 al 28/02/25"
          unit="kW"
        />
      </div>
      <div className="rounded-lg border-2 mt-0 p-4 flex flex-row gap-2 border-[#01855d] bg-[#f5fff6] text-black font-roboto items-center">
        <p>
          Lo sapevi che questo mese hai consumato il{" "}
          <b>
            {Math.abs(41)} % {41 < 0 ? "in meno" : "in più"}
          </b>{" "}
          rispetto allo scorso mese? 🎉
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

export default MonthlyDisplay;
