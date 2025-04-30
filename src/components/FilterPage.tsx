import FilterLandLocked from "./FilterLandlocked"
import FilterRegion from "./FilterRegion"
import FilterLanguages from "./FilterLanguages"
import FilterSubregion from "./FilterSubregion"
import FilterTemperature from "./FilterTemperature"
import { useCountries } from "../contexts/CountriesContext";


import style from ".././assets/styles/FilterPage.module.css"
import FilterFavorite from "./FilterFavorite"

function FilterPage() {

    const { currentList } = useCountries();

    return <div className={style.filterPageContainer}>
        <FilterLandLocked />
        <FilterRegion />
        <FilterSubregion />
        <FilterLanguages />
        <FilterTemperature />
        {/* {currentList==="favorite"&&<FilterFavorite  />} */}
    </div>
}

export default FilterPage