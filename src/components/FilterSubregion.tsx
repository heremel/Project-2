import { useCountries } from "../contexts/CountriesContext";
import { SubInRegion } from "../interfaces/allInterfaces";
import style from ".././assets/styles/FilterSubregion.module.css"

function FilterSubregion() {
    const { filters, setFilters } = useCountries();

    function handleChangeSubregion(string: string) {
        setFilters((prev) => ({ ...prev, subregion: string }))
    }

    const subregionArray: SubInRegion[] = [
        { region: "Africa", subregions: ["Northern Africa", "Eastern Africa", "Middle Africa", "Southern Africa", "Western Africa"] },
        { region: "Americas", subregions: ["Caribbean", "Central America", "South America", "North America"] },
        { region: "Asia", subregions: ["Central Asia", "Eastern Asia", "South-Eastern Asia", "Southern Asia", "Western Asia"] },
        { region: "Europe", subregions: ["Eastern Europe", "Northern Europe", "Southern Europe", "Western Europe"] },
        { region: "Oceania", subregions: ["Australia and New Zealand", "Melanesia", "Micronesia", "Polynesia"] }
    ]

    return (<fieldset>
        <legend>Subregions</legend>
        <div className={style.subregionContainer}>
            {filters.region !== "none" ? (subregionArray.find((regionObject: SubInRegion) => (regionObject.region === filters.region))?.subregions.map((subregion) => (
                <div key={subregion}>
                    <input type="radio" id={subregion} name={subregion} checked={filters.subregion === subregion} onChange={() => handleChangeSubregion(subregion)} />
                    <label htmlFor={subregion}> {subregion} </label>
                </div>
            ))) : <p>Select a continent first</p>}

        </div>
    </fieldset>)
}

export default FilterSubregion