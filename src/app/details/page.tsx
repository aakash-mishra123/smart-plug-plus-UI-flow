"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import dayjs, { Dayjs} from 'dayjs';
import queryString from 'query-string';
import { useState } from "react";
import { BarChartHero } from "@/components/navbar/BarChartHero"
import FormatDailyUsageData from "../../api/quarterlyUsageAPI";
import DateSwitcher from "@/components/dateSwitch/DateSwitcher";

// import useMqttClient from "@/components/hooks/useMqttClient";
const Transitions = dynamic(() => import("@/components/animations/Transition"));
const InfoCard = dynamic(() => import("@/components/shared/InfoCard"));
const BarListHero = dynamic(() => import("@/components/BarList/BarListHero"));
const ConsumptionCard = dynamic(() => import("@/components/progressBar/ConsumptionCard"))

const Temp = () => {
    const barlistData1 = [
        { name: "09:00-09:15", value: 3.7 },
        { name: "09:15-09:30", value: 4.1 },
        { name: "09:45-10:30", value: 4.2 },
        { name: "09:45-10:00", value: 3.8 },
    ];

    const barlistData2 = [
        { name: "09:00-09:15", value: 3.7 },
        { name: "09:15-09:30", value: 4.1 },
        { name: "09:45-10:30", value: 4.2 },
        { name: "09:45-10:00", value: 3.8 },
    ];

    // const handleBarClick = (data: any) => setSelectedData(data);
     
    const [selectedDate, setSelectedDate ] = useState<Dayjs>(dayjs().locale("en"));
    const options = {
            date: dayjs(selectedDate).format('YYYY-MM-DD'),
            serial: process.env.NEXT_PUBLIC_SERIAL_PARAMS,
        };
      
    const { data, refetch } = FormatDailyUsageData({
        slug: queryString.stringify(options),
    });

    useEffect(() => {
        if(refetch) refetch({
            slug: queryString.stringify(options),
        });
    }, [selectedDate])

    return (
        <Transitions
            type="slide"
            direction="left"
            in={true}
            timeout={{ appear: 0, enter: 100, exit: 100 }}
        >
            <div className="bg-[#edf1f5]">
                <InfoCard />
                <ConsumptionCard
                    powerUsage={75}
                    maxPower={90}
                    limitPower={3}
                />
                 <DateSwitcher 
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
                <BarChartHero
                    chartdata={data}
                />
                <BarListHero
                    data={barlistData1}
                />
            </div>

        </Transitions>
    );
};

export default Temp;
