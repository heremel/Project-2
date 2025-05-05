import { useCountries } from "../contexts/CountriesContext";
import type { Regions  } from "../interfaces/allInterfaces";
import style from ".././assets/styles/FilterRegion.module.css"

function FilterRegion() {
    const { filters, setFilters, favoriteList, setFavoriteList, currentList } = useCountries();

    function handleChangeRegion(string: Regions) {
        if (currentList==="search") {setFilters((prev) => ({ ...prev, region: string }))}
        if (currentList==="favorite") { setFavoriteList((prev) => ({ ...prev, region: string }))}
    }

    const regionArray: Regions[] = ["none", "Africa", "Americas", "Asia", "Europe",  "Oceania"]

    return (<fieldset>
        <legend>Continents</legend>
    <div className={style.regionContainer}>
        {regionArray.map((region) => (
            <div className={style.inLine} key={region}>
                <input type="radio" id={region} name={region} checked={currentList==="search"?(filters.region === region):(favoriteList.region === region)} onChange={() => handleChangeRegion(region)} />
                <label htmlFor={region}> {region} </label>
            </div>
        ))}


    </div>
    </fieldset>)
}

export default FilterRegion