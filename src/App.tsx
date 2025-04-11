import './App.css'
import ListOfItems from './components/ListOfItems';
import PopUp from './components/PopUp';
import { countries } from './databases/countries';
import { weathers } from './databases/weather';

export interface Country {
  name: {
    common: string,
    official: string,
  },
  currencies?: object,
  capital: string[],
  region: string,
  subregion: string,
  languages?: object,
  latlng: [number, number],
  demonyms: {
    eng: {
      masc: string
    }
  }
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

function App() {

  return (
    <>
      <ListOfItems />
      <PopUp />
    </>
  )
}

export default App;
