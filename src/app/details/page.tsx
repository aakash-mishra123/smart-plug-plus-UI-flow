"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Transitions from "@/components/animations/Transition";
import BarChartHero from "../../components/navbar/Barchart"
import InfoCard from "@/components/shared/InfoCard";
import ConsumptionCard from "@/components/progressBar/ConsumptionCard";

const dummyData = {
    powerUsage: 4,
    maxPower: 3,
    limitPower: 2.5,
  };

const Temp = () => {
    const router = useRouter();
    const [show, setShow] = useState(true);

    const handleBack = () => {
        setShow(false); // Start exit transition
        setTimeout(() => {
            router.back(); // Navigate after transition ends
        }, 50); // Ensure this matches the exit timeout
    };

    return (
        <Transitions 
            type="slide" 
            direction="left" 
            in={show} 
            timeout={{ appear: 0, enter: 100, exit: 100 }}
            >
            <div className="bg-[#edf1f5]" onClick={handleBack}>
            
        <InfoCard />
        <ConsumptionCard 
            powerUsage={dummyData.powerUsage}
            maxPower={dummyData.maxPower}
            limitPower={dummyData.limitPower}
        />
        </div>
        </Transitions>
    );
};

export default Temp;
