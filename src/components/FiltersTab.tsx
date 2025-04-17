import { useState } from "react";
import style from ".././assets/styles/FiltersTab.module.css"
import { useCountries } from "../contexts/CountriesContext";
import FilterPage from "./FilterPage";

function FiltersTab() {
    const { filters, setFilters } = useCountries();

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
        if (property === "language")
            setFilters((prev) => ({ ...prev, languages: prev.languages.filter((language) => language !== value) }))
    }

    return (
        <>
            <div className={style.filterTabContainer}>
                <div>
                    <button onClick={handleOnClickMore}>{isOpen ? "Less Filters" : "More Filters"}</button>
                </div>
                <div className={style.currentFilters}>
                    {!filters.landlockedshown && (<button onClick={() => handleOnClickFilters("landlockedshown")}>Has a seashore</button>)}
                    {filters.region !== "none" && (<button onClick={() => handleOnClickFilters("region")}>{filters.region}</button>)}
                    {filters.languages.length > 0 && (filters.languages.map((language, index) => (<button key={index} onClick={() => handleOnClickFilters("language", language)}>{language}</button>)))}
                </div>
            </div>
            {isOpen && (<FilterPage />)}
        </>)
}

export default FiltersTab