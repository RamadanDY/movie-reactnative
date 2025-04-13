 import { useState } from "react";
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data,setdata] = useState<T | null>(null);
    const [loading,setloading] = useState(false);
    const [error,setError] = useState<string | null>(null);



    const fetchData = async () => {
        try {

        } catch(err) {
            setError(err instanceof Error ? err : new Error("An Error occured"));
        } finally {
            setloading(false)
        }

    }
}