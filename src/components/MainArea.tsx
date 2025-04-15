import ListOfItems from "./ListOfItems"
import FilterPage from "./FilterPage";
import About from "./About";
import DetailledItem from "./DetailledItem";
import { useState } from "react";
import { Countries, Filters, MainType } from "../App";
import { Weathers } from "../App";

interface MainProps {
    mainContent: MainType;
    countries: Countries;
    weathers: Weathers;
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    setMainContent: React.Dispatch<React.SetStateAction<MainType>>;
}





function MainArea({ mainContent, countries, weathers, filters, setFilters, setMainContent }: MainProps) {

    switch (mainContent) {
        case "ListOfItems": return <ListOfItems countries={countries} weathers={weathers} setMainContent={setMainContent} />;
        case "FilterPage": return <FilterPage filters={filters} setFilters={setFilters} setMainContent={setMainContent} />;
        case "About": return <About />;
        case "DetailledItem": return <DetailledItem setMainContent={setMainContent} />;
        case "MyItems": return <ListOfItems countries={countries} weathers={weathers} setMainContent={setMainContent} />;
    }


}

export default MainArea