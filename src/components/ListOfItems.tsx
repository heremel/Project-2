import styles from "./../assets/styles/ListOfItems.module.css";
import Item from "./Item";
import { Countries } from "../interfaces/allInterfaces";
import FiltersTab from "./FiltersTab";
import { useCountries } from "../contexts/CountriesContext";

function ListOfItems() {
	const { countries, weathers, filters } = useCountries();

	function filterArray(array: Countries) {
		let filtered1
		let filtered2
		let filtered3
		let filtered4
		let filtered5

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

		// let filteredWeather = weathers.filter((weather) => {
		// 	const sum = weather.daily.temperature_2m_mean.reduce((a, b) => a + b);
		// 	const meanTemp = Math.floor((sum / weather.daily.temperature_2m_mean.length) * 100) / 100;
		// 	return ((meanTemp <= filters.meantempmax) && (meanTemp >= filters.meantempmin))
		// })
		// console.log("filtered weathers")
		// console.log(filteredWeather)
		// console.log(filteredWeather[0])
		// let longlat = filteredWeather.map((weather) => [Math.round(weather.latitude), Math.round(weather.longitude)])
		// console.log("longlat")
		// console.log(longlat)
		// console.log(longlat[0])

		// filtered5 = filtered4.filter((country) => (longlat.includes([Math.round(country.latlng[0]), Math.round(country.latlng[1])])))
		// console.log([Math.round(filtered4[0].latlng[0]), Math.round(filtered4[0].latlng[1])])
		// console.log("filtered5")
		// console.log(filtered5)
		// console.log(filtered5[0])
		return filtered4 //à terme, doit retourner filtered5
	}

	return (
		<>
			<FiltersTab />
			<div className={styles.container}>
				{filterArray(countries).map((country, index) => (
					<Item
						currentCountry={country}
						weathers={weathers}
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
