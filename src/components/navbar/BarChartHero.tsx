"use client"

import { BarChart } from "@/components/shared/BarChart"
import React, { useRef } from "react";
const chartdata = Array.from({ length: 24 }, (_, i) => ({
    date: `${String(i).padStart(2)}`,
    usage: Math.floor(Math.random() * 10 + 1),
}));

export const BarChartHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const handleBarClick = () => {
        console.log('edit barlist');
    }
    const barWidth = 7;         // Calculate fixed dimensions
    // Calculate total chart width based on data length
    return (
        <div className="relative">
            {/* Fixed Y-axis */}
            <div className="absolute left-0 -top-2 h-full z-10 w-[3rem] ml-[-10px]">
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

            {/* Scrollable chart area */}
            <div
                ref={containerRef}
                className="overflow-x-auto h-full ml-8 mt-4"
                style={{ scrollbarWidth: 'thin' }}
            >
                <div style={{ width: `300px`, minWidth: '100%', height: '380px' }}>
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
                        allowClickableTransitions={true}
                    />
                </div>
            </div>
        </div>
    )
}
