"use client";

import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";


const CustomLinearProgress = ({ value, buffer } : any) => {
  return (
    <Box
    sx={{ 
      p: 0.5,
      width: "90%", 
      marginLeft: "10px"
      }}
    >

    <Box 
    sx={{ 
      p: 0.5,
      width: "95%", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center",
      height: "fit-content",
      borderRadius: 16,
      backgroundColor: '#c1cede'

      }}
    >
      <LinearProgress
        variant="buffer"
        value={value}
        valueBuffer={buffer}
        sx={{
          height: 25,
          borderRadius: 16,
          margin: 0,
          "& .MuiBoxRoot": {
            height: 50,
          },
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#1976D2", // Value bar color (Primary)
          },
          "& .MuiLinearProgress-bar1": {
            backgroundColor: "red", // Value bar color (Primary)
            borderRadius: 16,
          },
          "& .MuiLinearProgress-dashed": {
            backgroundColor: "#edf1f5", // Dashed buffer color (Red)
          },
          "& .MuiLinearProgress-bar2Buffer": {
            backgroundColor: "#c1cede", // Buffer bar color (Amber)
          },
        }}
      />
    </Box>

    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%"}}>
        <Box sx={{ width: `15%`, marginLeft: "2%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography fontSize={15} fontWeight="bold">|</Typography>
          <Typography fontSize={12} fontWeight="bold">0 kW</Typography>
          <Typography fontSize={12} fontWeight="medium" color="gray">Inattività</Typography>
        </Box>
        <Box sx={{ width: `${value/100}%`, display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography fontSize={15} fontWeight="bold">|</Typography>
          <Typography fontSize={12} fontWeight="bold">2.5 kW</Typography>
          <Typography fontSize={12} fontWeight="medium" color="gray">Limite di utilizzo</Typography>
        </Box>
        <Box sx={{ width: `${buffer/100}%`, marginRight: "18%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography fontSize={15} fontWeight="bold">|</Typography>
          <Typography fontSize={12} fontWeight="bold" width="full">3 kW</Typography>
          <Typography fontSize={12} fontWeight="medium" color="gray">Soglia massima</Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default CustomLinearProgress;

