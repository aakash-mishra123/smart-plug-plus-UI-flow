"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";
import dayjs, { Dayjs } from "dayjs";
import queryString from "query-string";
import { useState } from "react";
import BarChartHero from "@/components/navbar/BarChartHero";
import DateSwitcher from "@/components/dateSwitch/DateSwitcher";
import FormatDailyUsageData from "@/api/quarterlyUsageAPI";
import { quarterUsageData } from "@/api/types/dailyUsageTypes";
import { bargraphInitialState } from "@/utils/constants";

const Transitions = dynamic(() => import("@/components/animations/Transition"));
const InfoCard = dynamic(() => import("@/components/shared/InfoCard"));
const BarListHero = dynamic(() => import("@/components/BarList/BarListHero"));
const ConsumptionCard = dynamic(
  () => import("@/components/progressBar/ConsumptionCard")
);

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(
    dayjs().subtract(5, "day").locale("en")
  );
  const [selectedBarData, setSelectedBarData] =
    useState<quarterUsageData>(bargraphInitialState);

  const options = useMemo(
    () => ({
      date: dayjs(selectedDate).format("YYYY-MM-DD"),
      serial: process.env.NEXT_PUBLIC_SERIAL_PARAMS,
    }),
    [selectedDate]
  ); // Recompute only when selectedDate changes

  const { data, refetch } = FormatDailyUsageData({
    slug: queryString.stringify(options),
  });

  useEffect(() => {
    if (refetch)
      refetch({
        slug: queryString.stringify(options),
      });
    setSelectedBarData(data[0]);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.date, selectedDate, refetch]);

  return (
    <Transitions
      type="slide"
      direction="left"
      in={true}
      timeout={{ appear: 0, enter: 100, exit: 100 }}
    >
      <div className="bg-[#edf1f5]">
        <InfoCard />
        <ConsumptionCard powerUsage={75} maxPower={90} limitPower={3} />
        <DateSwitcher
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <BarChartHero
          chartdata={data}
          setSelectedBarData={setSelectedBarData}
        />
        <BarListHero data={bargraphInitialState.data} />
      </div>
    </Transitions>
  );
}
