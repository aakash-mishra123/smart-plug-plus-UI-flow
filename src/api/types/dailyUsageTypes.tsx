import { EnergyDataProp } from "@/utils/types";

export type FetchQuarterlyUsageDataProps = {
  slug?: string;
  options?: object;
};

export type QuarterlyAPIResponseType = {
  data?: EnergyDataProp[];
};

export type dataItem = {
  date?: string;
  usage?: number;
  value?: number;
  name?: string;
  peakValue?: boolean;
  from?: string;
  to?: string;
  formattedTimeStamp: string;
  timeString?: string;
};

export type quarterUsageData = {
  date?: string;
  usage?: number | string;
  value?: number | string;
  name?: number;
  timestamp?: string;
  data?: dataItem[];
};

export type ResultDataType = {
  data: quarterUsageData[];
  error: string | null;
  loading: boolean;
  refetch?: (params: FetchQuarterlyUsageDataProps) => void;
};
