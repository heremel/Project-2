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
  currencies: object,
  capital: string[],
  region: string,
  subregion: string,
  languages: object,
  latlng: [number, number],
  flag: string,
  maps: {
    googleMaps: string,
    openStreetMaps: string
  },
  population: number,
  gini: number,
  flags: {
    png: string,
    svg: string,
    alt: string
  },
  coatOfArms: {
    png: string,
    svg: string
  },
  capitalInfo: {
    latlng: [number, number]
  },
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
