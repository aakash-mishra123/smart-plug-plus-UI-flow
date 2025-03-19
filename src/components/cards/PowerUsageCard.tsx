"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, Text } from "@tremor/react/dist";
import { ArrowRight } from "lucide-react";
import VoltageIcon from "../../../public/assets/voltage_icon.png";

export default function PowerUsageCard() {
  const router = useRouter();

  return (
    <div className={`flex flex-col gap-4 p-2 mx-0 w-[100vw] montserrat-custom bg-white`}>
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
    </div>
  );
}
