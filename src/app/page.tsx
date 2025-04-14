"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import queryString from "query-string";
import BarChartHero from "@/components/navbar/BarChartHero";
import DateSwitcher from "@/components/dateSwitch/DateSwitcher";
import { quarterUsageData } from "@/app/types/dailyUsageTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux";
import { Button } from "@tremor/react";
import { fetchDeviceData } from "./redux/deviceSlice";
import { fetchQuarterData as refetch } from "./redux/powerSlice";
import { dummyBarGraph } from "@/utils/constants";

const MonthlyView = dynamic(() => import("@/components/tabs/monthlyview"));
const Navbar = dynamic(() => import("@/components/tabs/Tabs"));
const Display = dynamic(() => import("@/components/display/display"));
const InfoCard = dynamic(() => import("@/components/shared/InfoCard"));
const BarListHero = dynamic(() => import("@/components/BarList/BarListHero"));
const MonthlyDisplay = dynamic(
  () => import("@/components/display/MonthlyDisplay")
);
const ConsumptionCard = dynamic(
  () => import("@/components/progressBar/ConsumptionCard")
);

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const powerData = useSelector((store: RootState) => store.powerData.data);

  useEffect(() => {
    if (fetchDeviceData) {
      dispatch(fetchDeviceData());
    }
  }, [dispatch]);

  const serialId = useSelector(
    (store: RootState) => store.deviceData.data.serial
  );

  const [view, setView] = useState<string>("day");
  const [displayView, setDisplayView] = useState<string>("day");

  const [selectedDate, setselectedDate] = useState<Dayjs>(dayjs().locale("en"));
  const [selectedBarData, setselectedBarData] = useState<quarterUsageData>(
    dummyBarGraph.data[0]
  );
  const [selectedBar, setselectedbar] = useState<string>("0");

  const options = useMemo(
    () => ({
      date: dayjs(selectedDate).format("YYYY-MM-DD"),
      serial: serialId,
    }),
    [selectedDate, serialId]
  ); // Recompute only when selectedDate changes

  useEffect(() => {
    if (options.date && serialId) {
      dispatch(
        refetch({
          slug: queryString.stringify(options),
          options,
        })
      );
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.date, selectedDate, refetch]);

  useEffect(() => {
    if (powerData && powerData.data?.length > 0) {
      const lastIndex = powerData.data
        .map((obj, index) => (Object.keys(obj).length > 0 ? index : -1))
        .filter((index) => index !== -1)
        .pop();

      setselectedbar(String(lastIndex ?? 0));
      setselectedBarData(powerData.data[lastIndex ?? powerData.data.length]);
    }
  }, [powerData]);

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
            children: (
              <div className="relative">
                <div className="absolute top-10 z-10 right-4 h-8 bg-[#F7F8FB] p-1 rounded-lg flex flex-row gap-1">
                  <Button
                    onClick={() => setDisplayView("month")}
                    className={`text-sm px-2 py-0 rounded-[4px] ${
                      displayView === "month"
                        ? "border-2 border-blue-600 text-blue-700 bg-white"
                        : "text-gray-900 bg-transparent border-none"
                    }`}
                  >
                    Mese
                  </Button>
                  <Button
                    onClick={() => setDisplayView("day")}
                    className={`text-sm px-2 py-0 rounded-[4px] ${
                      displayView === "day"
                        ? "border-2 border-blue-600 text-blue-700 bg-white"
                        : "text-gray-900 bg-transparent border-none"
                    }`}
                  >
                    Giorno
                  </Button>
                </div>
                {displayView === "day" ? <Display /> : <MonthlyDisplay />}
              </div>
            ),
          },
          {
            id: 2,
            value: "Tab2",
            children: (
              <div>
                <div className="relative">
                  <div className="absolute top-10 z-10 right-4 h-8 bg-[#F7F8FB] p-1 rounded-lg flex flex-row gap-1">
                    <Button
                      onClick={() => setView("month")}
                      className={`text-sm px-2 py-0 rounded-[4px] ${
                        view === "month"
                          ? "border-2 border-blue-600 text-blue-700 bg-white"
                          : "text-gray-900 bg-transparent border-none"
                      }`}
                    >
                      Mese
                    </Button>
                    <Button
                      onClick={() => setView("day")}
                      className={`text-sm px-2 py-2 rounded-[4px] ${
                        view === "day"
                          ? "border-2 border-blue-600 text-blue-700 bg-white"
                          : "text-gray-900 bg-transparent border-none"
                      }`}
                    >
                      Giorno
                    </Button>
                  </div>
                </div>
                {view === "day" ? (
                  <>
                    <DateSwitcher
                      selectedDate={selectedDate}
                      setSelectedDate={setselectedDate}
                      data={powerData}
                      view={view}
                      setView={setView}
                    />
                    <BarChartHero
                      chartdata={powerData}
                      selectedBar={selectedBar}
                      setselectedbar={setselectedbar}
                      setselectedbardata={setselectedBarData}
                      selectedBarData={selectedBarData}
                    />
                    <BarListHero data={selectedBarData ?? []} />
                  </>
                ) : (
                  <MonthlyView />
                )}
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
