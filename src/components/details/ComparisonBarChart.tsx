"use client"

import { BarChart } from "@/components/shared/BarChart"
import React, { useRef } from "react";

// interface TooltipPayloadItem {
//     dataKey: string;
//     label?: string;
//     value?: number | string;
//     category?: string
//     index?: string
//     color?: AvailableChartColorsKeys
//     type?: string
// }

// interface CustomTooltipProps {
//     payload?: TooltipPayloadItem[];
//     label?: string;
//     active?: boolean | undefined;
// }


// const getSubIntervalLabel = (dateStr: string, dataKey: string) => {
//     const startHourStr = dateStr.split("h")[0]; // "09"
//     const startHour = parseInt(startHourStr, 10);
//     let offset = 0;
//     switch (dataKey) {
//         case "interval_one":
//             offset = 0;
//             break;
//         case "interval_two":
//             offset = 15;
//             break;
//         case "interval_three":
//             offset = 30;
//             break;
//         case "interval_four":
//             offset = 45;
//             break;
//         default:
//             offset = 0;
//     }
//     const pad = (num: number) => num.toString().padStart(2, "0");
//     const startTime = `${pad(startHour)}:${pad(offset)}`;
//     const endTime = `${pad(startHour)}:${pad(offset + 15)}`;
//     return `${startTime}-${endTime}`;
// };

// Custom tooltip
// const CustomTooltip = ({ payload, label }: CustomTooltipProps) => {
//     if (!payload || payload.length === 0) return null;
//     return (
//         <div className="p-2 bg-white border rounded shadow">
//             <p className="font-bold mb-1">{label}</p>
//             {payload.map((item, index) => {
//                 const customLabel = getSubIntervalLabel(String(label), String(item.dataKey));
//                 return (
//                     <div key={index} className="flex justify-between text-sm gap-4">
//                         <span>{customLabel}</span>
//                         <span>{item.value}</span>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

const chartdata = Array.from({ length: 24 }, (_, i) => ({
    date: `${String(i).padStart(2)}`,
    usage: Math.floor(Math.random() * 10 + 1),
}));

export const ComparisonBarChart = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // Calculate fixed dimensions
    const barWidth = 7;

    return (
        <div className="relative  mt-4 mb-4">
            {/* Fixed Y-axis */}
            <div className="absolute left-0 top-0 h-full z-10 w-[3rem] bg-transparent ml-[-10px]">
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
                    // customTooltip={React.ComponentType<CustomTooltipProps>(CustomTooltip)}
                    tickGap={0}
                    startEndOnly={false}
                    showGridLines={false}
                />
            </div>

            {/* Scrollable chart area */}
            <div
                ref={containerRef}
                className="overflow-x-auto h-full ml-10"
                style={{ scrollbarWidth: 'thin' }}
            >
                <div style={{ width: `300px`, minWidth: '100%' }}>
                    <BarChart
                        data={chartdata}
                        index="date"
                        categories={["usage"]}
                        barWidth={barWidth}
                        showLegend={false}
                        layout="horizontal"
                        colors={["blue", "blue", "blue", "blue"]}
                        customWrapperStyle={{
                            borderRadius: "0.5rem 0.5rem 0 0",
                            marginRight: "-4px",
                        }}
                        tickGap={0}
                        startEndOnly={false}
                        showYAxis={false}
                        showGridLines={false}
                    />
                </div>
            </div>
        </div>
    )
}
