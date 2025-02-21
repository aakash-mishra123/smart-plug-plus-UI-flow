import Image from "next/image";
import Dashboard from "../components/navbar/Dashboard";
import { BarChart } from "@tremor/react";
import { BarChartHero } from "../components/navbar/Barchart";
import PowerUsageCard from "../components/powerUsageCard/powerUsageCard";
import OverlappingProgressBar from "../components/progressBar/progressBar";

export default function Home() {
  return (
    <div className="grid justify-items-center min-h-screen pb-20 mb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Dashboard /> */}
      <PowerUsageCard />
      <OverlappingProgressBar value={45} buffer={65} />
      {/* <BarChartHero /> */}
    </div>  
  );
}
