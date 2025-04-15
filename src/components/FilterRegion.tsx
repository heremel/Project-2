import { Filters } from "../App"
import { FilterPageProps } from "./FilterPage"






function FilterRegion({ filters, setFilters }: FilterPageProps) {
    const handleChangeLLS = () => {

        setFilters((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))

    }
    return <>
        <input type="checkbox" id="landlocked" name="landlocked" checked={!filters.landlockedshown} onChange={handleChangeLLS} />
        <label htmlFor="landlocked">Has a seashore</label>

    </>
}

export default FilterRegion