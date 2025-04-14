"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Card, Text, Title, Flex } from "@tremor/react/dist";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import MeterIcon from "../../../public/assets/meter_Icon.png";
import { TbCircleFilled } from "react-icons/tb";
import { RootState } from "@/app/redux";

const InfoCard = () => {
  const serialId = useSelector(
    (store: RootState) => store.deviceData.data.serial
  );
  const status = useSelector(
    (store: RootState) => store.deviceData.data.online
  );
  return (
    <>
      <div className="bg-[#C81D5E] h-fit p-4 min-w-[100vw] ring-none dark:ring-none">
        <Card className="bg-white rounded-[4px] p-4 font-roobert !ring-0 !dark:ring-0">
          <Title className="text-lg text-black font-medium mb-2">
            La mia Presa Plus
          </Title>

          <div className="flex flex-row gap-4 font-roobert">
            <Image src={MeterIcon} className="w-20 h-24" alt="meter_icon" />
            <div className="flex flex-col gap-0">
              <Flex justifyContent="start" alignItems="center" className="mt-2">
                <PowerOutlinedIcon
                  className="font-thin text-black"
                  style={{ fontSize: "16px" }}
                />
                <div className="text-sm flex flex-col ml-2">
                  <p className="text-[#667790] font-roboto text-base ">
                    Numero seriale
                  </p>
                  <Text className="text-md font-thin font-roboto ">{`${
                    serialId ?? ""
                  }`}</Text>
                </div>
              </Flex>

              <Flex
                justifyContent="start"
                alignItems="center"
                className="mt-2 gap-1 ml-1"
              >
                {status ? (
                  <TbCircleFilled className="text-blue-600 rounded-full w-3 h-3" />
                ) : (
                  <TbCircleFilled className="text-red-800 rounded-full w-3 h-3" />
                )}
                <div className="flex flex-col gap-1 text-xs ml-1">
                  <p className="text-[#667790] font-roboto text-base">
                    Stato connessione
                  </p>
                  <p
                    className={` font-thin text-md text-black font-roboto -mt-1`}
                  >
                    {status ? "Connessa" : "Non-connessa"}
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
