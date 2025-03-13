import { BarList } from "./BarList";

type BarListItem = {
  name: string, value: number,
}

interface BarListHeroProps {
  data : BarListItem[];
}
const BarListHero = ({
  data
}: BarListHeroProps) => {

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const average = total / data.length;
  const maxValueObject = data.reduce((max, obj) => (obj.value > max.value ? obj : max), data[0]);

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
