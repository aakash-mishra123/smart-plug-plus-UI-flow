"use client";
import React from "react";

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
const CustomTooltip = ({
    active,
    payload,
    label,
}: {
    active: any;
    payload: any;
    label: any;
}) => {
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

const ComparisonBarChart = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const activeMonth: any = dummyBarChartData[0];
    const currentDayData: any = activeMonth.data[0];
    const [showDatePicker, setShowDatePicker] = useState<Boolean>(false);
    return (
        <>
            <div className="p-2 bg-white">
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

                <div className="mt-12">
                    <BarChart
                        className="h-80 pt-4 pb-4 bg-white"
                        data={currentDayData?.powerIntervals}
                        index="date"
                        categories={[
                            "interval_one",
                            "interval_two",
                            "interval_three",
                            "interval_four",
                        ]}
                        yAxisWidth={80}
                        barWidth={12}
                        showLegend={false}
                        layout="horizontal"
                        colors={["blue", "blue"]}
                        customWrapperStyle={{
                            borderRadius: "0.5rem 0.5rem 0 0",
                            marginRight: "-4px",
                            left: "10px",
                        }}
                        customTooltip={CustomTooltip}
                    />
                </div>
            </div>
        </>
    );
};

export default ComparisonBarChart;
