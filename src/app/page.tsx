import BarChartHero from "../components/navbar/Barchart";
import PowerUsageCard from "../components/powerUsageCard/powerUsageCard";
import UserInfoCard from "@/components/powerUsageCard/userInfoCard";

const dummyData = {
  powerUsage: 4,
  maxPower: 3,
  limitPower: 2.5,
};

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen mb-20 w-100 font-[family-name:var(--font-geist-sans)]  bg-[#edf1f5]">
      <UserInfoCard />
      <PowerUsageCard
        powerUsage={dummyData.powerUsage}
        maxPower={dummyData.maxPower}
        limitPower={dummyData.limitPower}
      />
      <BarChartHero />
    </div>
  );
}
