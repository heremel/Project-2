import { createContext, ReactNode, useContext, useState } from "react";
import { countries } from ".././databases/countries";
import { weathers } from ".././databases/weather";


//INTERFACES ET TYPES
export interface Country {
    name: {
        common: string;
        official: string;
    };
    currencies: string;
    capital: string[];
    region: string;
    subregion: string;
    languages: string[];
    landlocked: boolean; // le pays est-il sans accès à la mer
    latlng: [number, number];
    demonyms: {
        // va servir pour les plats
        eng: {
            fem?: string;
            masc: string;
        };
        fra?: {
            fem: string;
            masc: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    gini: number;
    flags: {
        png?: string;
        svg?: string;
        alt?: string;
    };
    coatOfArms: {
        png?: string;
        svg?: string;
    };
    capitalInfo: {
        latlng: [number, number];
    };
}

export type Countries = Country[];

export interface Weather {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    location_id: number;
    daily_units: {
        time: string;
        temperature_2m_mean: string; // C°
        temperature_2m_max: string;
        temperature_2m_min: string;
        rain_sum: string; //"mm",
        snowfall_sum: string; //"cm",
        precipitation_hours: string;
    };
    daily: {
        time: string[];
        temperature_2m_mean: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        rain_sum: number[];
        snowfall_sum: number[];
        precipitation_hours: number[];
    };
}

export type Weathers = Weather[];

export type Regions = "none" | "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";

export interface Filters {
    region: Regions;
    subregion: string;
    languages: string[];
    meantempmin: number;
    meantempmax: number;
    landlockedshown: boolean
}
interface MyContextProps { children: ReactNode; }

interface CountryContextType{
    filters:Filters;
    countries: Countries;
    weathers: Weathers;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

const CountriesContext = createContext<CountryContextType|null>(null);

export function CountriesProvider({
    children,
}:MyContextProps) {

    const defaultFilters: Filters = {
        region: "none",
        subregion: "none",
        languages: ["none"],
        meantempmin: -99,
        meantempmax: 99,
        landlockedshown: true
    }
    const [filters, setFilters] = useState(defaultFilters)



    return (
        <CountriesContext.Provider value={{ filters: filters, countries: countries, weathers: weathers, setFilters: setFilters }}>
            {children}
        </CountriesContext.Provider>

    );
}

export const useCountries = () => {
    const value = useContext(CountriesContext)
    if (value === null) { throw new Error("Issue with context, no provider") }
    return value
}