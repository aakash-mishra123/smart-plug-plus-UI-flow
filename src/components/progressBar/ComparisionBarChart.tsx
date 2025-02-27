"use client"
 
import { BarChart } from "@/components/shared/BarChart"
import React from "react";
 
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
 
export const ComparisonBarChart = () => (
    <>
        <BarChart
            className="h-72 mt-4 mb-4 "
            data={chartdata}
            index="date"
            categories={["interval_one", "interval_two", "interval_three", "interval_four"]}
            yAxisWidth={80}
            barWidth={12}
            showLegend={false}
            layout="horizontal"
            colors={["blue", "blue"]}
            customWrapperStyle={{
                borderRadius: "0.5rem 0.5rem 0 0",
                marginRight: "-4px",
                left: "-32px"
            }}
            customTooltip={CustomTooltip}
        />
 
    </>
)