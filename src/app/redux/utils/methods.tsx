import dayjs from "dayjs";

export function divideIntoFourGroups(
  data: {
    date: string;
    usage: number;
    timestamp: number;
  }[]
) {
  const groupedData = [];
  const peakConsumption = { value: 0, timeString: "" };

  for (let i = 0; i < 24; i++) {
    const chunk = data.slice(i * 4, i * 4 + 4); // Get 4 elements per group

    if (chunk.length === 4) {
      const totalUsage = Number(
        chunk.reduce((sum, item) => sum + item.usage, 0)
      );

      // Find the peak usage object
      const peakItem = chunk.reduce(
        (prev, curr) => (curr.usage > prev.usage ? curr : prev),
        chunk[0]
      );

      // Mark peak value
      let additionValue = 0;
      const updatedChunk = chunk.map((item) => {
        const from = dayjs
          .unix(item.timestamp)
          .add(additionValue, "minute")
          .format("HH:mm");

        const to = dayjs
          .unix(item.timestamp)
          .add(additionValue + 15, "minute")
          .format("HH:mm");

        if (totalUsage > peakConsumption.value) {
          peakConsumption.value = Math.max(totalUsage, peakConsumption.value);
          const endValue = dayjs(`2000-01-01 ${from}`, "YYYY-MM-DD HH:mm") // Add a date component
            .add(60, "minute")
            .format("HH:mm");

          peakConsumption.timeString = `${from} - ${endValue}`;
        }
        return {
          ...item,
          timeString: `${from} - ${to}`,
          peakValue: item.timestamp === peakItem.timestamp,
        };
      });

      additionValue = 0;
      const timestring = `Dalle ore ${dayjs
        .unix(chunk[0].timestamp)
        .format("HH:mm")} - alle ore ${dayjs
        .unix(chunk[0].timestamp)
        .add(60, "minute")
        .format("HH:mm")}`;

      groupedData.push({
        date: String(i),
        usage: totalUsage / 1000,
        value: totalUsage / 1000,
        timestring: timestring,
        data: updatedChunk,
      });
    }
  }
  const totalHours = 24;
  while (groupedData.length < totalHours) {
    groupedData.push({});
  }

  return { peakConsumption, dividedIntervalsData: groupedData };
}
