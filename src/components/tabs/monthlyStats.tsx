import { dailyEnergyTypes } from "@/utils/types";
import { convertToItalicNumber } from "@/utils/methods";
import dayjs from "dayjs";
import "dayjs/locale/it";
dayjs.locale("it");

interface monthlyStatsProps {
  monthlyData: dailyEnergyTypes[];
}
const MonthlyStatsView = ({ monthlyData }: monthlyStatsProps) => {
  const totalEnergyConsumed = monthlyData.reduce<number>(
    (sum, item) => sum + (item.totalActEnergy ?? 0),
    0 // Initialize sum as 0
  );
  const peakConsumption = {
    consumption: 0,
    date: "",
  };
  monthlyData.forEach((item) => {
    // If item.dayBaseEnergy exists and is greater than current peak consumption, update the peakConsumption
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
        className="flex font-roboto flex-row justify-between w-full gap-4 pb-2 px-4 bg-white border-b-2 border-gray-300"
      >
        <p className="text-base sm:text-lg md:text-lg text-gray-800">
          Media di consumo giornaliero
        </p>
        <p className="text-base md:text-md font-roobert tracking-tighter">
          {convertToItalicNumber(totalEnergyConsumed ?? 0, 100, 2)} kWh
        </p>
      </div>
      <div
        id="peak_consumption_stats"
        className="flex montserrat-custom items-center flex-row justify-between px-4  w-full bg-white pt-2 "
      >
        <div className="flex flex-col gap-0 w-3/5">
          <p className="text-sm sm:text-md md:text-lg text-gray-800">
            Orario di consumo massimo giornalerio
          </p>
          <p className="text-sm text-gray-500 font-light font-roboto">
            Orario {dayjs(peakConsumption.date).format("D MMMM YYYY")}
          </p>
        </div>

        <p
          className="text-base md:text-md font-roobert tracking-tighter
        "
        >
          {convertToItalicNumber(peakConsumption.consumption ?? 0, 100, 2)} kWh
        </p>
      </div>
    </>
  );
};

export default MonthlyStatsView;
