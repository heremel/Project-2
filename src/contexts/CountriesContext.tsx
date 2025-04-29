import { createContext, ReactNode, useContext, useState } from "react";
import { countries } from ".././databases/countries";
import { weathers } from ".././databases/weather";
import { Filters, Countries, Weathers, FavoriteListInterface } from "../interfaces/allInterfaces";



interface MyContextProps { children: ReactNode; }

interface CountryContextType {
    filters: Filters;
    countries: Countries;
    weathers: Weathers;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
    favoriteList: FavoriteListInterface
    setFavoriteList: React.Dispatch<React.SetStateAction<FavoriteListInterface>>
}

const CountriesContext = createContext<CountryContextType | null>(null);

export function CountriesProvider({
    children,
}: MyContextProps) {

    const defaultFilters: Filters = {
        region: "none",
        subregion: "none",
        languages: [],
        meantempmin: -99,
        meantempmax: 99,
        landlockedshown: true,
        search: ""
    }
    const [filters, setFilters] = useState(defaultFilters)

    const favoriteListDefault: FavoriteListInterface =
    {
        memories: [],
        dreams: []
    }

    const [favoriteList, setFavoriteList] = useState<FavoriteListInterface>(favoriteListDefault) //par défaut j'ai des listes vides que je vais remplir qui vont s'appeler comme ça

    return (
        <CountriesContext.Provider value={{ filters: filters, countries: countries, weathers: weathers, setFilters: setFilters, favoriteList: favoriteList, setFavoriteList: setFavoriteList }}>
            {children}
        </CountriesContext.Provider>

    );
}

export const useCountries = () => {
    const value = useContext(CountriesContext)
    if (value === null) { throw new Error("Issue with context, no provider") }
    return value
}