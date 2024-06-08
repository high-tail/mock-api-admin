import { useEffect, useState } from "react";
import client from "../api/client";
import { AxiosError } from "axios";

export interface EndPoint {
    path: string;
    methods: Array<string>;
}

export interface IResponse {
    data: Array<EndPoint>;
    error: AxiosError | null;
    loading: boolean;
}

export const useFetchEndpoints = (setRows: React.Dispatch<React.SetStateAction<EndPoint[]>>): IResponse => {
    const [res, setRes] = useState<IResponse>({
        data: [],
        error: null,
        loading: false,
    });

    useEffect(() => {
        fetchRequest();
    }, []);

    const fetchRequest = () => {
        setRes((prevState) => ({ ...prevState, loading: true }));
        client.get<Array<EndPoint>>("/api/v1/endpoints").then((response) => {
            const endpoints = response.data.filter(row => !row.path.startsWith("/api/v1"));
            setRes({ data: endpoints, error: null, loading: false });
            setRows(endpoints);
        }).catch((error: AxiosError) => {
            setRes({ data: [], error: error, loading: false });
        });
    }

    return res;
}