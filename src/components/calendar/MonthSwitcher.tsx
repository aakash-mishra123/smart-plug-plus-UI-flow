"use client";
 
import React from "react";
import { Button, Text } from "@tremor/react";
import { addMonths, subMonths, startOfMonth } from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import dayjs from 'dayjs';

interface MonthSwitcherProps {
    currentDate: Date;
    setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
    closeCalendar?: () => void;
}
 
export default function MonthSwitcher({
    currentDate,
    setCurrentDate,
}: MonthSwitcherProps) {
 
    const handlePrevMonth = () => {
        //additional logic to edit bar graph data,
        setCurrentDate((prev : Date) => startOfMonth(subMonths(prev, 1)));
    };
 
    const handleNextMonth = () => {
        setCurrentDate((prev) => startOfMonth(addMonths(prev, 1)));
        console.log('next', currentDate);
    };

    const formattedDate = dayjs(currentDate).format('MMMM YYYY');
 
    return (
        <div className="flex items-center gap-1">
            <Button 
             variant="light" 
             color="gray" 
             onClick={handlePrevMonth} 
             disabled={dayjs(currentDate).month() === 0} 
             className={dayjs(currentDate).month() === 0 ? "opacity-50 cursor-not-allowed text-gray-500" : "text-pink-500"}
             >
                <ChevronLeftIcon className="h-10 w-6" />
            </Button>
            <Text className="text-lg font-medium">
                {formattedDate}
            </Text>
            <Button 
               variant="light" 
               color="gray" 
               onClick={handleNextMonth} 
               disabled={dayjs(currentDate).month() === 11} 
               className={dayjs(currentDate).month() === 11 ? "opacity-50 cursor-not-allowed text-gray-500" : "text-pink-500"}
            >
                <ChevronRightIcon className="h-10 w-6" />
            </Button>
        </div>
    );
}
 