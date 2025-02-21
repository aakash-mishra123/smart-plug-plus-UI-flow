"use client";

import { Card, Metric, Text, Badge, ProgressBar, Callout } from "@tremor/react";
import { useState } from "react";
import { CheckCircle, Plug, AlertCircle, Maximize2, Minimize2 } from "lucide-react";

export default function PowerUsageCard() {
  const [powerUsage, setPowerUsage] = useState(3.1); // Example power usage in kW
  const maxPower = 3;
  const limitPower = 2.5;
  const isOverLimit = powerUsage > limitPower;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex flex-col gap-4 p-4 mx-auto ${isExpanded ? 'max-w-full h-screen fixed inset-0 bg-white p-10 overflow-auto' : 'max-w-md'}`}>
      {/* Smart Plug Card */}
      <Card className="bg-pink-600 text-white p-5">
        <div className="flex justify-between items-center">
          <div>
            <Text className="text-lg font-semibold">La mia presa plus</Text>
            <Text className="text-sm opacity-80">Numero seriale: c2G-XXXXXX</Text>
          </div>
          <Plug size={32} />
        </div>
        <div className="mt-3 flex items-center gap-2">
          <CheckCircle className="text-green-400" size={20} />
          <Text className="text-sm">Connessa</Text>
        </div>
      </Card>

      {/* Power Usage Card */}
      <Card>
        <div className="flex justify-between items-center">
          <Text className="text-lg font-semibold">Consumo istantaneo</Text>
          <div className="flex items-center gap-2">
            <Badge color="green">TEMPO REALE</Badge>
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
        </div>
        <Text className="text-sm opacity-70">Mercoledì 22 gennaio 2025, ore 09:30 - Fascia F1</Text>
        <Metric className={`mt-2 ${isOverLimit ? 'text-red-600' : 'text-green-600'}`}>{powerUsage} di {maxPower} kW</Metric>
        <ProgressBar value={(powerUsage / maxPower) * 100} color={isOverLimit ? "red" : "green"} className="mt-3" />
        {isOverLimit && (
          <Callout title="Hai superato il limite di utilizzo." icon={AlertCircle} color="red" className="mt-4">
            Riduci il consumo di energia elettrica per evitare l’interruzione della fornitura.
          </Callout>
        )}
      </Card>
    </div>
  );
}
