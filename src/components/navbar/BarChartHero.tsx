"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BarChart } from "@/components/shared/BarChart";
import { quarterUsageData } from "@/api/types/dailyUsageTypes";
interface BarchartProps {
  chartdata: quarterUsageData[];
  selectedBar: string;
  setSelectedBar: (data: string) => void;
  setSelectedBarData: (data: quarterUsageData) => void;
}
const BarChartHero = ({
  chartdata,
  selectedBar,
  setSelectedBar,
  setSelectedBarData,
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

  const handleBarClick = useCallback((date: string) => {
    setSelectedBar(date);
    const newSelectedBar = chartdata.findIndex((bar) => bar.date === date);
    if (newSelectedBar) {
      setSelectedBarData(chartdata[newSelectedBar]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrevClick = useCallback(() => {
    const currentIndex = chartdata.findIndex((bar) => bar.date === selectedBar);
    if (currentIndex > 0) {
      setSelectedBar(chartdata[currentIndex - 1].date ?? "0");
      setSelectedBarData(chartdata[currentIndex - 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBar]);

  const handleNextClick = useCallback(() => {
    const currentIndex = chartdata.findIndex((bar) => bar.date === selectedBar);
    if (currentIndex < chartdata.length - 1) {
      setSelectedBar(
        chartdata[currentIndex + 1].date ?? (chartdata.length - 1).toString()
      );
      setSelectedBarData(chartdata[currentIndex + 1]);
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
        className="overflow-x-auto h-full ml-4 mt-16"
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
          <div id="switch_hours" className="montserrat-custom">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-1">
                <div className="text-gray-600 text-xs">Ora della giornata</div>
                <h2 className="text-md text-black font-semibold">
                  Dalle ore 12:00 alle ore 13:00
                </h2>
              </div>

              <div id="switch_arrows" className="flex flex-row gap-2 *:mr-2">
                <button
                  className={`p-2 rounded-full ${
                    selectedBar === chartdata[0]?.date
                      ? "bg-gray-300"
                      : "bg-transparent"
                  }`}
                  onClick={handlePrevClick}
                  disabled={selectedBar === chartdata[0]?.date}
                >
                  <FaChevronLeft
                    className={`text-pink-800 ${
                      selectedBar === chartdata[0]?.date ? "opacity-50" : ""
                    }`}
                  />
                </button>

                <button
                  className={`p-4 rounded-full ${
                    selectedBar === chartdata[chartdata.length - 1]?.date
                      ? "bg-gray-300"
                      : "bg-[#c2aab3] text-pink-800"
                  }`}
                  onClick={handleNextClick}
                  disabled={
                    selectedBar === chartdata[chartdata.length - 1]?.date
                  }
                >
                  <FaChevronRight
                    className={`text-white ${
                      selectedBar === chartdata[chartdata.length - 1]?.date
                        ? "opacity-50"
                        : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChartHero;
