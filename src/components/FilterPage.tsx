import { Filters, Regions } from "../App"
import FilterLandLocked from "./FilterLandlocked"
import FilterLanguages from "./FilterLanguages"
import FilterRegion from "./FilterRegion"
import FilterSubregion from "./FilterSubregion"
import FilterTemperature from "./FilterTemperature"
import { useContext } from 'react';
import CountriesContext from "../contexts/CountriesContext";
import style from "./componentsstyles/FilterPage.module.css"






// export interface FilterPageProps {
//     filters: Filters
//     setFilters: React.Dispatch<React.SetStateAction<Filters>>
// }





function FilterPage() {


    return <div className={style.filterPageContainer}>
        <FilterLandLocked />
        <FilterRegion />
        {/*<FilterSubregion filters={filters} setFilters={setFilters} />
        <FilterLanguages filters={filters} setFilters={setFilters} />
        <FilterTemperature filters={filters} setFilters={setFilters} /> */}


    </div>
}

export default FilterPage