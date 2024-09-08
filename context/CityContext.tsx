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

export const CityContext = createContext<CityContextType>({
    cities: null,
    loading: true,
    error: false,
});
 
const CityProvider = ({ children }: CityProviderProps) => {
    const [cities, setCities] = useState<City[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        try {
            if (data?.data?.[0].cities) {
                setCities(data.data[0].cities as City[]);
            } else {
                throw new Error("Cities data is unavailanble");
            }
            setLoading(false)
        } catch (err) {
            console.error("Error loading cities", err);
            setError(true);
            setLoading(false);
        }
    }, []);
    
    return (
        <CityContext.Provider value={{ cities: cities, loading: loading, error: error }}>
            {children}
        </CityContext.Provider>
    );
};

export default CityProvider;
