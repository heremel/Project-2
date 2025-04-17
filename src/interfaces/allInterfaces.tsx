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

export interface Meal {
    strMeal: string;
    strMealThumb: string;
}

export type Meals = Meal[];

export interface WeatherResult {
    countryLat: number;
    countryLong: number;
    meanTemp: number;
    minTemp: number;
    maxTemp: number;
    currentTemperature?: number;
    elevation: number;
}