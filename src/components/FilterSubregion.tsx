import { useCountries } from "../contexts/CountriesContext";
import { SubInRegion, Subregion } from "../interfaces/allInterfaces";
import style from ".././assets/styles/FilterSubregion.module.css"

function FilterSubregion() {
    const { filters, setFilters, favoriteList, setFavoriteList, currentList } = useCountries();

    function handleChangeSubregion(string: Subregion) {
        if (currentList==="search") { setFilters((prev) => ({ ...prev, subregion: string }))}
        if (currentList==="favorite") { setFavoriteList((prev)=> ({ ...prev, subregion: string }))}
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
            {currentList==="search"?
            (filters.region !== "none" ? (subregionArray.find((regionObject: SubInRegion) => (regionObject.region === filters.region))?.subregions.map((subregion) => (
                <div className={style.inLine} key={subregion}>
                    <input type="radio" id={subregion} name={subregion} checked={filters.subregion === subregion} onChange={() => handleChangeSubregion(subregion)} />
                    <label htmlFor={subregion}> {subregion} </label>
                </div>
            ))) : <p>Select a continent first</p>):
            (favoriteList.region !== "none" ? (subregionArray.find((regionObject: SubInRegion) => (regionObject.region === favoriteList.region))?.subregions.map((subregion) => (
                <div className={style.inLine} key={subregion}>
                    <input type="radio" id={subregion} name={subregion} checked={favoriteList.subregion === subregion} onChange={() => handleChangeSubregion(subregion)} />
                    <label htmlFor={subregion}> {subregion} </label>
                </div>
            ))) : <p>Select a continent first</p>)
            }

        </div>
    </fieldset>)
}

export default FilterSubregion