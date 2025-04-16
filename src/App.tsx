import './App.css'
import MainArea from './components/MainArea';
import FiltersTab from './components/FiltersTab';
import NavBar from './components/NavBar';
import { countries } from './databases/countries';
import { weathers } from './databases/weather';
import { useState } from 'react';

//INTERFACES ET TYPES
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
export type MainType = "ListOfItems" | "FilterPage" | "About" | "DetailledItem" | "MyItems"


//FUNCTION APP
function App() {

  //Gère les filtres en cours
  const defaultFilters: Filters = {
    region: "none",
    subregion: "none",
    languages: ["none"],
    meantempmin: -99,
    meantempmax: 99,
    landlockedshown: true
  }
  const [filters, setFilters] = useState(defaultFilters)

  //Gère quel contenu afficher dans la page (main area)
  const [mainContent, setMainContent] = useState<MainType>("About")

  return (
    <>
      <FiltersTab filters={filters} setFilters={setFilters} setMainContent={setMainContent} />
      <MainArea countries={countries} weathers={weathers} setMainContent={setMainContent} mainContent={mainContent} filters={filters} setFilters={setFilters} />
      <NavBar setMainContent={setMainContent} mainContent={mainContent} />
    </>
  )
}

export default App;
