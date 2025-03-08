"use client"
import { useState } from "react";
import { BarChart } from "../shared/BarChart";
// import {barChartData} from "../../utils/constants";
import { DrawerModal } from "../drawer/DrawerModal";
import { PowerUsageProps } from "@/utils/types";

const chartdata = [
  {
    timeInterval: "Amphibians",
    "powerConsumption": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "Ferns",
    "Number of threatened species": 281,
  },
  {
    name: "Arachnids",
    "Number of threatened species": 251,
  },
  {
    name: "Corals",
    "Number of threatened species": 232,
  },
  {
    name: "Algae",
    "Number of threatened species": 98,
  },
]

const BarChartLayoutExample = () => {
  const [modalData, setModalData] = useState<PowerUsageProps>();
  const [isOpen, setIsOpen] = useState(false);

  const handleBarClick = (data: PowerUsageProps) => {
    setModalData(data);
    setIsOpen(true);
  }

  return (
    <>
      <BarChart
        className="h-72 pt-4 pb-4 bg-white"
        data={chartdata}
        handleBarClick={handleBarClick}
        index="name"
        categories={["Number of threatened species"]}
        yAxisWidth={80}
        barWidth={8}
        showLegend={false}
        layout="horizontal"
        customWrapperStyle={{ left: "-32px" }}
      />
      {/* Drawer modal open */}
      <DrawerModal isOpen={isOpen} setIsOpen={setIsOpen} data={modalData} />
      {/* 
      <ConsumptionStats 
        data={barChartData}
      /> */}
    </>
  )
}

export default BarChartLayoutExample;
