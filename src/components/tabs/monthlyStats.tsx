import { dailyEnergyTypes } from "@/utils/types";
import { convertToItalicNumber } from "@/utils/methods";
import dayjs from "dayjs";
import "dayjs/locale/it";
dayjs.locale("it");

interface monthlyStatsProps {
  monthlyData: dailyEnergyTypes[];
}
const MonthlyStatsView = ({ monthlyData }: monthlyStatsProps) => {
  const averageEnergyConsumed =
    monthlyData.reduce<number>(
      (sum, item) => sum + (item.totalActEnergy ?? 0),
      0 // Initialize sum as 0
    ) / monthlyData.length;

  const peakConsumption = {
    consumption: 0,
    date: "",
  };
  
  monthlyData.forEach((item) => {
    if (
      item.totalActEnergy &&
      item.totalActEnergy > peakConsumption.consumption
    ) {
      peakConsumption.consumption = item.totalActEnergy;
      peakConsumption.date = item.formattedDate ?? ""; // If `item.date` is undefined, use empty string
    }
  });
  return (
    <>
      <div
        id="total_consumption_stats"
        className="flex font-roboto flex-row justify-between w-full gap-4 pb-4 px-4 bg-white border-b-2 border-gray-300"
      >
        <p className="text-sm font-medium xss:text-base md:text-lg text-gray-800">
          Media di consumo mensile
        </p>
        <span className="flex flex-row items-end gap-0">
          <p className="text-base md:text-md font-roobert tracking-tighter">
            {
              convertToItalicNumber(averageEnergyConsumed, 1000, 2).split(
                "."
              )[0]
            }
          </p>
          <p className="font-mono text-sm font-bold">,</p>
          <p className="text-base md:text-md font-roobert tracking-tighter -ml-0">
            {
              convertToItalicNumber(averageEnergyConsumed, 1000, 2).split(
                "."
              )[1]
            }{" "}
            kWh
          </p>
        </span>
      </div>
      <div
        id="peak_consumption_stats"
        className="flex montserrat-custom items-center flex-row justify-between px-4 w-full bg-white pt-4 "
      >
        <div className="flex flex-col gap-0 w-3/5">
          <p className="text-sm font-medium xss:text-base md:text-md text-gray-800">
            Orario di consumo massimo mensile
          </p>
          <p className="text-sm text-gray-500 font-light font-roboto">
            Orario {dayjs(peakConsumption.date).format("D MMMM YYYY")}
          </p>
        </div>

        <span className="flex flex-row items-end gap-0">
          <p className="text-base md:text-md font-roobert tracking-tighter">
            {
              convertToItalicNumber(peakConsumption.consumption, 1000, 2).split(
                "."
              )[0]
            }
          </p>
          <p className="font-mono text-sm font-bold">,</p>
          <p className="text-base md:text-md font-roobert tracking-tighter -ml-1/2">
            {
              convertToItalicNumber(peakConsumption.consumption, 1000, 2).split(
                "."
              )[1]
            }{" "}
            kWh
          </p>
        </span>
      </div>
    </>
  );
};

export default MonthlyStatsView;
