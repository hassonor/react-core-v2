import { useState, useEffect, useCallback } from 'react';

// Define a generic type for the setError function
type ErrorType = Error | null;

// Generic custom hook for fetching data
export function useFetch<T>(fetchFn: () => Promise<T>, initialValue: T) {
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [error, setError] = useState<ErrorType>(null);
    const [fetchedData, setFetchedData] = useState<T>(initialValue);

    const memoizedFetchFn = useCallback(fetchFn, [fetchFn]);

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            setIsFetching(true);
            try {
                const data = await memoizedFetchFn();
                if (!didCancel) {
                    setFetchedData(data);
                }
            } catch (error: any) {
                if (!didCancel) {
                    setError(new Error(error.message || 'Failed to fetch data.'));
                }
            } finally {
                if (!didCancel) {
                    setIsFetching(false);
                }
            }
        };

        fetchData();

        return () => {
            didCancel = true;
        };
    }, [memoizedFetchFn]);

    return {isFetching, fetchedData, setFetchedData, error};
}
