import ListOfItems from "./ListOfItems"
import FilterPage from "./FilterPage";
import About from "./About";
import DetailledItem from "./DetailledItem";
import { useState } from "react";
import { Countries } from "../App";
import { Weathers } from "../App";

interface MainProps {

}





function MainArea() {

    return (
        <>
            {/* <ListOfItems countries={countries} weathers={weathers} /> 
            <FilterPage />  */}
            <About />
            {/* <DetailledItem /> */}

        </>
    )
}

export default MainArea