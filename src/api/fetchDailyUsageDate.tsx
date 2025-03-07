import axios from "axios";
import { useState, useCallback, useEffect } from "react";

const BASE_URL = 'https://y7u224bky4.execute-api.eu-west-1.amazonaws.com/uat';
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

type fetchDailyUsageDataProps = {
    slug: string,
    options: object,
}


const useFetchDailyUsageData = ({ slug, options = {} }: fetchDailyUsageDataProps) => {
    const url = `${BASE_URL}/${slug}`;

    console.log('req url', url);
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(() => true);
        setError(null);

        try {
            const response = await axios.get(url, {
                params: options, //Filter object
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`
                }
            });
            setData(response.data);
            //openSocket(process.env.REACT_APP_BASE_URL);
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

export default useFetchDailyUsageData;
