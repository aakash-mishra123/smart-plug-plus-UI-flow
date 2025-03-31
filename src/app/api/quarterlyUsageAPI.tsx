//import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import {
  FetchQuarterlyUsageDataProps,
  QuarterlyAPIResponseType,
  quarterUsageData,
  ResultDataType,
  totalDailyUsageType,
} from "../types/dailyUsageTypes";
import { EnergyDataProp } from "@/utils/types";
import dayjs from "dayjs";
import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;
const QUARTER_USAGE_URL = "v1/energy/quarter";

/**
 * Fetches power usage data by 15 minute intervals based on the provided slug and options.
 *
 * @param {Object} props - The function parameters.
 * @param {string} props.slug - The unique identifier for fetching usage data.
 * @param {Object} [props.options={}] - Optional parameters for the API request.
 * @returns {Promise<UsageData[]>} A promise that resolves to an array of usage data objects.
 */

const FetchUsageByIntervals = ({
  slug,
  options = {},
}: FetchQuarterlyUsageDataProps) => {
  const [data, setData] = useState<QuarterlyAPIResponseType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(
    async ({ slug, options = {} }: FetchQuarterlyUsageDataProps) => {
      try {
        const url = `${BASE_URL}/${QUARTER_USAGE_URL}?${slug}`;

        const response = await axios.get(url, {
          params: options,
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${AUTH_TOKEN}`,
          },
        });

        setLoading(() => true);
        setError(null);
        const responseData = response?.data;
        setData(responseData);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      }
      setLoading(() => false);
    },
    []
  );

  useEffect(() => {
    if (fetchData)
      fetchData({
        slug: slug,
        options: options,
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, loading, refetch: fetchData };
};

const FormatDailyUsageData = ({
  slug,
  options = {},
}: FetchQuarterlyUsageDataProps): ResultDataType => {
  const { data, error, loading, refetch } = FetchUsageByIntervals({
    slug,
    options,
  });

  if (!data || !data?.data) {
    return {
      data: {
        date: "",
        totalEnergyConsumed: 0,
        averageConsumption: 0,
        peakConsumption: { value: 0, timeString: "" },
        data: [],
      },
      error: error || null,
      loading,
    };
  }

  const peakConsumption = { value: 0, timeString: "" };

  function divideIntoFourGroups(
    data: {
      date: string;
      usage: number;
      timestamp: number;
    }[]
  ) {
    const groupedData = [];
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

    return groupedData;
  }
  const chartData = data?.data.map((item: EnergyDataProp) => ({
    date: item.formattedDate,
    usage: item.currQuartActEnergy || 0,
    timestamp: item.measureTS - 16200,
    value: item.currQuartActEnergy || 0,
  }));

  const dividedIntervalsData: quarterUsageData[] =
    divideIntoFourGroups(chartData);

  const averageConsumption = data?.totalEnergyConsumed
    ? data?.totalEnergyConsumed / 24
    : 0;

  const dividedData: totalDailyUsageType = {
    date: data?.date,
    totalEnergyConsumed: data?.totalEnergyConsumed,
    averageConsumption: averageConsumption,
    peakConsumption: peakConsumption,
    data: dividedIntervalsData,
  };
  return { data: dividedData, error: error || null, loading, refetch };
};

export default FormatDailyUsageData;
