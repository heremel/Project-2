import { useCountries } from "../contexts/CountriesContext";
import { SubInRegion } from "../interfaces/allInterfaces";
import style from ".././assets/styles/FilterSubregion.module.css"

function FilterSubregion() {
    const { filters, setFilters } = useCountries();

    function handleChangeSubregion(string: string) {
        console.log(string)
        setFilters((prev) => ({ ...prev, subregion: string }))
    }

    const subregionArray: SubInRegion[] = [
        { region: "Africa", subregions: ["Northern Africa", "Eastern Africa", "Middle Africa", "Southern Africa", "Western Africa"] },
        { region: "Americas", subregions: ["Caribbean", "Central America", "South America", "Northern America"] },
        { region: "Asia", subregions: ["Central Asia", "Eastern Asia", "South-eastern Asia", "Southern Asia", "Western Asia"] },
        { region: "Europe", subregions: ["Eastern Europe", "Northern Europe", "Southern Europe", "Western Europe"] },
        { region: "Oceania", subregions: ["Australia and New Zealand", "Melanesia", "Micronesia", "Polynesia"] }
    ]

    return (<fieldset>
        <legend>Subregions</legend>
    <div className={style.subregionContainer}>
        {/* J'ai pas réussi, à cause de onChange/onClick/onSelect et le fait que subregion est une valeur locale (je ne peux pas la récup dans le select)
        <label htmlFor="subregions">Areas:</label>
        <select id="subregions" name="subregions" defaultValue={filters.region !== "none" ? filters.subregion : "none"}>
            <option value="none">None (choose a continent first)</option>
            {filters.region !== "none" && (subregionArray.find((regionObject: SubInRegion) => (regionObject.region === filters.region))?.subregions.map((subregion) => (
                <option key={subregion} value={subregion} onSelect={() => handleChangeSubregion(subregion)}>
                    {subregion}
                </option>
            )))}
        </select> */}
         {filters.region !== "none" ? (subregionArray.find((regionObject: SubInRegion) => (regionObject.region === filters.region))?.subregions.map((subregion) => (
                <div key={subregion}>
                <input type="radio" id={subregion} name={subregion} checked={filters.subregion === subregion} onChange={() => handleChangeSubregion(subregion)} />
                <label htmlFor={subregion}> {subregion} </label>
            </div>
                // <option key={subregion} value={subregion} onSelect={() => handleChangeSubregion(subregion)}>
                //     {subregion}
                // </option>
            ))):<p>Select a continent first</p>}

    </div>
    </fieldset>)
}

export default FilterSubregion