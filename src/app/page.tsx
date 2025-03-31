"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import queryString from "query-string";
import BarChartHero from "@/components/navbar/BarChartHero";
import DateSwitcher from "@/components/dateSwitch/DateSwitcher";
import FormatDailyUsageData from "@/app/api/quarterlyUsageAPI";
import { quarterUsageData } from "@/app/types/dailyUsageTypes";
import { useSelector } from "react-redux";
import { RootState } from "./store";
const Navbar = dynamic(() => import("@/components/tabs/Tabs"));
const Display = dynamic(() => import("@/components/display/display"));
const InfoCard = dynamic(() => import("@/components/shared/InfoCard"));
const BarListHero = dynamic(() => import("@/components/BarList/BarListHero"));
const ConsumptionCard = dynamic(
  () => import("@/components/progressBar/ConsumptionCard")
);

export default function Home() {
  const bargraphInitialState = useSelector(
    (store: RootState) => store.powerData
  );

  const serialId = useSelector(
    (store: RootState) => store.deviceData.data.serial
  );
  const [view, setView] = useState<string>("month");
  const [selectedDate, setselectedDate] = useState<Dayjs>(dayjs().locale("en"));
  const [selectedBarData, setselectedBarData] = useState<quarterUsageData>(
    bargraphInitialState.data
  );
  const [selectedBar, setselectedbar] = useState<string>("0");

  const options = useMemo(
    () => ({
      date: dayjs(selectedDate).format("YYYY-MM-DD"),
      serial: serialId,
    }),
    [selectedDate, serialId]
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

      setselectedbar(String(lastIndex ? lastIndex : 0));
      setselectedBarData(data?.data[lastIndex ?? 0]);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.date, selectedDate, refetch]);

  return (
    <div className="bg-[#edf1f5] no-scrollbar">
      <InfoCard />
      <ConsumptionCard />
      <Navbar
        tabHeadings={[
          {
            heading: "Tab1",
            title: "Consumi e spesa",
          },
          {
            heading: "Tab2",
            title: "Dettaglio dei consumi",
          },
        ]}
        tabChildComponents={[
          {
            id: 1,
            value: "Tab1",
            children: <Display />,
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
                  view={view}
                  setView={setView}
                />
                {view === "day" ? (
                  <>
                    <BarChartHero
                      chartdata={data}
                      selectedBar={selectedBar}
                      setselectedbar={setselectedbar}
                      setselectedbardata={setselectedBarData}
                      selectedBarData={selectedBarData}
                    />
                    <BarListHero data={selectedBarData} />
                  </>
                ) : (
                  <>
                    <h1>Month view</h1>
                  </>
                )}
              </>
            ),
          },
        ]}
      />
    </div>
  );
}
