import ListOfItems from "./ListOfItems"
import FilterPage from "./FilterPage";
import About from "./About";
import DetailledItem from "./DetailledItem";
import { useState } from "react";
import { Countries } from "../App";
import { Weathers } from "../App";


interface MainProps {

}

function MainArea({currentPage,countries, weathers}: MainProps) {
    // const [currentPage, setCurrentPage] = useState('home'); // 'home', 'about', 'filters', 'detailledItem'
    // const [countries, setCountries] = useState<Countries>([]);
    // const [weathers, setWeathers] = useState<Weathers>([]);
    return (
        <>
            {currentPage === 'list' && <ListOfItems countries={countries} weathers={weathers} /> }
            {currentPage === 'filter' && <FilterPage /> }
            {currentPage === 'about' && <About />}
            {currentPage === 'details' && /* <DetailledItem /> */}

        </>
    )
}

export default MainArea


