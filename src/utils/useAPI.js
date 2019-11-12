import {useState, useEffect} from "react";

export function useAPI(method, ...params) {


    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const fetchData = async () => {
        setError(undefined);
        try {
            setIsLoading(true);
            setData(await method(...params));
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    return [data, isLoading, error, fetchData];
}