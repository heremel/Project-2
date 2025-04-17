import ListOfItems from "./ListOfItems"
import FilterPage from "./FilterPage";
import About from "./About";
import DetailledItem from "./DetailledItem";
import { useEffect, useState } from "react";
import { Countries } from "../App";
import { Weathers } from "../App";


interface MainProps {

}

function MainArea() { 
     const [currentPage, setCurrentPage] = useState('about'); // 'about', 'filters', 'detailledItem'
    
    return (
        <>
    
            {/* <ListOfItems countries={countries} weathers={weathers} />
             <FilterPage /> */}
            <About />
            {/* <DetailledItem /> */}
        </>
    )
}

export default MainArea;


