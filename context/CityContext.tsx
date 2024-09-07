"use client";
import { createContext, useEffect, useState, ReactNode } from "react";
import data from '@/public/data/data.json';
import { City } from "@/types/CityTypes";

interface CityContextType {
    cities: City[] | null;
    loading: boolean;
    error?: boolean;
}

interface CityProviderProps {
    children: ReactNode;
}

export const CityContext = createContext<CityContextType | undefined>(undefined);
 
const CityProvider = ({ children }: CityProviderProps) => {  // children parametresi eklendi
    const [cities, setCities] = useState<City[] | null>(null);;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            setCities(data.data[0].cities as City[]);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }, []);

    console.log(cities);

    return (
        <CityContext.Provider value={{ cities: cities, loading: loading, error: error }}>
            {children}
        </CityContext.Provider>
    );
};

export default CityProvider;
