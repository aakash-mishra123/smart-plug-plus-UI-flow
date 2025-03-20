"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
//import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BarChart } from "@/components/shared/BarChart";
import { quarterUsageData } from "@/api/types/dailyUsageTypes";
import { Button } from "@tremor/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
interface BarchartProps {
  chartdata: quarterUsageData[];
  selectedBar: string;
  setselectedbar: (data: string) => void;
  setselectedbardata: (data: quarterUsageData) => void;
}
const BarChartHero = ({
  chartdata,
  selectedBar,
  setselectedbar,
  setselectedbardata,
}: BarchartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [barWidth, setBarWidth] = useState(7); // Default bar width

  useEffect(() => {
    const updateBarWidth = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 640) setBarWidth(5); // Mobile (Small)
      else if (windowWidth < 1024) setBarWidth(7); // Tablet (Medium)
      else setBarWidth(10); // Desktop (Large)
    };

    updateBarWidth(); // Set initial value
    window.addEventListener("resize", updateBarWidth); // Update on resize

    return () => window.removeEventListener("resize", updateBarWidth); // Cleanup
  }, []);

  const handleBarClick = useCallback(
    async (date: string) => {
      setselectedbar(date);

      await Promise.resolve(); // Ensures the state update completes before proceeding

      const newSelectedBar = chartdata.findIndex((bar) => bar.date === date);
      if (newSelectedBar !== -1) {
        setselectedbardata(chartdata[newSelectedBar]);
      }
    },
    [chartdata, setselectedbar, setselectedbardata]
  );

  const handlePrevClick = useCallback(() => {
    const currentIndex = chartdata.findIndex((bar) => bar.date === selectedBar);
    if (currentIndex > 0) {
      setselectedbar(chartdata[currentIndex - 1].date ?? "0");
      setselectedbardata(chartdata[currentIndex - 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBar]);

  const handleNextClick = useCallback(() => {
    const currentIndex = chartdata.findIndex((bar) => bar.date === selectedBar);
    if (currentIndex < chartdata.length - 1) {
      setselectedbar(
        chartdata[currentIndex + 1].date ?? (chartdata.length - 1).toString()
      );
      setselectedbardata(chartdata[currentIndex + 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBar]);

  return (
    <div className="relative bg-white">
      <div className="absolute -left-1 -top-6 h-full z-10 w-[3rem] ml-[-14px] mr-[5px] bg-transparent">
        <BarChart
          data={chartdata}
          index="date"
          categories={["usage"]}
          showXAxis={false}
          showLegend={false}
          layout="horizontal"
          colors={["blue", "blue", "blue", "blue"]}
          customWrapperStyle={{
            borderRadius: "0.5rem 0.5rem 0 0",
          }}
          showTooltip={false}
          tickGap={0}
          startEndOnly={false}
          showGridLines={false}
        />
      </div>
      <div
        ref={containerRef}
        className="overflow-x-auto h-full pt-12 pl-10 !bg-white"
        style={{ scrollbarWidth: "thin" }}
      >
        <div style={{ width: `300px`, minWidth: "100%" }}>
          <BarChart
            data={chartdata}
            index="date"
            categories={["usage"]}
            barWidth={barWidth}
            showLegend={false}
            showTooltip={false}
            barColor={"#c71c5d"}
            handleBarClick={handleBarClick}
            layout="horizontal"
            colors={["blue"]}
            customWrapperStyle={{
              borderRadius: "0.5rem 0.5rem 0 0",
              marginRight: "-4px",
            }}
            tickGap={0}
            startEndOnly={false}
            showYAxis={false}
            selectedBar={selectedBar}
          />
          <div
            id="switch_hours"
            className="montserrat-custom w-100"
            style={{ marginLeft: "-16px" }}
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-xs">Ora della giornata</div>
                <h2 className="text-md text-black font-semibold">
                  Dalle ore 12:00 alle ore 13:00
                </h2>
              </div>

              <div
                id="switch_arrows"
                className="flex flex-row gap-2 *:mr-2"
                style={{ marginLeft: "-16px" }}
              >
                <div
                  className={`flex items-center ${
                    selectedBar === String(chartdata.length) ? "gap-4" : "gap-6"
                  } mt-1`}
                >
                  <Button
                    variant="light"
                    size="xs"
                    icon={ChevronLeftIcon}
                    onClick={handlePrevClick}
                    className="text-pink-700"
                  />

                  <Button
                    variant="light"
                    size="xs"
                    icon={ChevronRightIcon}
                    onClick={handleNextClick}
                    className={`text-pink-700 ${
                      chartdata.findIndex((bar) => bar.date === selectedBar) ===
                      chartdata.length - 1
                        ? "opacity-50 cursor-not-allowed bg-gray-400 text-gray-800 rounded-md p-2"
                        : ""
                    }`}
                    disabled={
                      chartdata.findIndex((bar) => bar.date === selectedBar) ===
                      chartdata.length - 1
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChartHero;
