export default function ConsumptionStats({ data} : any) {
    
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
        <div className="border-b pb-4">
          <p className="text-gray-500 text-sm">Average Daily Consumption</p>
          <div className="flex flex-row justify-between align-items-center">

          <p className="text-gray-400 font-bold text-md">{data?.dailyConsumption.date}</p>
          <p className="text-black font-semibold text-lg">{data?.dailyConsumption.averageConsumption}kWh</p>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-gray-500 text-sm">Peak Consumption</p>
          <div className="flex flex-row justify-between align-items-center">

          <p className="text-gray-400 font-bold text-md">Time Slot: {data?.dailyConsumption.peakTime}</p>
          <p className="text-black font-semibold text-lg">{data?.dailyConsumption.peakConsumption} kWh</p>
          </div>
        </div>
      </div>
    );
  }
  