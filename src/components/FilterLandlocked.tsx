import { useCountries } from "../contexts/CountriesContext";
import style from ".././assets/styles/FilterLandlocked.module.css"

function FilterLandLocked() {
    const { filters, setFilters, favoriteList, setFavoriteList, currentList } = useCountries();

    const handleChangeLLS = () => {
        if (currentList==="search") { setFilters((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))}
        if (currentList==="favorite") { setFavoriteList((prev) => ({ ...prev, landlockedshown: !prev.landlockedshown }))}
    }

    return <div className={style.inLine}>
        <input type="checkbox" id="landlocked" name="landlocked" checked={currentList==="search"?(!filters.landlockedshown):(!favoriteList.landlockedshown)} onChange={handleChangeLLS} />
        <label htmlFor="landlocked">Has a seashore</label>
    </div>
}

export default FilterLandLocked