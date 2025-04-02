import dayjs from "dayjs";
//import { fetchData } from "@/app/store/slice/monthlyUsageSlice";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/app/store";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@tremor/react";
import { convertToItalicNumber } from "@/utils/methods";
const MonthlyView = () => {
  // const dispatch = useDispatch();
  // const serial = useSelector(
  //   (store: RootState) => store?.deviceData.data.serial
  // );
  const [selectedYear, setSelectedYear] = useState<number>(dayjs().year());
  const [selectedMonth, setSelectedMonth] = useState<number>(dayjs().month());
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  useEffect(() => {
    const currentYear = dayjs().year();
    const currentMonth = dayjs().month();
    setIsNextDisabled(
      selectedYear === currentYear && selectedMonth === currentMonth
    );
  }, [selectedYear, selectedMonth]);

  const handlePrevious = () => {
    setSelectedMonth((prevMonth) => {
      if (prevMonth === 0) {
        setSelectedYear((prevYear) => prevYear - 1);
        return 11; // December of the previous year
      } else return prevMonth - 1;
    });
  };

  const handleNext = () => {
    if (isNextDisabled) return;

    setSelectedMonth((prevMonth) => {
      if (prevMonth === 11) {
        setSelectedYear((prevYear) => prevYear + 1);
        return 0; // January of the next year
      } else return prevMonth + 1;
    });
  };

  useEffect(() => {
    //  if (fetchData) {
    // dispatch(fetchData(serial, selectedMonth, selectedYear));
    // }
  }, [selectedMonth, selectedYear]);

  return (
    <div className="flex flex-col gap-0 pt-8 pr-4 pl-4 pb-6 w-100 bg-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-0">
          <p className="text-md font-roboto text-gray-600">Consumo mensile</p>
          <p className="text-2xl font-bold">
            {convertToItalicNumber(1234, 1000, 2)} kWh
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-0 mt-2">
          <p className="font-roboto text-md text-gray-600">Mese</p>
          <p className="font-roboto text-lg font-bold">
            {dayjs().month(selectedMonth).format("MMMM")}{" "}
            {dayjs().year(selectedYear).format("YYYY")}
          </p>
        </div>

        <div className={`flex items-center gap-2 mt-1 mr-1`}>
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
            className={`text-pink-700 p-2 rounded-md  ${
              isNextDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-gray-300"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default MonthlyView;
