import FilterLandLocked from "./FilterLandlocked"
import FilterRegion from "./FilterRegion"
import FilterLanguages from "./FilterLanguages"
import FilterSubregion from "./FilterSubregion"
import FilterTemperature from "./FilterTemperature"


import style from ".././assets/styles/FilterPage.module.css"

function FilterPage() {

    return <div className={style.filterPageContainer}>
        <FilterLandLocked />
        <FilterRegion />
        <FilterSubregion />
        <FilterLanguages />
        {/* <FilterTemperature  /> */}
    </div>
}

export default FilterPage