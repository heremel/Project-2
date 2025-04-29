import { useCountries } from "../contexts/CountriesContext";


function FilterTemperature() {
    const { filters, setFilters, favoriteList, setFavoriteList, currentList } = useCountries();

    function handleChangeMin(number: number) {
        if (currentList==="search") { setFilters((prev) => ({ ...prev, meantempmin: number }))}
        if (currentList==="favorite") { setFavoriteList((prev) => ({ ...prev, meantempmin: number }))}
        }

        function handleChangeMax(number: number) {
            if (currentList==="search") { setFilters((prev) => ({ ...prev, meantempmax: number }))}
            if (currentList==="favorite") { setFavoriteList((prev) => ({ ...prev, meantempmax: number }))}
        }



    return (<fieldset>
        <legend>Mean temperature in C°</legend>
        <label htmlFor="min">between</label>
        <input type="number" id="min" name="min" min="-99" max={currentList==="search"?(filters.meantempmax):(favoriteList.meantempmax)} value={currentList==="search"?(filters.meantempmin):(favoriteList.meantempmin)} onChange={(event)=>(handleChangeMin(parseInt(event.target.value)))} />
        <label htmlFor="max">and</label>
        <input type="number" id="max" name="max" min={currentList==="search"?(filters.meantempmin):(favoriteList.meantempmin)} max="99" value={currentList==="search"?(filters.meantempmax):(favoriteList.meantempmax)} onChange={(event)=>(handleChangeMax(parseInt(event.target.value)))} />        
    </fieldset>)
}

export default FilterTemperature