import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { FetchQuarterlyUsageDataProps, QuarterlyAPIResponseType, quarterUsageData, ResultDataType } from "./types/dailyUsageTypes";
import { EnergyDataProp } from "@/utils/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;
const QUARTER_USAGE_URL = "v1/energy/quarter";

/**
 * Fetches power usage data by 15 minute intervals based on the provided slug and options.
 *
 * @param {Object} props - The function parameters.
 * @param {string} props.slug - The unique identifier for fetching usage data.
 * @param {Object} [props.options={}] - Optional parameters for the API request.
 * @returns {Promise<UsageData[]>} A promise that resolves to an array of usage data objects.
 */

const FetchUsageByIntervals = ({ slug, options = {} }: FetchQuarterlyUsageDataProps) => {
    const [data, setData] = useState<QuarterlyAPIResponseType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    const fetchData = useCallback(async ({ slug, options = {} }: FetchQuarterlyUsageDataProps) => {
        const url = `${BASE_URL}/${QUARTER_USAGE_URL}?${slug}`;
        setLoading(() => true);
        setError(null);

        try {
            const response = await axios.get(url, {
                params: options, 
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`
                }
            });
            setData(response.data);
        } catch (err) {
            if (err instanceof Error)
                setError(err.message);
        }
        setLoading(() => false);
    }, []);



    useEffect(() => {
        if(fetchData) fetchData({
            slug: slug,
            options: options
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])

    return { data, error, loading, refetch: fetchData };
}


const FormatDailyUsageData = ({ slug, options = {} }: FetchQuarterlyUsageDataProps) : ResultDataType => {
        const { data, error, loading, refetch } = FetchUsageByIntervals({
            slug,
            options,
        });

        if (!data || !data?.data) {

        return { data: [], error: error || null, loading };
    }

        function divideIntoFourGroups(data: { date: string; usage: number }[]) {
            const groupedData = [];
    
            for (let i = 0; i < 24; i++) {
                const chunk = data.slice(i * 4, i * 4 + 4); // Get 4 elements per group
    
                if (chunk.length === 4) {
                    const averageUsage = chunk.reduce((sum, item) => sum + item.usage, 0) / 4; // Calculate average
    
                    groupedData.push({
                        date: String(i + 1), // Group number (1-24)
                        usage: (averageUsage/4).toFixed(2), // Rounded to 2 decimals
                        data: chunk, // The 4 objects in this group
                    });
                }
            }
    
            return groupedData;
        }
        const chartData = data?.data.map((item: EnergyDataProp) => ({
            date: item.formattedDate,
            usage: item.currQuartActEnergy || 0, // Ensure usage is a valid number
        }));
    
        const dividedData : quarterUsageData[] = divideIntoFourGroups(chartData);
        return { data: dividedData, error : error || null, loading, refetch }
    
}



export default FormatDailyUsageData;
