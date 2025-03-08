import { BarList } from "./BarList";
// import { useToast } from "@/lib/useToast"

const data = [
  { name: "09:00-09:15", value: 3.7 },
  { name: "09:15-09:30", value: 4.1 },
  { name: "09:15-09:30 (Peak)", value: 4.2 },
  { name: "09:45-10:00", value: 3.8 },
];

const total = data.reduce((sum, item) => sum + item.value, 0);
const average = total / data.length;

const BarListHero = () => {
  //const { toast } = useToast()
  return (
    <div className="flex flex-col gap-0 bg-white">
      <div className="flex flex-row rounded-md items-center justify-between monteserrat-custom mx-2 my-2 px-2 py-2 mt-2 bg-[#edf1f5]" >

        <p className="text-lg ml-2 font-medium text-black">Average Data </p>
        <p className="text-3xl ml-2 font-semibold text-black">{average} kWh</p>
      </div>
      <BarList
        data={data}
        averagedata={average}
        className="bg-white px-4 py-2"
      />
    </div>
  )
}

export default BarListHero;