import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import { useCallback, useState } from "react";
// import { DeviceStatusResponseType } from "./types/deviceStatusTypes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const STATUS_SLUG = "v1/energy/chain-to-gate";
const AUTH_TOKEN = process.env.NEXT_PUBLIC_DEVICE_AUTH_TOKEN;

const FetchDeviceData = async () => {
  const url = `${BASE_URL}/${STATUS_SLUG}`;

  // const [data, setData] = useState<DeviceStatusResponseType | null>(null);

  try {
    const { data } = await axios.get(url, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      return;
    }
  }
};

const FormatDeviceStatusData = (interval: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["apiData"],
    queryFn: FetchDeviceData,
    refetchInterval: interval,
  });

  return { data, isLoading };
};

export default FormatDeviceStatusData;
