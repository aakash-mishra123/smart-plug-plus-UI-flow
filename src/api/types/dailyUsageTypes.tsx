import { EnergyDataProp } from "@/utils/types"

export type FetchQuarterlyUsageDataProps = {
  slug?: string,
  options?: object,
}

export type QuarterlyAPIResponseType = {
  data?: EnergyDataProp[]
}

type dataItem = {
  date ?: string,
  usage ?: number,
}

export type quarterUsageData = {
  date?: string;
  usage ?: string;
  data: dataItem[];
}

export type ResultDataType = {
  data: quarterUsageData[];
  error: string | null;
  loading: boolean;
  refetch ?: (params: FetchQuarterlyUsageDataProps) => void;
}