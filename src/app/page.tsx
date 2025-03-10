import PowerUsageCard from "../components/cards/PowerUsageCard";
import UserInfoCard from "@/components/cards/UserInfoCard";
import { BarChartHero } from "@/components/navbar/BarChartHero";

export default function Home() {

  return (
    <div className="grid justify-items-center min-h-screen mb-20 w-100 font-[family-name:var(--font-geist-sans)] bg-[#edf1f5]">
      <UserInfoCard />
      <PowerUsageCard />
      <BarChartHero />
    </div>
  );
}
