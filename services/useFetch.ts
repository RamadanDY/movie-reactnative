 import { useState } from "react";
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data,setData] = useState<T | null>(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState<string | null>(null);



    const fetchData = async () => {
        try {
            setLoading(true)
            setError(null)
            const result = await fetchFunction()
            setData(result)

        } catch(err) {
            setError(err instanceof Error ? err.message : "An Error occurred");
        } finally {
            setLoading(false)
        }

    }
}