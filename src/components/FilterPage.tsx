import FilterLandLocked from "./FilterLandlocked"
import FilterLanguages from "./FilterLanguages"
import FilterRegion from "./FilterRegion"
import FilterSubregion from "./FilterSubregion"
import FilterTemperature from "./FilterTemperature"

import style from "./componentsstyles/FilterPage.module.css"

function FilterPage() {

    return <div className={style.filterPageContainer}>
        <FilterLandLocked />
        <FilterRegion />
        {/*<FilterSubregion />
        <FilterLanguages  />
        <FilterTemperature  /> */}
    </div>
}

export default FilterPage