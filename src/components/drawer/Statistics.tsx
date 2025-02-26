export default function ConsumptionStats({ data} : any) {
    
    return (
      <div className="bg-white w-full max-w-md montserrat-custom font-bold mb-20 ">
        <div className="border-b p-4 border-1 border-gray-400 pb-4 w-full flex flex-row justify-between items-center">
          <div className="flex flex-col">

          <p className="text-black font-bold text-md">Average Daily Consumption</p>
          <p className="text-gray-500 font-bold text-xs">{data?.dailyConsumption.date}</p>
          </div>
          <p className="text-black font-bold text-md">{data?.dailyConsumption.averageConsumption} kWh</p>
        </div>
        <div className="p-4 pb-4 w-full flex flex-row justify-between items-center">
          <div className="flex flex-col">
          <p className="text-black font-bold text-md">Peak Consumption</p>
          <p className="text-gray-500 font-bold  text-xs">Time Slot: {data?.dailyConsumption.peakTime}</p>
          </div>
          <p className="text-black font-bold text-md">{data?.dailyConsumption.peakConsumption} kWh</p>
        </div>
      </div>
    );
  }
  