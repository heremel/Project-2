import './App.css'
//import ListOfItems from './components/ListOfItems';
import MainArea from './components/MainArea';
import Filters from './components/Filters';
import NavBar from './components/NavBar';
import { countries } from './databases/countries';
import { weathers } from './databases/weather';
import { useState } from 'react';

export interface Country {
  name: {
    common: string,
    official: string,
  },
  currencies: string,
  capital: string[],
  region: string,
  subregion: string,
  languages: string[],
  landlocked: boolean, // le pays est-il sans accès à la mer
  latlng: [number, number],
  demonyms: { // va servir pour les plats
    eng: {
      fem?: string,
      masc: string,
    },
    fra?: {
      fem: string,
      masc: string,
    }
  }
  flag: string,
  maps: {
    googleMaps: string,
    openStreetMaps: string
  },
  population: number,
  gini: number,
  flags: {
    png?: string,
    svg?: string,
    alt?: string
  },
  coatOfArms: {
    png?: string,
    svg?: string
  },
  capitalInfo: {
    latlng: [number, number]
  },
}

export type Countries = Country[]

export interface Weather {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  location_id: number,
  daily_units: {
    time: string,
    temperature_2m_mean: string,// C°
    temperature_2m_max: string,
    temperature_2m_min: string,
    rain_sum: string, //"mm",
    snowfall_sum: string, //"cm",
    precipitation_hours: string,
  },
  daily: {
    time: string[],
    temperature_2m_mean: number[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    rain_sum: number[],
    snowfall_sum: number[],
    precipitation_hours: number[],
  }
}

export interface Filters {
  region: "none" | "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
  subregion: string;
  languages: string[];
  meantempmin: number;
  meantempmax: number;
  landlockedshown: boolean
}

export type Weathers = Weather[]

function App() {
  const defaultFilters: Filters = {
    region: "none",
    subregion: "none",
    languages: ["none"],
    meantempmin: -99,
    meantempmax: 99,
    landlockedshown: true
  }
  const [filters, setFilters] = useState(defaultFilters)

  type MainType = "ListOfItems" | "FilterPage" | "About" | "DetailledItem"
  const [mainContent, setMainContent] = useState<MainType>("About")

  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />
      <MainArea countries={countries} weathers={weathers} mainContent={setMainContent} mainContent={mainContent} />
      <NavBar />
    </>
  )
}

export default App;
