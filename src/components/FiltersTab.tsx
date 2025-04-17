import { useState } from "react";
import style from "./componentsstyles/FiltersTab.module.css"
import { useCountries } from "../contexts/CountriesContext";
import FilterPage from "./FilterPage";

function FiltersTab() {
    const { filters } = useCountries();
    const { setFilters } = useCountries();

    const [isOpen, setIsOpen] = useState(false)

    function handleOnClickMore() {
        setIsOpen(!isOpen)
    }

    function handleOnClickFilters(property: string) {
        if (property === "landlockedshown") {
            setFilters((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))
        }
        if (property === "region") {
            setFilters((prev) => ({ ...prev, region: "none" }))
        }
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
                </div>
            </div>
            {isOpen && (<FilterPage />)}
        </>)
}

export default FiltersTab