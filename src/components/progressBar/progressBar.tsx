"use client";

import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { Metric } from "@tremor/react";
import { convertToItalicNumber } from "@/utils/methods";
type CustomProgressProps = {
  contractPowerToShow?: number;
  instantPower?: number;
  value: number;
};

const CustomLinearProgress = ({ value }: CustomProgressProps) => {
  const bkgColor =
    value < 3000 ? (value < 2500 ? "#37785a" : "#f5b800") : "#ed0528";

  const bkgBanner = value < 2500 ? "#f5fff6" : "#fcf1f6";
  const percent = Math.round((value / 3200) * 100);
  return (
    <div className="flex flex-col relative py-2">
      <div className="flex flex-row gap-2 items-end mt-4 mb-4 pl-2">
        <Metric className={`text-3xl font-bold`} style={{ color: bkgColor }}>
          {convertToItalicNumber(value, 1000, 2) ?? "2,3"}
        </Metric>
        <Metric className="text-black text-3xl ">di {3000 / 1000} </Metric>
        <p className="text-black text-2xl ">kW</p>
      </div>
      <Box
        sx={{
          width: "100%",
        }}
        className="font-roboto flex flex-col items-center"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "fit-content",
            borderRadius: 16,
            backgroundColor: "#c1cede",
            width: "90%",
          }}
        >
          <LinearProgress
            variant="buffer"
            value={value}
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
                backgroundColor: "#1976D2",
                marginLeft: "1%",
                position: "relative",
              },
              "& .MuiLinearProgress-bar1": {
                backgroundColor: bkgColor,
                borderRadius: 16,
                position: "absolute",
                marginY: "4px",
                transform: "translateX(-2%) !important",
                maxWidth: "99%",
                width: `${percent}%`,
                left: value >= 2500 ? "2%" : "1%",
              },
              "& .MuiLinearProgress-dashed": {
                backgroundColor: "#c1cede",
                backgroundImage: "none",
              },
              "& .MuiLinearProgress-bar2Buffer": {
                backgroundColor: "#c1cede",
                animation: "none",
              },
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "32%",
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              transform: "translateY(+40%)",
              px: "2%",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: "white",
                borderRadius: "50%",
                position: "absolute",
                left: "8%",
              }}
            />
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: value < 2500 ? "black" : "white",
                borderRadius: "50%",
                position: "absolute",
                right: "42%",
              }}
            />
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: value < 3000 ? "black" : "white",
                borderRadius: "50%",
                position: "absolute",
                right: "8%",
              }}
            />
          </Box>
        </Box>

        <Box
          className="font-roboto"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: `8%`,
              color: "black",
              marginLeft: "8%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontSize={15} fontWeight="bold">
              |
            </Typography>
            <Typography fontSize={15} fontWeight="bold">
              0 kw
            </Typography>
            <Typography fontSize={12} fontWeight="medium" color="black">
              Inattività
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              color: "black",
              right: "2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "roboto",
              marginRight: "28%",
            }}
            className="font-roboto"
          >
            <Typography fontSize={14} fontWeight="bold">
              |
            </Typography>
            <Typography fontSize={15} fontWeight="bold">
              2,5 kw
            </Typography>
            <Typography fontSize={14} fontWeight="medium" color="black">
              Soglia del tuo piano
            </Typography>
          </Box>
          <Box
            sx={{
              color: "black",
              marginRight: "2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontSize={15} fontWeight="bold" marginRight="3%">
              |
            </Typography>
            <Typography fontSize={15} fontWeight="bold" width="full">
              3 kw
            </Typography>
            <Typography fontSize={14} fontWeight="medium" color="black">
              Soglia massima
            </Typography>
          </Box>
        </Box>

        <hr />
        <div
          className={`rounded-lg border-2 mt-4 p-4 flex flex-row gap-2 bg-white text-black font-roboto items-center`}
          style={{ borderColor: bkgColor, background: bkgBanner }}
        >
          {value < 2500 ? (
            <FaCheckCircle
              className={`font-bold w-8 rounded-full h-8 text-2xl text-green-800`}
            />
          ) : value < 3000 ? (
            <IoWarning
              className={`font-bold w-8 rounded-full h-8 text-2xl text-yellow-500`}
            />
          ) : (
            <IoWarning
              className={`font-bold w-12 rounded-full h-12 text-2xl text-red-800`}
            />
          )}
          {value < 2500 ? (
            <p className={`text-sm text-black`}>
              {" "}
              La potenza attuale della tua Presa Plus rispetta la soglia del tuo
              piano 👍
            </p>
          ) : value < 3000 ? (
            <p className={`text-sm text-[${bkgColor}]`}>
              {" "}
              Stai raggiungendo il limite di utilizzo.
            </p>
          ) : (
            <p className={`text-sm text-[${bkgColor}]`}>
              {" "}
              <b>Hai superato il limite di utilizzo.</b> Riduci il consumo di
              energia elettrica per evitare l’interruzione della fornitura.
            </p>
          )}
        </div>
      </Box>
    </div>
  );
};

export default CustomLinearProgress;
