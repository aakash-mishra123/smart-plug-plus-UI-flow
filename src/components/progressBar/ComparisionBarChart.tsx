"use client"
import React, { useRef, useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { BarChart } from "@/components/shared/BarChart";
import { dummyBarChartData } from "@/utils/constants";
import { Button } from "@tremor/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import MonthSwitcher from "../calendar/MonthSwitcher";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { Badge } from "lucide-react";
import { motion } from "framer-motion";

 
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
        // "interval_two": 4,
        // "interval_three": 1,
        // "interval_four": 3,
    },
    {
        date: "10h-11h",
        "interval_one": 1,
        // "interval_two": 2,
        // "interval_three": 1,
        // "interval_four": 3,
    },
    {
        date: "11h-12h",
        "interval_one": 4,
        // "interval_two": 1,
        // "interval_three": 2,
        // "interval_four": 3,
    },
    {
        date: "12h-13h",
        "interval_one": 2,
        // "interval_two": 4,
        // "interval_three": 1,
        // "interval_four": 3,
    },
    {
        date: "13h-14h",
        "interval_one": 2,
        // "interval_two": 4,
        // "interval_three": 1,
        // "interval_four": 3,
    },
    {
        date: "14h-15h",
        "interval_one": 2,
        // "interval_two": 4,
        // "interval_three": 1,
        // "interval_four": 3,
    },
]
 
const ComparisonBarChart = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [yAxisWidth, setYAxisWidth] = useState(80);
    const [chartWidth, setChartWidth] = useState(0);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const activeMonth: any = dummyBarChartData[0];
    const currentDayData: any = activeMonth.data[0];
    const [showDatePicker, setShowDatePicker] = useState<Boolean>(false);

 
    // Calculate fixed dimensions
    const barWidth = 12;
    const barGap = 4; // Gap between different date groups
    const barCategoryGap = 2; // Gap between same category bars
 
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

                <div className="flex flex-col gap-1 ml-8">
                    <MonthSwitcher
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                    />
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row flex-reverse z-50">

                            <Badge onClick={() => setShowDatePicker((prev) => !prev)} />

                            {showDatePicker &&
                                <motion.div
                                    key={dayjs(currentDate).format("YYYY-MM-DD")} // Re-trigger animation when date changes
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}

                                >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar
                                            value={dayjs(currentDate)}
                                            onChange={(newValue) => setCurrentDate(newValue)}
                                        />
                                    </LocalizationProvider >
                                </motion.div>
                            }
                        </div>
                        <div className="flex flex-row gap-1 items-end monteserrat-custom">

                            <p className="mt-4 text-2xl font-medium text-black">{activeMonth.totalConsumption}</p>
                            <p className="text-xl font-medium">kWh</p>
                        </div>
                        </div>
                    </div>

            {/* Fixed Y-axis */}
            <div className="absolute left-0 top-0 h-full z-10 w-[4rem] bg-white">
                <BarChart
                    data={currentDayData.powerIntervals}
                    index="date"
                    categories={["interval_one"]}
                    showXAxis={false}
                    showLegend={false}
                    layout="horizontal"
                    colors={["blue", "blue", "blue", "blue"]}
                    customWrapperStyle={{
                        borderRadius: "0.5rem 0.5rem 0 0",
                        marginRight: "-4px",
                        left: "10px",
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
                style={{ scrollbarWidth: 'thin'}}
            >
                <div style={{ width: `${chartWidth}px`, minWidth: '100%' }}>
                    <BarChart
                        data={chartdata}
                        index="date"
                        categories={["interval_one"]}
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
                    />
                </div>
            </div>
        </div>
                    
    )
};

export default ComparisonBarChart;