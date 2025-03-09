"use client";
import Transitions from "@/components/animations/Transition";
import InfoCard from "@/components/shared/InfoCard";
import BarListHero from "@/components/BarList/BarListHero";
import ConsumptionCard from "@/components/progressBar/ConsumptionCard";

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
                <ConsumptionCard
                    powerUsage={75}
                    maxPower={90}
                    limitPower={3}
                />
                <BarListHero />
            </div>

        </Transitions>
    );
};

export default Temp;
