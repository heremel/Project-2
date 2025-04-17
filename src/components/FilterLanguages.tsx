import { useCountries } from "../contexts/CountriesContext";

function FilterLanguages() {
    const { filters } = useCountries();
    const { setFilters } = useCountries();

    const handleChangeLang = (lang: string) => {
        if (filters.languages.includes(lang)) {
            setFilters((prev) => ({ ...prev, languages: prev.languages.filter(() => !prev.languages.includes(lang)) }))
        }
        else {
            setFilters((prev) => ({ ...prev, languages: [...prev.languages, lang] }))
        }

    }
    return <>
        <input type="checkbox" id="English" name="English" checked={!filters.languages.includes("English")} onChange={() => handleChangeLang("English")} />
        <label htmlFor="English">English</label>

        <input type="checkbox" id="French" name="French" checked={!filters.languages.includes("French")} onChange={() => handleChangeLang("French")} />
        <label htmlFor="French">French</label>

    </>
}

export default FilterLanguages