import { useState } from "react";
import style from ".././assets/styles/FiltersTab.module.css"
import { useCountries } from "../contexts/CountriesContext";
import FilterPage from "./FilterPage";

function FiltersTab() {
    const { filters, setFilters } = useCountries();

    const [isOpen, setIsOpen] = useState(false)

    const [search, setSearch] = useState("")

    function handleOnClickMore() {
        setIsOpen(!isOpen)
    }

    function handleOnClickFilters(property: string, value?: string) {
        if (property === "landlockedshown") {
            setFilters((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))
        }
        if (property === "region") {
            setFilters((prev) => ({ ...prev, region: "none" }))
        }
        if (property === "subregion") {
            setFilters((prev) => ({ ...prev, subregion: "none" }))
        }
        if (property === "language")
            setFilters((prev) => ({ ...prev, languages: prev.languages.filter((language) => language !== value) }))
        if (property === "meanTemperature") {
            setFilters((prev) => ({ ...prev, meantempmin: -99, meantempmax: 99 }))
        }
    }

    return (
        <>
            <div className={style.filterTabContainer}>
                <div>
                    <form onSubmit={event => event.preventDefault()}>
                        <label htmlFor="search">Search:</label>
                        <input type="text" id="search" name="search" value={search} onChange={(event) => { setSearch(event.target.value) }} />
                    </form>
                    <button className={style.moreFilters} onClick={handleOnClickMore}>{isOpen ? "Less Filters" : "More Filters"}</button>
                </div>
                <div className={style.currentFilters}>
                    {!filters.landlockedshown && (<button onClick={() => handleOnClickFilters("landlockedshown")}>Has a seashore</button>)}
                    {filters.region !== "none" && (<button onClick={() => handleOnClickFilters("region")}>{filters.region}</button>)}
                    {filters.subregion !== "none" && (<button onClick={() => handleOnClickFilters("subregion")}>{filters.subregion}</button>)}
                    {filters.languages.length > 0 && (filters.languages.map((language, index) => (<button key={index} onClick={() => handleOnClickFilters("language", language)}>{language}</button>)))}
                    {(filters.meantempmax !== 99 || filters.meantempmin !== -99) && (<button onClick={() => handleOnClickFilters("meanTemperature")}>{filters.meantempmin}C° to {filters.meantempmax}C°</button>)}
                </div>
            </div>
            {isOpen && (<FilterPage />)}
        </>)
}

export default FiltersTab