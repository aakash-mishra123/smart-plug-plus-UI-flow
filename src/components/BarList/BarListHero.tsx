import { quarterUsageData } from "@/app/types/dailyUsageTypes";
import { TbBolt } from "react-icons/tb";
import { Chip, LinearProgress } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Card } from "@tremor/react";
import { convertToItalicNumber } from "@/utils/methods";

interface BarListHeroProps {
  data: quarterUsageData | undefined;
}

const BarListHero = ({ data }: BarListHeroProps) => {
  const total =
    data?.data?.reduce((sum, item) => sum + (item?.usage ?? 0), 0) ?? 100;
  return (
    <div className="w-full mx-auto p-4 pt-2 bg-white montserrat-custom pb-12 mb-12">
      {/* Average Consumption Card */}
      <Card className="mt-3 p-4 flex justify-between !ring-transparent items-center bg-slate-200 rounded-lg">
        <span className="text-md text-black">Consumo orario</span>
        <span className="text-xl font-semibold">{`${convertToItalicNumber(
          total,
          100
        )} Wh`}</span>
      </Card>
      <div className="mt-4 space-y-4">
        {data?.data?.map((item, index) => (
          <div key={index} className="space-y-1">
            {/* Time & Consumption Value */}
            <div className="flex flex-row justify-between space-x-2 mb-2">
              <div className="flex gap-4 items-center">
                <span className="text-sm font-bold">{item?.timeString}</span>
                {item.peakValue && (
                  <Chip
                    icon={<TbBolt style={{ color: "red" }} />}
                    label="Superamento soglia"
                    variant="outlined"
                    sx={{
                      borderColor: "red",
                      color: "black",
                      backgroundColor: "#ffecec", // Light red background
                      fontWeight: 400,
                      borderRadius: "8px",
                      paddingX: "2px",
                      paddingY: "0px",
                      height: 24,
                    }}
                  />
                )}
              </div>

              <span className="text-sm font-semibold">{item?.value} kWh</span>
            </div>
            <LinearProgress
              variant="determinate"
              value={item?.usage || item?.value}
              sx={{
                height: 12,
                borderRadius: 16,
                backgroundColor: grey[300],
                "& .MuiBoxRoot": {
                  height: 20,
                  animation: "none",
                  backgroundColor: grey[500],
                },
                "& .MuiLinearProgress-bar": {
                  backgroundColor: grey[500], // Value bar color (Primary)
                  marginLeft: "4px",
                },
                "& .MuiLinearProgress-bar1": {
                  backgroundColor: "#c71c5d", // Value bar color (Primary)
                  borderRadius: 16,
                  position: "absolute",
                  left: "4lpx",
                  marginY: "4px",
                  transform: "translateX(-2%) !important",
                  maxWidth: "98%",
                  width: `${((item?.value ?? 0) / total) * 100}%`,
                  margin: "0px",
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarListHero;
