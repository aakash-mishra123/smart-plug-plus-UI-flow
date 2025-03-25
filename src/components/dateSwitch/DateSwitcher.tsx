import React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/it"; // Import Italian locale
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // Tremor uses Heroicons
import { Button } from "@tremor/react"; // Tremor Button component
import { totalDailyUsageType } from "@/api/types/dailyUsageTypes";
import { convertToItalicNumber } from "@/utils/methods";
dayjs.locale("it"); // Set locale globally

type DateSwitcherProps = {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
  data?: totalDailyUsageType;
};

const DateSwitcher = ({
  selectedDate,
  setSelectedDate,
  data,
}: DateSwitcherProps) => {
  const today = dayjs().startOf("day");
  const isNextDisabled = selectedDate.isSame(today, "day");

  const handlePrevious = () => setSelectedDate(selectedDate.subtract(1, "day"));

  const handleNext = () => {
    if (!isNextDisabled) {
      setSelectedDate(selectedDate.add(1, "day"));
    }
  };
  return (
    <div className="flex flex-col gap-0 pt-8 pr-4 pl-4 pb-6 bg-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-0">
          <p className="text-md montserrat-custom text-gray-600">
            Consumo giornaliero
          </p>
          <p className="text-2xl font-bold">
            {convertToItalicNumber(data?.totalEnergyConsumed ?? 0, 100)} Wh
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full pt-2 mb-4 bg-white montserrat-custom">
        <div className="flex flex-col gap-0 items-left">
          <span className="text-gray-400 text-sm font-bold">Giorno</span>

          <span className="text-sm md:text-md font-semibold">
            {selectedDate.locale("it").format("dddd D MMMM YYYY")}
          </span>
        </div>
        <div className={`flex items-center gap-2 mt-1`}>
          <Button
            variant="light"
            size="xs"
            icon={ChevronLeftIcon}
            onClick={handlePrevious}
            className="text-pink-700 p-2 rounded-md cursor-not-allowed bg-gray-300"
          />

          <Button
            variant="light"
            size="xs"
            icon={ChevronRightIcon}
            onClick={handleNext}
            className={`text-pink-700 p-2 rounded-md cursor-not-allowed ${
              isNextDisabled
                ? "opacity-50 bg-gray-600 text-gray-800"
                : "bg-gray-300"
            }`}
            disabled={isNextDisabled}
          />
        </div>
      </div>
      <div
        id="total_consumption_stats"
        className="flex montserrat-custom flex-row justify-between w-full gap-4 pb-2 bg-white border-b-2 border-gray-300"
      >
        <p className="text-sm sm:text-md md:text-lg text-gray-800">
          Media di consumo giornaliero
        </p>
        <p className="text-md font-bold">
          {convertToItalicNumber(data?.averageConsumption ?? 0, 100)} Wh
        </p>
      </div>
      <div
        id="peak_consumption_stats"
        className="flex montserrat-custom items-center flex-row gap-8 justify-between w-full bg-white pt-2 "
      >
        <div className="flex flex-col gap-0">
          <p className="text-sm sm:text-md md:text-lg text-gray-800">
            Orario di consumo massimo giornalerio
          </p>
          <p className="text-sm text-gray-500 font-light">
            Orario {data?.peakConsumption.timeString}
          </p>
        </div>

        <p className="text-md w-18 font-extrabold">
          {convertToItalicNumber(data?.peakConsumption.value ?? 0, 100)} Wh
        </p>
      </div>
    </div>
  );
};
export default DateSwitcher;
