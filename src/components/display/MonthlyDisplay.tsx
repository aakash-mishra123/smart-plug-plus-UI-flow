import React from "react";
import { Card, Metric, Text } from "@tremor/react";
import { FaEuroSign } from "react-icons/fa";
import { TbBolt } from "react-icons/tb";
import { FaMoneyBills } from "react-icons/fa6";
import { convertToItalicNumber } from "@/utils/methods";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
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
  const billCost = ((value / 1000) * 0.2).toFixed(2);
  return (
    <Card className="w-full max-w-xs p-4 montserrat-custom rounded-[6px] !dark:border-none ring-0 !dark:ring-0 bg-[#F7F8FB] flex-col justify-items-left ">
      <Typography
        variant="h5"
        sx={{
          fontSize: {
            xsm: "0.5rem", // mobile screen size (xs)
            xs: "1rem",
            sm: "1.5rem", // small screens (sm and above)
            md: "2rem", // medium screens (md and above)
          },
          fontWeight: "bold",
          fontStyle: "brand",
          wordSpacing: "2px",
        }}
        className="tracing-wider"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: "thin",
          fontSize: "12px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: grey[600],
        }}
        className="tracing-wider"
      >
        {timeString}
      </Typography>
      <div className="flex flex-col gap-2 justify-items-center mt-4">
        <div className="flex-col gap-1 flex text-semibold">
          <p className="text-sm xss:text-base font-semibold">Hai consumato</p>
          <div className="flex flex-row gap-1 items-center">
            <TbBolt className="text-[#D3135A] font-bold text-md" />
            <div className="flex flex-row gap-0 items-center">
              <Metric
                className="text-sm xss:text-lg sm:text-xl font-bold font-roobert"
                style={{ color: "black" }}
              >
                {convertToItalicNumber(value, 1000, 2).split(".")[0] ?? "0"}
              </Metric>
              <Metric
                className="font-mono"
                style={{ color: "black", fontWeight: "bolder" }}
              >
                ,
              </Metric>
              <Metric
                className="text-sm xss:text-lg sm:text-xl font-bold font-roobert -mr-1"
                style={{ color: "black" }}
              >
                {convertToItalicNumber(value, 1000, 2).split(".")[1] ?? "0"}{" "}
                {unit}
              </Metric>
            </div>
          </div>
        </div>

        <div className="flex-col gap-0 flex text-semibold">
          <p className="text-sm xss:text-base font-semibold">Hai speso*</p>
          <div className="flex flex-row gap-2 items-center">
            <FaMoneyBills className="text-[#D3135A] font-bold text-md mt-1" />
            <div className="flex flex-row gap-2 items-baseline">
              <div className="flex flex-row gap-0 items-center">
                <Metric
                  className="text-sm xss:text-lg sm:text-xl font-bold font-roobert"
                  style={{ color: "black" }}
                >
                  {billCost.split(".")[0]}
                </Metric>
                <Metric
                  className="font-mono"
                  style={{ color: "black", fontWeight: "bolder" }}
                >
                  ,
                </Metric>
                <Metric
                  className="text-sm xss:text-lg sm:text-xl font-bold font-roobert -mr-1"
                  style={{ color: "black" }}
                >
                  {billCost.split(".")[1]}
                </Metric>
              </div>
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
            <Text className="text-3xl font-black ">{"-41"}</Text>
          </div>
          <p className="text-xl font-bold ">kWh</p>
        </div>
      </div>
      <div className="w-full text-black flex flex-row gap-4 justify-between ">
        <ConsumptionDisplay
          title="Questo mese"
          value={212400}
          timeString="dal 01/03/25 al 17/03/25"
          unit="kWh"
        />
        <ConsumptionDisplay
          title="Lo scorso mese"
          value={361100}
          timeString="dal 01/02/25 al 28/02/25"
          unit="kW"
        />
      </div>
      <div className="rounded-[4px] border-2 px-4 py-2 flex flex-row gap-2 border-[#01855d] bg-[#f5fff6] text-black font-roboto items-center">
        <p className={`text-xs xsss:text-sm xsm:text-md text-black`}>
          Lo sapevi che questo mese hai consumato il{" "}
          <b>
            {Math.abs(41)} % {41 < 0 ? "in meno" : "in più"}
          </b>{" "}
          rispetto allo scorso mese? 🎉
        </p>
      </div>

      <hr className="text-gray-600 text-md" />

      <p className="text-[#59697e] montserrat-custom text-xs xsss:text-sm xsm:text-md font-bold mx-2 mt-1">
        {" "}
        * Dicitura costo dell’energia. Lorem ipsum dolor sit amet, consectetur
        adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna
        aliqua.{" "}
      </p>
    </div>
  );
};

export default MonthlyDisplay;
