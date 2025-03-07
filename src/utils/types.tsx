export type ProgressBarProps = {
    current: number | undefined;
    limit: number | undefined;
    max: number | undefined;
};

export type PowerUsageProps = {
    powerUsage: number | undefined,
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
    date: string;
    powerUsage: number;
    maxPower: number;
    limitPower: number;
    totalConsumption: number;
    averageConsumption: number;
    peakConsumption: number;
    peakTime: string;
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
