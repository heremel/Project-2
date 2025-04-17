import { Regions, useCountries } from "../contexts/CountriesContext";
import style from "./componentsstyles/FilterRegion.module.css"

function FilterRegion() {
    const { filters } = useCountries();
    const { setFilters } = useCountries();

    function handleChangeRegion(string: Regions) {
        setFilters((prev) => ({ ...prev, region: string }))
    }

    return <div className={style.regionContainer}>
        <input type="radio" id="none" name="none" checked={filters.region === "none"} onChange={() => handleChangeRegion("none")} />
        <label htmlFor="none"> none </label>

        <input type="radio" id="Africa" name="Africa" checked={filters.region === "Africa"} onChange={() => handleChangeRegion("Africa")} />
        <label htmlFor="Africa"> Africa </label>

        <input type="radio" id="Americas" name="Americas" checked={filters.region === "Americas"} onChange={() => handleChangeRegion("Americas")} />
        <label htmlFor="Americas"> Americas </label>

        <input type="radio" id="Asia" name="Asia" checked={filters.region === "Asia"} onChange={() => handleChangeRegion("Asia")} />
        <label htmlFor="Asia"> Asia </label>

        <input type="radio" id="Europe" name="Europe" checked={filters.region === "Europe"} onChange={() => handleChangeRegion("Europe")} />
        <label htmlFor="Europe"> Europe </label>

        <input type="radio" id="Oceania" name="Oceania" checked={filters.region === "Oceania"} onChange={() => handleChangeRegion("Oceania")} />
        <label htmlFor="Oceania"> Oceania </label>

    </div>
}

export default FilterRegion