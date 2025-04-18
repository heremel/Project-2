import { createContext, ReactNode, useContext, useState } from "react";
import { countries } from ".././databases/countries";
import { weathers } from ".././databases/weather";
import { Filters, Countries, Weathers  } from "../interfaces/allInterfaces";



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