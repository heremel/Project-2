import { useCountries } from "../contexts/CountriesContext";
import { Regions  } from "../interfaces/allInterfaces";
import style from ".././assets/styles/FilterRegion.module.css"

function FilterRegion() {
    const { filters, setFilters } = useCountries();

    function handleChangeRegion(string: Regions) {
        setFilters((prev) => ({ ...prev, region: string }))
    }

    const regionArray: Regions[] = ["none", "Africa", "Americas", "Asia", "Europe",  "Oceania"]

    return (<fieldset>
        <legend>Subregions</legend>
    <div className={style.regionContainer}>
        {regionArray.map((region) => (
            <div key={region}>
                <input type="radio" id={region} name={region} checked={filters.region === region} onChange={() => handleChangeRegion(region)} />
                <label htmlFor={region}> {region} </label>
            </div>
        ))}


    </div>
    </fieldset>)
}

export default FilterRegion