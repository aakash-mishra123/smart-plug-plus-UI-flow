import { EnergyDataProp } from "@/utils/types"

export type FetchQuarterlyUsageDataProps = {
  slug?: string,
  options?: object,
}

export type QuarterlyAPIResponseType = {
  data?: EnergyDataProp[]
}

export type dataItem = {
  date ?: string,
  usage ?: number,
  formattedTimeStamp ?: string,
  value ?: number;
  name ?: string;
  peakValue ?: boolean
}

export type quarterUsageData = {
  date?: string;
  usage ?: number;
  value ?: number;
  name ?: number;
  from ?: string;
  to ?: string;
  timestamp ?: string;
  data?: dataItem[];
}

export type ResultDataType = {
  data: quarterUsageData[];
  error: string | null;
  loading: boolean;
  refetch ?: (params: FetchQuarterlyUsageDataProps) => void;
}