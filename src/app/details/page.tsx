"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { BarChartHero } from "@/components/navbar/BarChartHero"
import { DailyUsageSerializer } from "@/api/serializers/dailyUsageSerializer";

const Transitions = dynamic(() => import("@/components/animations/Transition"));
const InfoCard = dynamic(() => import("@/components/shared/InfoCard"));
const BarListHero = dynamic(() => import("@/components/BarList/BarListHero"));
const ConsumptionCard = dynamic(() => import("@/components/progressBar/ConsumptionCard"))

const Temp = () => {

    const dividedData = DailyUsageSerializer();
    const [selectedData, setSelectedData] = useState(null);

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

    const handleBarClick = (data: any) => setSelectedData(data);

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
                <BarChartHero
                    chartData={dividedData}
                />
                <BarListHero
                    data={barlistData1}
                />
            </div>

        </Transitions>
    );
};

export default Temp;
