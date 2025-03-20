import React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/it"; // Import Italian locale
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // Tremor uses Heroicons
import { Button } from "@tremor/react"; // Tremor Button component

dayjs.locale("it"); // Set locale globally

type DateSwitcherProps = {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
};

const DateSwitcher = ({ selectedDate, setSelectedDate }: DateSwitcherProps) => {
  const today = dayjs().startOf("day");
  const isNextDisabled = selectedDate.isSame(today, "day");

  const handlePrevious = () => setSelectedDate(selectedDate.subtract(1, "day"));

  const handleNext = () => {
    if (!isNextDisabled) {
      setSelectedDate(selectedDate.add(1, "day"));
    }
  };
  const totalConsumption = "12,8";
  const averageConsumption = "1,0";
  const peakConsumption = "3,3";

  return (
    <div className="flex flex-col gap-0 pt-8 pr-4 pl-4 pb-10 bg-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-0">
          <p className="text-lg montserrat-custom text-gray-400">
            Consumo giornaliero
          </p>
          <p className="text-2xl font-bold">{totalConsumption} kWh</p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full pt-2 mb-4 bg-white montserrat-custom">
        <div className="flex flex-col gap-0 items-left">
          <span className="text-gray-400 text-sm font-bold">Giorno</span>

          <span className="text-md font-semibold">
            {selectedDate.locale("it").format("dddd D MMMM YYYY")}
          </span>
        </div>
        <div
          className={`flex items-center ${
            isNextDisabled ? "gap-4" : "gap-6"
          } mt-1`}
        >
          <Button
            variant="light"
            size="xs"
            icon={ChevronLeftIcon}
            onClick={handlePrevious}
            className="text-pink-700"
          />

          <Button
            variant="light"
            size="xs"
            icon={ChevronRightIcon}
            onClick={handleNext}
            className={`text-pink-700 ${
              isNextDisabled
                ? "opacity-50 cursor-not-allowed bg-gray-400 text-gray-800 rounded-md p-2"
                : ""
            }`}
            disabled={isNextDisabled}
          />
        </div>
      </div>
      <div
        id="total_consumption_stats"
        className="flex montserrat-custom flex-row justify-between w-full gap-4 pb-2 bg-white border-b-2 border-gray-300"
      >
        <p className="text-sm text-gray-800">Media di consumo giornaliero</p>
        <p className="text-md font-bold">{averageConsumption} kWh</p>
      </div>
      <div
        id="peak_consumption_stats"
        className="flex montserrat-custom items-center flex-row gap-8 justify-between w-full bg-white pt-2 "
      >
        <div className="flex flex-col gap-0">
          <p className="text-md text-gray-800">
            Orario di consumo massimo giornalerio
          </p>
          <p className="text-sm text-gray-500 font-light">Orario {}</p>
        </div>

        <p className="text-md w-16 font-extrabold">{peakConsumption} kWh</p>
      </div>
    </div>
  );
};
export default DateSwitcher;
