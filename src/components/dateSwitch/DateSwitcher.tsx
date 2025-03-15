import React from "react";
import dayjs, {Dayjs} from "dayjs";
import "dayjs/locale/it"; // Import Italian locale
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // Tremor uses Heroicons
import { Button } from "@tremor/react"; // Tremor Button component

dayjs.locale("it"); // Set locale globally

type DateSwitcherProps = {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
};

const 
DateSwitcher = ({
  selectedDate,
  setSelectedDate
}: DateSwitcherProps) => {

  const handlePrevious = () => setSelectedDate(selectedDate.subtract(1, "day"));

  const handleNext = () => setSelectedDate(selectedDate.add(1, "day"));

  return (
    <div className="flex flex-row justify-between w-full p-2 px-4 py-1 pt-4 bg-white montserrat-custom">
      <div className="flex flex-col gap-0 items-left">

      <span className="text-gray-400 text-sm font-bold">Giorno</span>

      <span className="text-md font-semibold">
      {selectedDate.locale("it").format("dddd D MMMM YYYY")}
        </span>
      </div>
      <div className="flex items-center gap-4 mt-1">
        <Button variant="light" size="lg" icon={ChevronLeftIcon} onClick={handlePrevious} className="text-pink-700" />

        <Button variant="light" size="lg" icon={ChevronRightIcon} onClick={handleNext} className="text-pink-700" />
      </div>
    </div>
  );
};

export default DateSwitcher;