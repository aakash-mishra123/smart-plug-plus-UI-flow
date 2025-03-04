"use client"

import { BarChart } from "@/components/shared/BarChart"
import React, { useRef, useLayoutEffect, useState } from "react";

const getSubIntervalLabel = (dateStr: string, dataKey: string) => {
    const startHourStr = dateStr.split("h")[0]; // "09"
    const startHour = parseInt(startHourStr, 10);
    let offset = 0;
    switch (dataKey) {
        case "interval_one":
            offset = 0;
            break;
        case "interval_two":
            offset = 15;
            break;
        case "interval_three":
            offset = 30;
            break;
        case "interval_four":
            offset = 45;
            break;
        default:
            offset = 0;
    }
    const pad = (num: Number) => num.toString().padStart(2, "0");
    const startTime = `${pad(startHour)}:${pad(offset)}`;
    const endTime = `${pad(startHour)}:${pad(offset + 15)}`;
    return `${startTime}-${endTime}`;
};

// Custom tooltip
const CustomTooltip = ({ active, payload, label }: { active: any, payload: any, label: any }) => {
    if (!active || !payload || payload.length === 0) return null;
    return (
        <div className="p-2 bg-white border rounded shadow">
            <p className="font-bold mb-1">{label}</p>
            {payload.map((item: any, index: number) => {
                const customLabel = getSubIntervalLabel(label, item.dataKey);
                return (
                    <div key={index} className="flex justify-between text-sm gap-4">
                        <span>{customLabel}</span>
                        <span>{item.value}</span>
                    </div>
                );
            })}
        </div>
    );
};

const chartdata = [
    {
        date: "09h-10h",
        "interval_one": 2,
        "interval_two": 4,
        "interval_three": 1,
        "interval_four": 3,
    },
    {
        date: "10h-11h",
        "interval_one": 1,
        "interval_two": 2,
        "interval_three": 1,
        "interval_four": 3,
    },
    {
        date: "11h-12h",
        "interval_one": 4,
        "interval_two": 1,
        "interval_three": 2,
        "interval_four": 3,
    },
    {
        date: "12h-13h",
        "interval_one": 2,
        "interval_two": 4,
        "interval_three": 1,
        "interval_four": 3,
    },
    {
        date: "13h-14h",
        "interval_one": 2,
        "interval_two": 4,
        "interval_three": 1,
        "interval_four": 3,
    },
    {
        date: "14h-15h",
        "interval_one": 2,
        "interval_two": 4,
        "interval_three": 1,
        "interval_four": 3,
    },
]

export const ComparisonBarChart = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [yAxisWidth, setYAxisWidth] = useState(80);
    const [chartWidth, setChartWidth] = useState(0);

    // Calculate fixed dimensions
    const barWidth = 12;
    const barGap = 10; // Gap between different date groups
    const barCategoryGap = 8; // Gap between same category bars

    // Calculate total chart width based on data length
    const calculateChartWidth = () => {
        const dateGroups = chartdata.length;
        const categoriesPerGroup = 4; // interval_one to interval_four
        return dateGroups * (categoriesPerGroup * (barWidth + barCategoryGap)) +
            (dateGroups - 1) * barGap;
    };

    useLayoutEffect(() => {
        if (containerRef.current) {
            // Reserve space for Y-axis labels
            const yAxisPadding = 30;
            setChartWidth(calculateChartWidth());
            setYAxisWidth(containerRef.current.offsetHeight > 300 ? 80 : 60);
        }
    }, []);


    return (
        <div className="relative  mt-4 mb-4">
            {/* Fixed Y-axis */}
            <div className="absolute left-0 top-0 h-full z-10 w-[4rem] bg-white">
                <BarChart
                    data={chartdata}
                    index="date"
                    categories={["interval_one", "interval_two", "interval_three", "interval_four"]}
                    showXAxis={false}
                    showLegend={false}
                    layout="horizontal"
                    colors={["blue", "blue", "blue", "blue"]}
                    customWrapperStyle={{
                        borderRadius: "0.5rem 0.5rem 0 0",
                        marginRight: "-4px",
                    }}
                    barCategoryGap={barCategoryGap}
                    tickGap={barGap}
                    startEndOnly={false}
                    showGridLines={false}
                />
            </div>

            {/* Scrollable chart area */}
            <div
                ref={containerRef}
                className="overflow-x-auto h-full ml-14"
                style={{ scrollbarWidth: 'thin' }}
            >
                <div style={{ width: `${chartWidth}px`, minWidth: '100%' }}>
                    <BarChart
                        data={chartdata}
                        index="date"
                        categories={["interval_one", "interval_two", "interval_three", "interval_four"]}
                        barWidth={barWidth}
                        showLegend={false}
                        layout="horizontal"
                        colors={["blue", "blue", "blue", "blue"]}
                        customWrapperStyle={{
                            borderRadius: "0.5rem 0.5rem 0 0",
                            marginRight: "-4px",
                        }}
                        customTooltip={CustomTooltip}
                        barCategoryGap={barCategoryGap}
                        tickGap={barGap}
                        startEndOnly={false}
                        showYAxis={false}
                        showGridLines={false}
                        enableAnimation={true}
                        animationDuration={1000}
                    />
                </div>
            </div>
        </div>
    )
}