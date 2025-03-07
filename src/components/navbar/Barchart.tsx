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

const  BarChartLayoutExample = () => {
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
      customWrapperStyle={{ left: "-32px"}}
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

//import { BarChart } from "@tremor/react"

// const chartdata = [
//   {
//     date: "Jan 23",
//     SolarPanels: 2890,
//     Inverters: 2338,
//   },
//   {
//     date: "Feb 23",
//     SolarPanels: 2756,
//     Inverters: 2103,
//   },
//   {
//     date: "Mar 23",
//     SolarPanels: 3322,
//     Inverters: 2194,
//   },
//   {
//     date: "Apr 23",
//     SolarPanels: 3470,
//     Inverters: 2108,
//   },
//   {
//     date: "May 23",
//     SolarPanels: 3475,
//     Inverters: 1812,
//   },
//   {
//     date: "Jun 23",
//     SolarPanels: 3129,
//     Inverters: 1726,
//   },
//   {
//     date: "Jul 23",
//     SolarPanels: 3490,
//     Inverters: 1982,
//   },
//   {
//     date: "Aug 23",
//     SolarPanels: 2903,
//     Inverters: 2012,
//   },
//   {
//     date: "Sep 23",
//     SolarPanels: 2643,
//     Inverters: 2342,
//   },
//   {
//     date: "Oct 23",
//     SolarPanels: 2837,
//     Inverters: 2473,
//   },
//   {
//     date: "Nov 23",
//     SolarPanels: 2954,
//     Inverters: 3848,
//   },
//   {
//     date: "Dec 23",
//     SolarPanels: 3239,
//     Inverters: 3736,
//   },
//   {
//     date: "Jan 23",
//     SolarPanels: 2890,
//     Inverters: 2338,
//   },
//   {
//     date: "Feb 23",
//     SolarPanels: 2756,
//     Inverters: 2103,
//   },
//   {
//     date: "Mar 23",
//     SolarPanels: 3322,
//     Inverters: 2194,
//   },
//   {
//     date: "Apr 23",
//     SolarPanels: 3470,
//     Inverters: 2108,
//   },
//   {
//     date: "May 23",
//     SolarPanels: 3475,
//     Inverters: 1812,
//   },
//   {
//     date: "Jun 23",
//     SolarPanels: 3129,
//     Inverters: 1726,
//   },
//   {
//     date: "Jul 23",
//     SolarPanels: 3490,
//     Inverters: 1982,
//   },
//   {
//     date: "Aug 23",
//     SolarPanels: 2903,
//     Inverters: 2012,
//   },
//   {
//     date: "Sep 23",
//     SolarPanels: 2643,
//     Inverters: 2342,
//   },
//   {
//     date: "Oct 23",
//     SolarPanels: 2837,
//     Inverters: 2473,
//   },
//   {
//     date: "Nov 23",
//     SolarPanels: 2954,
//     Inverters: 3848,
//   },
//   {
//     date: "Dec 23",
//     SolarPanels: 3239,
//     Inverters: 3736,
//   },
// ]

// const BarChartHero = () => (
//   <BarChart
//     className="h-80"
//     data={chartdata}
//     index="date"
//     categories={["SolarPanels", "Inverters"]}
//     valueFormatter={(number: number) =>
//       `$${Intl.NumberFormat("us").format(number).toString()}`
//     }
//     onValueChange={(v) => console.log(v)}
//   />
// );

//export default BarChartHero;
