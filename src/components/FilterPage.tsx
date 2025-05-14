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
        <div className={style.checkBoxes}>
        {currentList === "favorite" && <FilterFavorite />}
        <FilterLandLocked />
        </div>
        <FilterRegion />
        <FilterSubregion />
        <FilterLanguages />
        <FilterTemperature />
        
    </div>
}

export default FilterPage