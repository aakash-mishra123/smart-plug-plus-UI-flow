"use client";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Transitions from "@/components/animations/Transition";
import InfoCard from "@/components/shared/InfoCard";
import ConsumptionCard from "@/components/progressBar/ConsumptionCard";
import { BarChartHero } from "@/components/navbar/BarChartHero";
import { barChartData } from "@/utils/constants";
import BarListHero from "@/components/BarList/BarListHero";
import fetchDailyUsageData from "@/api/fetchDailyUsageDate";
import queryString from 'query-string';

const Temp = () => {
    const router = useRouter();
    const [show, setShow] = useState(true);

    const dummyData = barChartData[0].data;

    const handleBack = () => {
        setShow(false); // Start exit transition
        setTimeout(() => {
            router.back(); // Navigate after transition ends
        }, 50); // Ensure this matches the exit timeout
    };

    const options = {
        serial: 'c2g-57CFACECC',
        date: dayjs(new Date()).format("DD-MM-YYYY"),
    }

    const query = queryString.stringify(options);
    const slug = `v1/energy/quarter?${query}`;

    console.log('slug', slug);

    
    const { data, error, loading, refetch } = fetchDailyUsageData({slug: slug, options: {}});

    console.log('data from api', data);

    return (
        <Transitions
            type="slide"
            direction="left"
            in={show}
            timeout={{ appear: 0, enter: 100, exit: 100 }}
        >
            <div className="bg-[#edf1f5]">
                <InfoCard />
                {/* <ConsumptionCard
                    powerUsage={dummyData.powerUsage}
                    maxPower={dummyData.maxPower}
                    limitPower={dummyData.limitPower}
                /> */}
                <BarChartHero />
                <BarListHero />
            </div>
        </Transitions>
    );
};

export default Temp;
