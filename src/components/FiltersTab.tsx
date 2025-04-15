import { Filters, MainType } from "../App"


interface FiltersProps {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    setMainContent: React.Dispatch<React.SetStateAction<MainType>>;
}





function FiltersTab({ filters, setFilters, setMainContent }: FiltersProps) {
    function handleOnClickMore() {
        setMainContent("FilterPage")
    }

    function handleOnClickFilters(property: string) {
        if (property === "landlockedshown") {
            setFilters((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))
        }
    }

    return (
        <>
            {!filters.landlockedshown && (<button onClick={() => handleOnClickFilters("landlockedshown")}>Has a seashore</button>)}

            <button onClick={handleOnClickMore}>More Filters</button>
        </>)
}

export default FiltersTab