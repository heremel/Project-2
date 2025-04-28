import styles from "./../assets/styles/ListOfItems.module.css";
import Item from "./Item";
import { Countries } from "../interfaces/allInterfaces";
import FiltersTab from "./FiltersTab";
import { useCountries } from "../contexts/CountriesContext";

function ListOfItems() {
	const { countries, weathers, filters } = useCountries();

	function filterArray(array: Countries) {
		let filtered1 = null
		let filtered2 = null
		let filtered3 = null
		let filtered4 = null
		let filtered5 = null

		//étape pour appliquer le filtre 1
		if (!filters.landlockedshown) { filtered1 = array.filter((country) => country.landlocked === false) }
		else { filtered1 = array }

		if (filters.region !== "none") { filtered2 = filtered1.filter((country) => country.region === filters.region) }
		else { filtered2 = filtered1 }

		if (filters.languages.length > 0) {
			filtered3 = filtered2.filter((country) => {
				let isIncluded = false
				for (let i = 0; i < filters.languages.length; i++) {
					if (country.languages.includes(filters.languages[i])) { isIncluded = true }
				}
				return isIncluded
			})
		}
		else { filtered3 = filtered2 }

		if (filters.subregion !== "none") { filtered4 = filtered3.filter((country) => country.subregion === filters.subregion) }
		else { filtered4 = filtered3 }

		let filteredWeather = weathers.filter((weather) => {
			const sum = weather.daily.temperature_2m_mean.reduce((a, b) => a + b);
			const meanTemp = Math.floor((sum / weather.daily.temperature_2m_mean.length) * 100) / 100;
			return ((meanTemp <= filters.meantempmax) && (meanTemp >= filters.meantempmin))
		})
		let weatherIDs = filteredWeather.map((weather) => weather.location_id)
		filtered5 = filtered4.filter((country) => (weatherIDs.includes(country.location_id)))
		return filtered5
	}

	return (
		<>
			<FiltersTab />
			<p>Results:{filterArray(countries).length}</p>
			<div className={styles.container}>
				{filterArray(countries).map((country, index) => (
					<Item
						currentCountry={country}
						weathers={weathers}
						key={index}
					/> // currentCountry = props dont va avoir besoin le composant item pour fonctionner
					//valeur fournis c'est country entre les accolades, c'est une valeur dynamique et country cest la valeur qu'attends mon
					//composant,
				))}
			</div>
		</>
	);
}

export default ListOfItems;
