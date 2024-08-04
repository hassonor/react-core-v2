import {useState, useEffect} from 'react';

interface FetchState<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
}

const useFetch = <T, >(url: string, extractData: (response: unknown) => T): FetchState<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(extractData(result));
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, extractData]);

    return {data, isLoading, error};
};

export default useFetch;
