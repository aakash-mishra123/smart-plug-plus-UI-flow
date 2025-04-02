"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Card, Text, Title, Flex } from "@tremor/react/dist";
import { CiPlug1 } from "react-icons/ci";
import MeterIcon from "../../../public/assets/meter_Icon.png";
import { TbCircleFilled } from "react-icons/tb";
import { useEffect } from "react";
import { fetchDeviceData } from "@/app/store/slice/deviceSlice";
import { AppDispatch, RootState } from "@/app/store";

const InfoCard = () => {
  const deviceData = useSelector((store: RootState) => store.deviceData.data);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (fetchDeviceData) {
      dispatch(fetchDeviceData());
    }
  }, [dispatch]);

  return (
    <>
      <div className="bg-[#C81D5E] h-fit p-4 min-w-[100vw]">
        <Card className="bg-white rounded-md p-4 font-roboto">
          <Title className="text-lg text-black font-medium mb-2">
            La mia presa plus
          </Title>

          <div className="flex flex-row gap-4">
            <Image src={MeterIcon} className="w-20 h-24" alt="meter_icon" />
            <div className="flex flex-col gap-0 text-black">
              <Flex justifyContent="start" alignItems="center" className="mt-2">
                <CiPlug1 className="font-bold text-xl text-green-800" />
                <div className="text-xs flex flex-col ml-2">
                  <Text className="text-gray-500 text-md font-regular font-roboto">
                    Numero seriale
                  </Text>
                  <Text className="font-medium">{`${
                    deviceData?.serial ?? "abcdefg"
                  }`}</Text>
                </div>
              </Flex>

              <Flex
                justifyContent="start"
                alignItems="center"
                className="mt-2 gap-1"
              >
                {deviceData?.online ? (
                  <TbCircleFilled className="text-blue-600 rounded-full w-3 h-3" />
                ) : (
                  <TbCircleFilled className="text-red-800 rounded-full w-3 h-3" />
                )}
                <div className="flex flex-col ml-2">
                  <Text className="text-gray-500 font-regular text-xs">
                    Stato connessione
                  </Text>
                  <div className="flex flex-col gap-0">
                    <Text className={` text-sm text-black `}>
                      {deviceData?.online ? "Connessa" : "Non-connessa"}
                    </Text>
                  </div>
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
