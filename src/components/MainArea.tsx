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
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
}





function MainArea({ mainContent, countries, weathers, filters, setFilters }: MainProps) {

    switch (mainContent) {
        case "ListOfItems": return <ListOfItems countries={countries} weathers={weathers} />;
        case "FilterPage": return <FilterPage filters={filters} setFilters={setFilters} />;
        case "About": return <About />;
        case "DetailledItem": return <DetailledItem />;
        case "MyItems": return <ListOfItems countries={countries} weathers={weathers} />;
    }


}

export default MainArea