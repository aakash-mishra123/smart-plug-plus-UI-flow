"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import dayjs, { Dayjs} from 'dayjs';
import queryString from 'query-string';
import { useState } from "react";
import { BarChartHero } from "@/components/navbar/BarChartHero"
import { DailyUsageSerializer } from "@/api/serializers/dailyUsageSerializer";
import DateSwitcher from "@/components/dateSwitch/DateSwitcher";
import FormatDailyUsageData from "@/api/quarterlyUsageAPI";

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

     
    const [selectedDate, setSelectedDate ] = useState<Dayjs>(dayjs().locale("en"));
    const options = useMemo(() => ({
        // date: dayjs(selectedDate).format('YYYY-MM-DD'),
        date: '2025-03-12',
        serial: process.env.NEXT_PUBLIC_SERIAL_PARAMS,

        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }), [selectedDate]); // Recompute only when selectedDate changes
      
    const { data , refetch } = FormatDailyUsageData({
        slug: queryString.stringify(options),
    });

    console.log('data from api', data);

    // const { client} = useMqttClient();
    // console.log('client, isConnected', client, client?.connected);

    useEffect(() => {
        if(refetch) refetch({
            slug: queryString.stringify(options),
        });

        return (() => {})
    }, [selectedDate, options, refetch])

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
                    chartData={data}
                />
                <BarListHero
                    data={barlistData1}
                />
            </div>

        </Transitions>
    );
};

export default Temp;
