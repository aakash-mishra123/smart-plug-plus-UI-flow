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
import { startMQTTService } from "@/lib/iot_core/temp-mqtt";
const Navbar = dynamic(() => import("@/components/tabs/Tabs"));
const Display = dynamic(() => import("@/components/display/display"));
const InfoCard = dynamic(() => import("@/components/shared/InfoCard"));
const BarListHero = dynamic(() => import("@/components/BarList/BarListHero"));
const ConsumptionCard = dynamic(
  () => import("@/components/progressBar/ConsumptionCard")
);

export default function Home() {
  const [selectedDate, setselectedDate] = useState<Dayjs>(dayjs().locale("en"));
  const [selectedBarData, setselectedBarData] = useState<quarterUsageData>();

  const [prevDayConsumption, setPrevDayConsumption] = useState<number>(0);

  const [currDayConsumption, setCurrDayConsumption] = useState<number>(0);

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

    if (data && data?.data && data?.data.length > 0) {
      const lastIndex = data.data
        .map((obj, index) => (Object.keys(obj).length > 0 ? index : -1))
        .filter((index) => index != -1)
        .pop();

      setselectedbar(String(lastIndex ? lastIndex + 1 : 0));
      setselectedBarData(data?.data[lastIndex ?? 0]);
    }

    return () => {
      setselectedbar("0");
      setselectedBarData(bargraphInitialState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.date, selectedDate, refetch]);

  const onFirstTabClick = async () => {
    setCurrDayConsumption(data?.totalEnergyConsumed ?? 0);
    await Promise.resolve();
    if (refetch) {
      refetch({
        slug: queryString.stringify({
          date: dayjs().subtract(1, "day").format("YYYY-MM-DD"),
          serial: process.env.NEXT_PUBLIC_SERIAL_PARAMS,
        }),
      });

      setPrevDayConsumption(data?.totalEnergyConsumed ?? 0);
    }
  };

  startMQTTService();

  return (
    <div className="bg-[#edf1f5] no-scrollbar">
      <InfoCard />
      <ConsumptionCard powerUsage={75} maxPower={90} limitPower={3} />

      <Navbar
        tabHeadings={[
          {
            heading: "Tab1",
            title: "Consumi e spesa",
            onTabClick: () => onFirstTabClick(),
          },
          {
            heading: "Tab2",
            title: "Dettaglio dei consumi",
            onTabClick: () => {
              console.log("second tab clicked");
            },
          },
        ]}
        tabChildComponents={[
          {
            id: 1,
            value: "Tab1",
            children: (
              <Display
                currentDayConsumption={currDayConsumption}
                previousDayConsumption={prevDayConsumption}
              />
            ),
          },
          {
            id: 2,
            value: "Tab2",
            children: (
              <>
                <DateSwitcher
                  selectedDate={selectedDate}
                  setSelectedDate={setselectedDate}
                  data={data}
                />
                <BarChartHero
                  chartdata={data}
                  selectedBar={selectedBar}
                  setselectedbar={setselectedbar}
                  setselectedbardata={setselectedBarData}
                />
                <BarListHero data={selectedBarData} />
              </>
            ),
          },
        ]}
      />
    </div>
  );
}
