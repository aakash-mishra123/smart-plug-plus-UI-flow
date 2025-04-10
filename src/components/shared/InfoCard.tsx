"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Card, Text, Title, Flex } from "@tremor/react/dist";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import MeterIcon from "../../../public/assets/meter_Icon.png";
import { TbCircleFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { fetchDeviceData } from "@/app/store/slice/deviceSlice";
import { AppDispatch } from "@/app/store";
import { chain2gatedummy } from "@/utils/constants";

const InfoCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [deviceData, setDeviceData] = useState(chain2gatedummy);
  useEffect(() => {
    if (fetchDeviceData)
      dispatch(fetchDeviceData())
        .unwrap()
        .then((res) => setDeviceData(res))
        .catch((err) => {
          console.log("ERROR: FETCH DEVICE DATA", err);
        });
  }, [dispatch]);
  return (
    <>
      <div className="bg-[#C81D5E] h-fit p-4 min-w-[100vw]">
        <Card className="bg-white rounded-md p-4 font-roobert">
          <Title className="text-lg text-black font-medium mb-2">
            La mia Presa Plus
          </Title>

          <div className="flex flex-row gap-4 font-roobert">
            <Image src={MeterIcon} className="w-20 h-24" alt="meter_icon" />
            <div className="flex flex-col gap-0">
              <Flex justifyContent="start" alignItems="center" className="mt-2">
                <PowerOutlinedIcon className="font-thin text-sm text-black" />
                <div className="text-xs flex flex-col ml-2">
                  <p className="text-[#667790] font-roboto text-sm">
                    Numero seriale
                  </p>
                  <Text className="text-xs font-thin ">{`${
                    deviceData.serial ?? "abcdefg"
                  }`}</Text>
                </div>
              </Flex>

              <Flex
                justifyContent="start"
                alignItems="center"
                className="mt-2 gap-1 ml-2"
              >
                {deviceData.online ? (
                  <TbCircleFilled className="text-blue-600 rounded-full w-3 h-3" />
                ) : (
                  <TbCircleFilled className="text-red-800 rounded-full w-3 h-3" />
                )}
                <div className="flex flex-col gap-0 text-xs ml-2">
                  <p className="text-[#667790] font-roobert font-thin tracking-tighter">
                    Stato connessione
                  </p>
                  <p className={` text-xs text-black font-thin`}>
                    {deviceData.online ? "Connessa" : "Non-connessa"}
                  </p>
                </div>
              </Flex>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default InfoCard;
