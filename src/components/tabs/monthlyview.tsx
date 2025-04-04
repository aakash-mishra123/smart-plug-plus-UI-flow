import dayjs from "dayjs";
//import { fetchData } from "@/app/store/slice/monthlyUsageSlice";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@tremor/react";
import { convertToItalicNumber } from "@/utils/methods";
import { dummyDailyData } from "@/utils/constants";
import { motion } from "framer-motion";
import { BarChart } from "../shared/BarChart";

const MonthlyView = () => {
  const [selectedYear, setSelectedYear] = useState<number>(dayjs().year());
  const [selectedMonth, setSelectedMonth] = useState<number>(dayjs().month());
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const [barWidth, setBarWidth] = useState(10); // Default bar width

  useEffect(() => {
    const updateBarWidth = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) setBarWidth(6); // Mobile (Small)
      else if (windowWidth < 1024) setBarWidth(7); // Tablet (Medium)
      else setBarWidth(10); // Desktop (Large)
    };

    updateBarWidth(); // Set initial value
    window.addEventListener("resize", updateBarWidth); // Update on resize
    return () => window.removeEventListener("resize", updateBarWidth); // Cleanup
  }, []);

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

  return (
    <div className="flex flex-col bg-white">
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
                isNextDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-300"
              }`}
            />
          </div>
        </div>
      </div>

      <motion.div
        key={JSON.stringify(dummyDailyData)} // Ensures re-render when data changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <BarChart
          data={dummyDailyData}
          index="date"
          categories={["totalActEnergy"]}
          barWidth={barWidth}
          showLegend={false}
          showTooltip={false}
          barColor={"#c71c5d"}
          handleBarClick={() => {}}
          layout="horizontal"
          colors={["blue"]}
          customWrapperStyle={{
            borderRadius: "0.5rem 0.5rem 0 0",
            marginRight: "-4px",
          }}
          tickGap={0}
          startEndOnly={false}
          showYAxis={true}
          selectedBar={""}
          enableAnimation={true}
          animationDuration={0.5}
          showSparkPlugs={true}
          skipXAxisLabels={false}
        />
      </motion.div>
    </div>
  );
};

export default MonthlyView;
