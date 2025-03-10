import { BarList } from "./BarList";

const data = [
  { name: "09:00-09:15", value: 3.7 },
  { name: "09:15-09:30", value: 4.1 },
  { name: "09:45-10:30", value: 4.2 },
  { name: "09:45-10:00", value: 3.8 },
];

const total = data.reduce((sum, item) => sum + item.value, 0);
const average = total / data.length;
const maxValueObject = data.reduce((max, obj) => (obj.value > max.value ? obj : max), data[0]);
console.log('maxValueObject', maxValueObject);

const BarListHero = () => {
  
  return (
    <div className="flex flex-col gap-0 bg-white mb-4">
      <div className="flex flex-row rounded-md items-center justify-between montserrat-custom mx-3 my-2 px-2 py-2 mt-2 bg-[#edf1f5]" >

        <p className="text-md ml-2 font-bold text-black">{`Media dell'ora`}</p>
        <div className="flex flex-row gap-2 items-end">

          <p className="text-2xl ml-2 font-bold text-black">{average}</p>
          <p className="text-lg font-medium text-black">kWh</p>
        </div>
      </div>
      <BarList
        data={data}
        averagedata={average}
        peakBar={maxValueObject}
        rowHeight={"h-12"}
        className="bg-white px-4 py-2 monteserrat-custom mb-4 rounded-md"
      />
    </div>
  )
}

export default BarListHero;
