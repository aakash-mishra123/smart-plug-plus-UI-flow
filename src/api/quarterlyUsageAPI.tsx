import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { FetchQuarterlyUsageDataProps } from "./types/dailyUsageTypes";

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
    const url = `${BASE_URL}/${QUARTER_USAGE_URL}/${slug}`;

    console.log('req url', url);
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
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
                console.log("FETCH DATA ERROR ");
        }
        setLoading(() => false);
    }, [url, options]);

    useEffect(() => {
        if(fetchData) fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])

    return { data, error, loading, refetch: fetchData };
}

export default FetchUsageByIntervals;
