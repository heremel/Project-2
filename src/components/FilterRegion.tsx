import { Regions, useCountries } from "../contexts/CountriesContext";
import style from ".././assets/styles/FilterRegion.module.css"

function FilterRegion() {
    const { filters, setFilters } = useCountries();

    function handleChangeRegion(string: Regions) {
        setFilters((prev) => ({ ...prev, region: string }))
    }

    const regionArray: Regions[] = ["none", "Europe", "Africa", "Americas", "Asia", "Oceania"]

    return (<div className={style.regionContainer}>
        {regionArray.map((region) => (
            <div key={region}>
                <input type="radio" id={region} name={region} checked={filters.region === region} onChange={() => handleChangeRegion(region)} />
                <label htmlFor={region}> {region} </label>
            </div>
        ))}


    </div>)
}

export default FilterRegion