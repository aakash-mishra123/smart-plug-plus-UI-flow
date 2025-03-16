"use client"
import React, { useRef, useState, useEffect } from "react";
import { BarChart } from "@/components/shared/BarChart"
import { quarterUsageData } from "@/api/types/dailyUsageTypes";

interface BarchartProps  {
    chartdata: quarterUsageData[]
}
export const BarChartHero = ({
    chartdata
}: BarchartProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [barWidth, setBarWidth] = useState(7); // Default bar width

    const handleBarClick = () => {
        console.log('edit barlist');
    }
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

    return (
        <div className="relative">
            {/* Fixed Y-axis */}
            <div className="absolute -left-1 -top-6 h-full mt-[12px] z-10 w-[3rem] ml-[-14px] mr-[5px]">
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
                    allowClickableTransitions={false}
                />
            </div>
            <div
                ref={containerRef}
                className="overflow-x-auto h-full ml-8 mt-4"
                style={{ scrollbarWidth: 'thin' }}
            >
                <div style={{ width: `300px`, minWidth: '100%' }}>
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
                        colors={["blue", "blue", "blue", "blue"]}
                        customWrapperStyle={{
                            borderRadius: "0.5rem 0.5rem 0 0",
                            marginRight: "-4px",
                        }}
                        tickGap={0}
                        startEndOnly={false}
                        showYAxis={false}
                        allowClickableTransitions={false}
                    />
                </div>
            </div>
        </div>
    )
}
