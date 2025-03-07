import ConsumptionCard from "@/components/progressBar/ConsumptionCard";
import PowerUsageCard from "../components/powerUsageCard/powerUsageCard";
import UserInfoCard from "@/components/powerUsageCard/userInfoCard";
export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen mb-20 w-100 font-[family-name:var(--font-geist-sans)]  bg-[#edf1f5]">
      <UserInfoCard />
      <PowerUsageCard />
      {/* <BarChartHero /> */}
      <ConsumptionCard 
        powerUsage={98}
        maxPower={3}
        limitPower={80}
      />
    </div>
  );
}
