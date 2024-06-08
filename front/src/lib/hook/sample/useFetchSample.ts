import { useEffect, useState } from "react";
import client from "../../api/client";
import { AxiosError } from "axios";

export interface Sample1 {
    id?: string;
    data?: string;
}

export interface Sample2 {
    id?: string;
    data?: string;
}

export interface IResponse1 {
    data: Sample1 | null;
    error: AxiosError | null;
    loading: boolean;
}

export interface IResponse2 {
    data: Sample2 | null;
    error: AxiosError | null;
    loading: boolean;
}

export const useFetchSample1 = (setSample1: React.Dispatch<React.SetStateAction<Sample1 | undefined>>): IResponse1 => {
    const [res, setRes] = useState<IResponse1>({
        data: null,
        error: null,
        loading: false,
    });

    useEffect(() => {
        fetchRequest();
    }, []);

    const fetchRequest = () => {
        setRes((prevState) => ({ ...prevState, loading: true }));
        client.post<Sample1>("/sample1").then((response) => {
            setRes({ data: response.data, error: null, loading: false });
            setSample1(response.data);
        }).catch((error: AxiosError) => {
            setRes({ data: null, error: error, loading: false });
        });
    }

    return res;
}

export const useFetchSample2 = (setSample2: React.Dispatch<React.SetStateAction<Sample2 | undefined>>): IResponse2 => {
    const [res, setRes] = useState<IResponse2>({
        data: null,
        error: null,
        loading: false,
    });

    useEffect(() => {
        fetchRequest();
    }, []);

    const fetchRequest = () => {
        setRes((prevState) => ({ ...prevState, loading: true }));
        client.post<Sample2>("/sample2").then((response) => {
            setRes({ data: response.data, error: null, loading: false });
            setSample2(response.data);
        }).catch((error: AxiosError) => {
            setRes({ data: null, error: error, loading: false });
        });
    }

    return res;
}