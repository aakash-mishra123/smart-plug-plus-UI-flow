"use client";
 
import React, { useState } from "react";
import { Button, Flex, Text } from "@tremor/react";
import { format, addMonths, subMonths } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface MonthSwitcherProps {
    currentDate: Date;
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}
 
export default function MonthSwitcher({
    currentDate,
    setCurrentDate,
}: MonthSwitcherProps) {

 
    const handlePrevMonth = () => {
        setCurrentDate((prev : any) => subMonths(prev, 1));
    };
 
    const handleNextMonth = () => {
        setCurrentDate((prev) => addMonths(prev, 1));
    };
 
    return (
        <div className="flex items-center gap-1">
 
            <Button variant="light" color="gray" onClick={handlePrevMonth}>
                <ChevronLeftIcon className="h-8 w-8 text-pink-500" />
            </Button>
            <Text className="text-lg font-medium">
                {format(currentDate, "MMMM yyyy")}
            </Text>
            <Button variant="light" color="gray" onClick={handleNextMonth}>
                <ChevronRightIcon className="h-8 w-8 text-pink-500" />
            </Button>
        </div>
    );
}
 