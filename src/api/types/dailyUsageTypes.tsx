import { EnergyDataProp } from "@/utils/types";

export type FetchQuarterlyUsageDataProps = {
  slug?: string;
  options?: object;
};

export type QuarterlyAPIResponseType = {
  date: string;
  totalEnergyConsumed?: number;
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
  timeString?: string;
};

export type quarterUsageData = {
  date?: string;
  usage?: number | string;
  value?: number | string;
  timestamp?: string;
  timestring?: string;
  data?: dataItem[];
};

export type totalDailyUsageType = {
  date: string;
  totalEnergyConsumed: number | undefined;
  averageConsumption: number | undefined;
  peakConsumption: { value: number; timeString: string };
  data: quarterUsageData[];
};
export type ResultDataType = {
  data: totalDailyUsageType;
  error: string | null;
  loading: boolean;
  refetch?: (params: FetchQuarterlyUsageDataProps) => void;
};
