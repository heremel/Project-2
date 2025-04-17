import { useCountries } from "../contexts/CountriesContext";

function FilterLanguages() {
    const { filters, setFilters } = useCountries();

    const handleChangeLang = (lang: string) => {
        if (filters.languages.includes(lang)) {
            // setFilters((prev) => ({ ...prev, languages: prev.languages.filter(() => !prev.languages.includes(lang)) }))
            setFilters((prev) => ({ ...prev, languages: prev.languages.filter((language) => language !== lang) }))

        }
        else {
            setFilters((prev) => ({ ...prev, languages: [...prev.languages, lang] }))
        }

    }

    const langArray: string[] = ["English", "French", "Spanish", "Portuguese", "Italian", "German", "Dutch", "Chinese"]

    return (<div>
        {langArray.map((language) => (
            <div key={language}>
                <input type="checkbox" id={language} name={language} checked={filters.languages.includes(language)} onChange={() => handleChangeLang(language)} />
                <label htmlFor={language}>{language}</label>
            </div>
        ))}


        {/* <input type="checkbox" id="English" name="English" checked={!filters.languages.includes("English")} onChange={() => handleChangeLang("English")} />
        <label htmlFor="English">English</label>

        <input type="checkbox" id="French" name="French" checked={!filters.languages.includes("French")} onChange={() => handleChangeLang("French")} />
        <label htmlFor="French">French</label> */}

    </div>)
}

export default FilterLanguages