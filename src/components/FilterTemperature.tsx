import { useCountries } from "../contexts/CountriesContext";


function FilterTemperature() {
    const { filters, setFilters  } = useCountries();

    function handleChangeMin(number: number) {
            setFilters((prev) => ({ ...prev, meantempmin: number }))
        }

        function handleChangeMax(number: number) {
            setFilters((prev) => ({ ...prev, meantempmax: number }))
        }



    return (<fieldset>
        <legend>Mean temperature in C°</legend>
        <label htmlFor="min">between</label>
        <input type="number" id="min" name="min" min="-99" max={filters.meantempmax} value={filters.meantempmin} onChange={(event)=>(handleChangeMin(parseInt(event.target.value)))} />
        <label htmlFor="max">and</label>
        <input type="number" id="max" name="max" min={filters.meantempmin} max="99" value={filters.meantempmax} onChange={(event)=>(handleChangeMax(parseInt(event.target.value)))} />        
    </fieldset>)
}

export default FilterTemperature