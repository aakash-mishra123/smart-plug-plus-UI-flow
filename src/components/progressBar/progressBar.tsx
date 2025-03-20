"use client";

import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";

type CustomProgressProps = {
  value: number;
};

const CustomLinearProgress = ({ value }: CustomProgressProps) => {
  const bkgColor =
    value < 84 ? (value < 38 ? "#37785a" : "#f5b800") : "#ed0528";

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
      className="montserrat-custom"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "fit-content",
          borderRadius: 16,
          backgroundColor: "#c1cede",
        }}
      >
        <LinearProgress
          variant="buffer"
          value={value}
          valueBuffer={80}
          sx={{
            height: 25,
            borderRadius: 16,
            "& .MuiBoxRoot": {
              height: 50,
              animation: "none",
            },
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#1976D2", // Value bar color (Primary)
              marginLeft: "4px",
            },
            "& .MuiLinearProgress-bar1": {
              backgroundColor: bkgColor, // Value bar color (Primary)
              borderRadius: 16,
              position: "absolute",
              left: "4lpx",
              marginY: "4px",
              transform: "translateX(-2%) !important",
              maxWidth: "98%",
              width: `${value}%`,
              marginLeft: "8px",
            },
            "& .MuiLinearProgress-dashed": {
              backgroundColor: "#edf1f5", // Dashed buffer color (Red)
              backgroundImage: "none",
            },
            "& .MuiLinearProgress-bar2Buffer": {
              backgroundColor: "#c1cede", // Buffer bar color (Amber)
              animation: "none",
            },
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "9%",
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
            transform: "translateY(+40%)",
            px: "2%",
          }}
        >
          {/* First Dot - 0 kW */}
          <Box
            sx={{
              width: 6,
              height: 6,
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              left: "4%",
            }}
          />

          {/* Second Dot - 2.5 kW (83.33% position) */}
          <Box
            sx={{
              width: 6,
              height: 6,
              backgroundColor: value < 83 ? "black" : "white",
              borderRadius: "50%",
              position: "absolute",
              left: "75%",
            }}
          />

          {/* Third Dot - 3 kW (100% position) */}
          <Box
            sx={{
              width: 6,
              height: 6,
              backgroundColor: value < 98 ? "black" : "white",
              borderRadius: "50%",
              position: "absolute",
              right: "-1%",
            }}
          />
        </Box>
      </Box>

      <Box
        className="montserrat-custom"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: `15%`,
            color: "black",
            marginLeft: "3%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography fontSize={15} fontWeight="bold">
            |
          </Typography>
          <Typography fontSize={13} fontWeight="bold">
            0 kW
          </Typography>
          <Typography fontSize={12} fontWeight="medium" color="black">
            Inattività
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            color: "black",
            right: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography fontSize={14} fontWeight="bold">
            |
          </Typography>
          <Typography fontSize={13} fontWeight="bold">
            2.5 kW
          </Typography>
          <Typography fontSize={12} fontWeight="bold" color="black">
            Limite{" "}
          </Typography>
          <Typography fontSize={12} fontWeight="bold" color="black">
            {" "}
            di utilizzo
          </Typography>
        </Box>
        <Box
          sx={{
            color: "black",
            marginRight: "3%",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Typography fontSize={15} fontWeight="bold" marginRight="3%">
            |
          </Typography>
          <Typography fontSize={13} fontWeight="bold" width="full">
            3 kW
          </Typography>
          <Typography fontSize={12} fontWeight="medium" color="black">
            Soglia{" "}
          </Typography>
          <Typography fontSize={12} fontWeight="medium" color="black">
            massima
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomLinearProgress;
