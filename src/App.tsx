import "./App.css";
//import ListOfItems from './components/ListOfItems';
import NavBar from "./components/NavBar";
// import { countries } from "./databases/countries";
// import { weathers } from "./databases/weather";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import {CountriesProvider} from "./contexts/CountriesContext";





//FUNCTION APP
function App() {
  return (
    <CountriesProvider  >
      <main>
        <Outlet />
      </main>
      <NavBar />
    </CountriesProvider>
  );

}

export default App;
