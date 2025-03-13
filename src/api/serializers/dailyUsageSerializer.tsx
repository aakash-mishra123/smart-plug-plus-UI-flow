import FetchUsageByIntervals from "../quarterlyUsageAPI";

export const DailyUsageSerializer = () => {

  const {data} = FetchUsageByIntervals({
    slug: "a;lkdjf",
    options: {}
  }); 

  console.log('data', data);

  return {}
};
