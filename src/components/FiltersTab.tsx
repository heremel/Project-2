import { Filters, Regions, MainType } from "../App"
import style from "./FiltersTab.module.css"

interface FiltersProps {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    setMainContent: React.Dispatch<React.SetStateAction<MainType>>;
    mainContent: MainType
}



let lastContent: MainType = "ListOfItems"

function FiltersTab({ filters, setFilters, setMainContent, mainContent }: FiltersProps) {
    function handleOnClickMore() {

        if (mainContent !== "FilterPage") {
            lastContent = mainContent
            setMainContent("FilterPage")
        }
        else { setMainContent(lastContent) }
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
        <div className={style.filterTabContainer}>
            <div>
                <button onClick={handleOnClickMore}>{mainContent === "FilterPage" ? "Less Filters" : "More Filters"}</button>
            </div>
            <div className={style.currentFilters}>
                {!filters.landlockedshown && (<button onClick={() => handleOnClickFilters("landlockedshown")}>Has a seashore</button>)}
                {filters.region !== "none" && (<button onClick={() => handleOnClickFilters("region")}>{filters.region}</button>)}
            </div>

        </div>)
}

export default FiltersTab