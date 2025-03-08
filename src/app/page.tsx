import PowerUsageCard from "../components/powerUsageCard/PowerUsageCard";
import UserInfoCard from "@/components/powerUsageCard/UserInfoCard";
import ComparisonCard from "@/components/progressBar/ConsumptionCard";

export default function Home() {

  return (
    <div className="grid justify-items-center min-h-screen mb-20 w-100 font-[family-name:var(--font-geist-sans)] bg-[#edf1f5]">
      <UserInfoCard />
      <PowerUsageCard />
      {/* <BarChartHero /> */}
      <ComparisonCard
        powerUsage={2.5}
        maxPower={90}
        limitPower={3}
      />
    </div>
  );
}
