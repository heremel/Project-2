import { useState, useEffect } from "react";
import style from ".././assets/styles/FiltersTab.module.css"
import { useCountries } from "../contexts/CountriesContext";
import FilterPage from "./FilterPage";

function FiltersTabFavorite() {
    const { favoriteList, setFavoriteList, setCurrentList } = useCountries();

    const [isOpen, setIsOpen] = useState(false)

    function handleOnClickMore() {
        setIsOpen(!isOpen)
    }

    function handleOnClickFilters(property: string, value?: string) {
        if (property === "landlockedshown") {
            setFavoriteList((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))
        }
        if (property === "region") {
            setFavoriteList((prev) => ({ ...prev, region: "none" }))
        }
        if (property === "subregion") {
            setFavoriteList((prev) => ({ ...prev, subregion: "none" }))
        }
        if (property === "language")
            setFavoriteList((prev) => ({ ...prev, languages: prev.languages.filter((language) => language !== value) }))
        if (property === "meanTemperature") {
            setFavoriteList((prev) => ({ ...prev, meantempmin: -99, meantempmax: 99 }))
        }
        if (property === "memoriesOrDreams") {
            setFavoriteList((prev) => ({ ...prev, memoriesOrDreams: "both" }))
        }
    }

    function handleOnChangeSearch(eventTargetValue: string) {
        setFavoriteList((prev) => ({ ...prev, search: eventTargetValue }))
    }

    useEffect(() => { setCurrentList("favorite") }, [])

    return (
        <>
            <div className={style.filterTabContainer}>
                <div>
                    <form className={style.searchForm} onSubmit={event => event.preventDefault()}>
                        <label htmlFor="search">Search (official & common names):  </label>
                        <input className={style.search} type="text" id="search" name="search" value={favoriteList.search} onChange={(event) => { handleOnChangeSearch(event.target.value) }} />
                    </form>
                    <button className={style.moreFilters} onClick={handleOnClickMore}>{isOpen ? "Less Filters" : "More Filters"}</button>
                </div>
                <div className={style.currentFilters}>
                    {!favoriteList.landlockedshown && (<button onClick={() => handleOnClickFilters("landlockedshown")}>Has a seashore</button>)}
                    {favoriteList.region !== "none" && (<button onClick={() => handleOnClickFilters("region")}>{favoriteList.region}</button>)}
                    {favoriteList.subregion !== "none" && (<button onClick={() => handleOnClickFilters("subregion")}>{favoriteList.subregion}</button>)}
                    {favoriteList.languages.length > 0 && (favoriteList.languages.map((language, index) => (<button key={index} onClick={() => handleOnClickFilters("language", language)}>{language}</button>)))}
                    {(favoriteList.meantempmax !== 99 || favoriteList.meantempmin !== -99) && (<button onClick={() => handleOnClickFilters("meanTemperature")}>{favoriteList.meantempmin}C° to {favoriteList.meantempmax}C°</button>)}
                    {favoriteList.memoriesOrDreams === "memories" && (<button onClick={() => handleOnClickFilters("memoriesOrDreams")}>Remembrances only</button>)}
                    {favoriteList.memoriesOrDreams === "dreams" && (<button onClick={() => handleOnClickFilters("memoriesOrDreams")}>Dreams only</button>)}
                </div>
            </div>
            {isOpen && (<FilterPage />)}
        </>)
}

export default FiltersTabFavorite