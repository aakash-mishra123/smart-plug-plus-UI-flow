"use client";

import { Card, Metric, Text, Badge } from "@tremor/react";
import { CheckCircle, Plug, ArrowRight, AlertCircle, Maximize2, Minimize2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { PowerUsageProps } from "@/utils/types";
import Image from "next/image";
import VoltageIcon from "../../../public/assets/voltage_icon.png";

export default function PowerUsageCard(
  {
    powerUsage, maxPower, limitPower
  }
 : PowerUsageProps ) {
  const isOverLimit = powerUsage > limitPower;
  // const [openScreen, setOpenScreen] = useState(false);
  const router = useRouter();

  return (
    <div className={`flex flex-col gap-4 p-2 mx-0 w-[100vw] montserrat-custom bg-white`}>
      {/* Smart Plug Card */}
      <Card 
        className="bg-[#d4135a] mt-2 p-0 text-white rounded-md mx-4 w-100"
        onClick={() =>{ router.push('/details');}}
        >
        <div className="flex justify-between items-center">
          <div className="ml-4 ">
            <Text className="text-lg font-semibold">La mia presa plus</Text>
            <Text className="text-xs opacity-80">Monitora i tuoi consumi nel dettaglio, per risparmiare</Text>

          <div className="mt-3 flex items-center gap-2">
          <Text className="text-sm font-medium">Connessa</Text>
          <ArrowRight className="text-white text-xl font-bold" size={20} />
        </div>
          </div>
          <Image
            src={VoltageIcon}
            alt="voltage_icon"
            width={100}
            height={140}
            className="mb-4"
            />
        </div>
        
      </Card>

      {/* Power Usage Card */}
     
    </div>
  );
}
