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
import Image from "next/image";
import MeterIcon from "../../public/assets/Bg.png";

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
  const status = useSelector((store: RootState) => store.deviceData.data.online);

  const [view, setView] = useState<string>("day");
  const [displayView, setDisplayView] = useState<string>("day");

  const [selectedDate, setselectedDate] = useState<Dayjs>(dayjs().locale("en"));
  const [selectedBarData, setselectedBarData] = useState<quarterUsageData>(dummyBarGraph.data[0]);
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

    return () => { };
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
      {
        status === true ? (
          <>
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
                          className={`text-md h-8 font-medium rounded-[4px] ${displayView === "month"
                            ? "border-2 border-[#0047CC] text-[#0047CC] bg-white"
                            : "text-gray-900 bg-transparent border-none tracking-wider"
                            }`}
                        >
                          Mese
                        </Button>
                        <Button
                          onClick={() => setDisplayView("day")}
                          className={`text-md font-medium h-8 rounded-[4px] ${displayView === "day"
                            ? "border-2 border-[#0047CC] text-[#0047CC] bg-white"
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
                            className={`text-md h-8 rounded-[4px] ${view === "month"
                              ? "border-2 border-blue-600 font-medium text-blue-700 bg-white"
                              : "text-gray-900 bg-transparent border-none"
                              }`}
                          >
                            Mese
                          </Button>
                          <Button
                            onClick={() => setView("day")}
                            className={`text-md h-8 rounded-[4px] ${view === "day"
                              ? "border-2 border-blue-600 font-medium text-blue-700 bg-white"
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
          </>
        ) : (
          <div className="w-full bg-white flex flex-col gap-2 items-center text-center p-6 pb-12">
            <Image
              src={MeterIcon}
              alt="meter_icon"
              height={180}
              className="bg-white w-fit"
            />
            <div className="p-4 flex flex-col gap-2">

              <p className="text-2xl font-semibold">Sembra che la tua presa plus non sia connessa!</p>
              <p className="text-lg text-[#667790] font-thin">Il dispositivo non riesce a completare la connessione.</p>
            </div>

            <div className="flex flex-col gap-2 items-left w-full text-left">

              <p className="font-bold text-xl">Come posso risolvere il problema?</p>
              <p className="text-md text-[#667790] font-thin">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>

              <div className="flex flex-col gap-2 p-2 bg-[#F7F8FB]">

                <p className="text-lg font-semibold">1. {" "} Lorem ipsum dolor sit amet</p>
                <p className="text-md font-thin text-[#667790]">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem </p>
              </div>

              <div className="flex flex-col gap-2 p-2 bg-[#F7F8FB]">

                <p className="text-lg font-semibold">2. {" "} Lorem ipsum dolor sit amet</p>
                <p className="text-md font-thin text-[#667790]">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem </p>
              </div>
              <div className="flex flex-col gap-2 p-2 bg-[#F7F8FB]">

                <p className="text-lg font-semibold">3. {" "} Lorem ipsum dolor sit amet</p>
                <p className="text-md font-thin text-[#667790]">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem </p>
              </div>
            </div>

            <hr className="text-[#667790]" />

            <div className="flex flex-col gap-2 items-center">
              <p className="font-bold text-black">Non riesci a risolvere il problema? </p>
              <p className="font-thin text-black text-lg">Contatta l’assistenza cliccando sul
                pulsante che si trova in alto a destra.</p>
            </div>

          </div>
        )
      }

    </div>
  );
}
