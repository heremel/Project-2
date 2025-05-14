import { useEffect, useState } from "react";
import style from ".././assets/styles/FiltersTab.module.css"
import { useCountries } from "../contexts/CountriesContext";
import FilterPage from "./FilterPage";

function FiltersTab() {
    const { filters, setFilters, setCurrentList } = useCountries();

    const [isOpen, setIsOpen] = useState(false)

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

    function handleOnChangeSearch(eventTargetValue: string) {
        setFilters((prev) => ({ ...prev, search: eventTargetValue }))
    }

    useEffect(() => { setCurrentList("search") }, [])
    return (
        <>
            <div className={style.filterTabContainer}>
                <div>
                    <form className={style.searchForm} onSubmit={event => event.preventDefault()}>
                        <label htmlFor="search">Search (official & common names):  </label>
                        <input className={style.search} type="text" id="search" name="search" value={filters.search} onChange={(event) => { handleOnChangeSearch(event.target.value) }} />
                    </form>
                    <button type="button" className={style.moreFilters} onClick={handleOnClickMore}>{isOpen ? "Less Filters" : "More Filters"}</button>
                </div>
                <div className={style.currentFilters}>
                    {!filters.landlockedshown && (<button type="button" onClick={() => handleOnClickFilters("landlockedshown")}>Has a seashore</button>)}
                    {filters.region !== "none" && (<button type="button" onClick={() => handleOnClickFilters("region")}>{filters.region}</button>)}
                    {filters.subregion !== "none" && (<button type="button" onClick={() => handleOnClickFilters("subregion")}>{filters.subregion}</button>)}
                    {filters.languages.length > 0 && (filters.languages.map((language, index) => (<button type="button" key={index} onClick={() => handleOnClickFilters("language", language)}>{language}</button>)))}
                    {(filters.meantempmax !== 99 || filters.meantempmin !== -99) && (<button type="button" onClick={() => handleOnClickFilters("meanTemperature")}>{filters.meantempmin}C° to {filters.meantempmax}C°</button>)}
                </div>
            </div>
            {isOpen && (<FilterPage />)}
        </>)
}

export default FiltersTab