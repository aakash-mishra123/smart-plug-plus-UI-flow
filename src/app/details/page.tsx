"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Transitions from "@/components/animations/Transition";
import InfoCard from "@/components/shared/InfoCard";
import ConsumptionCard from "@/components/progressBar/ConsumptionCard";
import { BarChartHero } from "@/components/navbar/BarChartHero";

import { barChartData } from "@/utils/constants";
import BarListHero from "@/components/BarList/BarListHero";

const Temp = () => {
    const router = useRouter();
    const [show, setShow] = useState<boolean | undefined>(true);

    const dummyData = barChartData[0].data;

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
