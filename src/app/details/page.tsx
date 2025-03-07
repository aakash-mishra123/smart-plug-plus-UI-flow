"use client";
import Transitions from "@/components/animations/Transition";
import InfoCard from "@/components/shared/InfoCard";
import { BarChartHero } from "@/components/navbar/BarChartHero";
import BarListHero from "@/components/BarList/BarListHero";

const Temp = () => {
    return (
        <Transitions
            type="slide"
            direction="left"
            in={true}
            timeout={{ appear: 0, enter: 100, exit: 100 }}
        >
            <div className="bg-[#edf1f5]">
                <InfoCard />

                <BarChartHero />
                <BarListHero />
            </div>
        </Transitions>
    );
};

export default Temp;
