"use client";

import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { Metric } from "@tremor/react";
import { convertToItalicNumber } from "@/utils/methods";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { fetchPodData } from "@/app/store/slice/podDataSlice";

type CustomProgressProps = {
  instantPower?: number;
  value: number;
  serial: string;
};

const CustomLinearProgress = ({ value, serial }: CustomProgressProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const bkgColor =
    value < 3000 ? (value < 2500 ? "#41875c" : "#f5b800") : "#ed0528";
  const bkgBanner = value < 2500 ? "#f5fff6" : "#fcf1f6";
  const percent = Math.round((value / 3200) * 100);
  const [contractPower, setContractPower] = useState<number>(3000);

  useEffect(() => {
    if (fetchPodData) {
      dispatch(fetchPodData(serial))
        .unwrap()
        .then((res) => setContractPower(res.contractPower))
        .catch((err) => {
          console.log("ERROR: FETCH DATA ERROR", err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="flex flex-col relative bg-transparent">
      <div className="bg-white rounded-[6px] p-2 ">
        <div className="flex flex-row gap-2 items-end mt-4 mb-4">
          <div className="flex flex-row gap-0 items-end">
            <span className="flex flex-row items-end -mt-1">
              <Metric
                className="text-3xl font-roobert font-bold tracking-tighter"
                style={{ color: bkgColor }}
              >
                {convertToItalicNumber(value, 1000, 2).split(".")[0]}
              </Metric>
              <Metric
                className="font-mono"
                style={{ color: bkgColor, fontWeight: "bolder" }}
              >
                ,
              </Metric>
              <Metric
                className="text-3xl font-roobert font-bold tracking-tighter"
                style={{ color: bkgColor }}
              >
                {convertToItalicNumber(value, 1000, 2).split(".")[1]}
              </Metric>
            </span>
          </div>
          <Metric className="text-black text-3xl font-medium ">
            di {contractPower / 1000}{" "}
          </Metric>
          <p className="text-black text-lg ">kW</p>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "fit-content",
            borderRadius: 16,
            backgroundColor: "#eff2f6",
            width: "95%",
          }}
        >
          <LinearProgress
            variant="buffer"
            value={value ?? 0}
            valueBuffer={80}
            sx={{
              height: 28,
              borderRadius: 20,
              overflow: "hidden",
              "& .MuiBoxRoot": {
                height: 50,
                animation: "none",
              },
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#eff2f6",
                marginLeft: "1%",
                position: "relative",
              },
              "& .MuiLinearProgress-bar1": {
                backgroundColor: bkgColor,
                borderRadius: 16,
                position: "absolute",
                marginY: "4px",
                transform: "translateX(-2%) !important",
                maxWidth: "98%",
                width: `${percent}%`,
                left: value >= 2500 ? "2%" : "1%",
              },
              "& .MuiLinearProgress-dashed": {
                backgroundColor: "#eff2f6",
                backgroundImage: "none",
              },
              "& .MuiLinearProgress-bar2Buffer": {
                backgroundColor: "#eff2f6",
                animation: "none",
              },
            }}
          />
        </Box>
        <Box
          className="font-roboto"
          sx={{
            position: "relative",
            width: "100%",
            fontFamily: "roboto",
            paddingBottom: "3rem", // Prevents overlap with alert box
          }}
        >
          {/* Dots */}
          <Box
            className="absolute w-full"
            sx={{
              top: "-16px",
              zIndex: 1,
            }}
          >
            {/* 0 kW Dot */}
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: value < 0 ? "black" : "white",
                borderRadius: "50%",
                position: "absolute",
                left: {
                  xsm: "10%",
                  xsss: "11%",
                  xss: "12%",
                  xs: "13%",
                  sm: "13%",
                  md: "13%",
                  lg: "13%",
                  xl: "13%",
                  "2xl": "13%",
                },
              }}
            />
            {/* 2.5 kW Dot */}
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: value < 2500 ? "black" : "white",
                borderRadius: "50%",
                position: "absolute",
                left: {
                  xsm: "52%",
                  xsss: "52%",
                  xss: "51.5%",
                  xs: "51%",
                  sm: "51%",
                  md: "51%",
                  lg: "50.5%",
                  xl: "50.5%",
                  "2xl": "50%",
                },
              }}
            />
            {/* 3 kW Dot */}
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: value < 3000 ? "black" : "white",
                borderRadius: "50%",
                position: "absolute",
                left: {
                  xsm: "87%",
                  xsss: "86%",
                  xss: "85%",
                  xs: "84%",
                  sm: "83%",
                  md: "82%",
                  lg: "82%",
                  xl: "82%",
                  "2xl": "82%",
                },
              }}
            />
          </Box>

          {/* Labels */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "2px",
              marginBottom: "16px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* 0 kW */}
            <Box
              sx={{
                position: "absolute",
                left: {
                  xsm: "10%",
                  xsss: "11%",
                  xss: "12%",
                  xs: "13%",
                  sm: "13%",
                  md: "13%",
                  lg: "13%",
                  xl: "13%",
                  "2xl": "13%",
                },
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography fontSize={15} fontWeight="bold">
                |
              </Typography>
              <p className="text-xs font-bold sm:text-sm md:text-lg">0 kw</p>
              <p className="text-xs sm:text-sm md:text-lg font-medium">
                Inattività
              </p>
            </Box>

            {/* 2.5 kW */}
            <Box
              sx={{
                position: "absolute",
                left: {
                  xsm: "52%",
                  xsss: "52%",
                  xss: "51.5%",
                  xs: "51%",
                  sm: "51%",
                  md: "51%",
                  lg: "50.5%",
                  xl: "50.5%",
                  "2xl": "50%",
                },
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography fontSize={14} fontWeight="bold">
                |
              </Typography>
              <p className="text-xs font-bold sm:text-sm md:text-lg">2,5 kw</p>
              <p className="text-xs sm:text-sm md:text-lg font-medium">
                Soglia del tuo piano
              </p>
            </Box>

            {/* 3 kW */}
            <Box
              sx={{
                position: "absolute",
                left: {
                  xsm: "87%",
                  xsss: "86%",
                  xss: "85%",
                  xs: "84%",
                  sm: "83%",
                  md: "82%",
                  lg: "82%",
                  xl: "82%",
                  "2xl": "82%",
                },
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography fontSize={15} fontWeight="bold">
                |
              </Typography>
              <p className="text-xs font-bold sm:text-sm md:text-lg">3 kw</p>
              <p className="text-xs sm:text-sm md:text-lg font-medium">
                Soglia massima
              </p>
            </Box>
          </Box>
        </Box>
      </div>
      <hr />
      <div
        className={`rounded-lg border-2 mt-4 px-4 py-2 flex flex-row gap-4 bg-white text-black font-roboto items-center`}
        style={{ borderColor: bkgColor, background: bkgBanner }}
      >
        {value < 2500 ? (
          <FaCheckCircle
            className={`font-bold w-6 rounded-full h-6 text-2xl text-green-800`}
          />
        ) : value < 3000 ? (
          <IoWarning
            className={`font-bold w-6 rounded-full h-6 text-2xl text-yellow-500`}
          />
        ) : (
          <IoWarning
            className={`font-bold w-12 rounded-full h-12 text-2xl text-red-800`}
          />
        )}
        {value < 2500 ? (
          <p className={`text-md text-black`}>
            {" "}
            La potenza attuale della tua Presa Plus rispetta la soglia del tuo
            piano 👍
          </p>
        ) : value < 3000 ? (
          <p className={`text-md text-[${bkgColor}]`}>
            {" "}
            Stai raggiungendo il limite di utilizzo.
          </p>
        ) : (
          <p className={`text-md text-[${bkgColor}]`}>
            {" "}
            <b>Hai superato il limite di utilizzo.</b> Riduci il consumo di
            energia elettrica per evitare l’interruzione della fornitura.
          </p>
        )}
      </div>
    </div>
  );
};

export default CustomLinearProgress;
