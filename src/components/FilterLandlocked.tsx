import { Filters, Regions } from "../contexts/CountriesContext"
import { useContext } from 'react';
import {useCountries} from "../contexts/CountriesContext";






function FilterLandLocked() {
    const { filters } = useCountries();
    const { setFilters } = useCountries();

    const handleChangeLLS = () => {

        setFilters((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))

    }
    return <>
        <input type="checkbox" id="landlocked" name="landlocked" checked={!filters.landlockedshown} onChange={handleChangeLLS} />
        <label htmlFor="landlocked">Has a seashore</label>

    </>
}

export default FilterLandLocked