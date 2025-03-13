export type ProgressBarProps = {
    current: number | undefined;
    limit: number | undefined;
    max: number | undefined;
};

export type PowerUsageProps = {
    powerUsage: number,
    maxPower: number | undefined,
    limitPower: number | undefined,
}

export type CustomTooltipProps = {
    active?: boolean | undefined,
    payload?: {
        item?: {
            datakey?: string | undefined,
        },
        index?: number,
    },
    label?: number,
}


interface PowerData {
    date?: string;
    powerUsage?: number;
    maxPower?: number;
    limitPower?: number;
    dailyConsumption?: number;
    totalConsumption?: number;
    averageConsumption?: number;
    peakConsumption?: number;
    peakTime?: string;
}

interface QuarterlyData {
    time: string;
    value: number;
}

interface DetailedConsumption {
    timeRange: string;
    average: number;
    quarterlyData: QuarterlyData[];
}

export interface PowerUsageRecord {
    id: number;
    data: PowerData;
    detailedConsumption: DetailedConsumption;
}

export interface AlertDataType {
    type?: "success" | "error" | "warning" | "info"; // Extend if needed
    message?: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    subMessage?: string;
}
export interface DrawerModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    data?: PowerUsageProps;
    className?: string;
}
