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
//import { startMQTTService } from "@/lib/iot_core/temp-mqtt";
const Transitions = dynamic(() => import("@/components/animations/Transition"));
const InfoCard = dynamic(() => import("@/components/shared/InfoCard"));
const BarListHero = dynamic(() => import("@/components/BarList/BarListHero"));
const ConsumptionCard = dynamic(
  () => import("@/components/progressBar/ConsumptionCard")
);

export default function Home() {
  const [selectedDate, setselectedDate] = useState<Dayjs>(
    dayjs().subtract(5, "day").locale("en")
  );
  const [selectedBarData, setselectedBarData] =
    useState<quarterUsageData>(bargraphInitialState);

  const [selectedBar, setselectedbar] = useState<string>("0");
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
    if (refetch) {
      refetch({
        slug: queryString.stringify(options),
      });
    }

    if (data && data.length > 0) {
      setselectedbar(String(data.length));
    }

    return () => {
      setselectedbar("0");
      setselectedBarData(bargraphInitialState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.date, selectedDate, refetch, JSON.stringify(data)]);
  //startMQTTService();

  return (
    <Transitions
      type="slide"
      direction="left"
      in={true}
      timeout={{ appear: 0, enter: 100, exit: 100 }}
    >
      <div className="bg-[#edf1f5] no-scrollbar">
        <InfoCard />
        <ConsumptionCard powerUsage={75} maxPower={90} limitPower={3} />
        <DateSwitcher
          selectedDate={selectedDate}
          setSelectedDate={setselectedDate}
        />
        <BarChartHero
          chartdata={data}
          selectedBar={selectedBar}
          setselectedbar={setselectedbar}
          setselectedbardata={setselectedBarData}
        />
        <BarListHero data={selectedBarData} />
      </div>
    </Transitions>
  );
}
