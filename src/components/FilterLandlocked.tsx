import { Filters, Regions } from "../App"
import { FilterPageProps } from "./FilterPage"
import { useContext } from 'react';
import CountriesContext from "../contexts/CountriesContext";






function FilterLandLocked() {
    const { filters } = useContext(CountriesContext);
    const { setFilters } = useContext(CountriesContext);

    const handleChangeLLS = () => {

        setFilters((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))

    }
    return <>
        <input type="checkbox" id="landlocked" name="landlocked" checked={!filters.landlockedshown} onChange={handleChangeLLS} />
        <label htmlFor="landlocked">Has a seashore</label>

    </>
}

export default FilterLandLocked