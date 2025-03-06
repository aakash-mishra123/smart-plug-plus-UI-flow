"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Transitions from "@/components/animations/Transition";
import InfoCard from "@/components/shared/InfoCard";
import ConsumptionCard from "@/components/progressBar/ConsumptionCard";
import { BarChartHero } from "@/components/navbar/BarChartHero";

import { barChartData } from "@/utils/constants";

const Temp = () => {
    const router = useRouter();
    const [show, setShow] = useState<Boolean>(true);

    const dummyData = barChartData[1].data;

    return (
        <Transitions
            type="slide"
            direction="left"
            in={show}
            timeout={{ appear: 0, enter: 100, exit: 100 }}
        >
            <div className="bg-[#edf1f5]">
                <InfoCard />
                <ConsumptionCard
                    powerUsage={dummyData.powerUsage}
                    maxPower={dummyData.maxPower}
                    limitPower={dummyData.limitPower}
                />
                <BarChartHero />
            </div>
        </Transitions>
    );
};

export default Temp;
