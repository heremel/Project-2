import styles from "./../assets/styles/ListOfItems.module.css";
import Item from "./Item";
import FiltersTab from "./FiltersTab";
import { useCountries } from "../contexts/CountriesContext";
import { useEffect, useState } from "react";

function ListOfItems() {
	const { countries, weathers, filters } = useCountries();
	const [filteredArray, setFilteredArray] = useState(countries)

	useEffect(() => {
		setFilteredArray(countries)

		if (!filters.landlockedshown) { setFilteredArray((prev) => prev.filter((country) => country.landlocked === false)) }

		if (filters.region !== "none") { setFilteredArray((prev) => prev.filter((country) => country.region === filters.region)) }

		if (filters.languages.length > 0) {
			setFilteredArray((prev) => prev.filter((country) => {
				let isIncluded = false
				for (let i = 0; i < filters.languages.length; i++) {
					if (country.languages.includes(filters.languages[i])) { isIncluded = true }
				}
				return isIncluded
			}))
		}

		if (filters.subregion !== "none") { setFilteredArray((prev) => prev.filter((country) => country.subregion === filters.subregion)) }

		if ((filters.meantempmin !== -99) || (filters.meantempmax !== 99)) {
			let filteredWeather = weathers.filter((weather) => {
				const sum = weather.daily.temperature_2m_mean.reduce((a, b) => a + b);
				const meanTemp = Math.floor((sum / weather.daily.temperature_2m_mean.length) * 100) / 100;
				return ((meanTemp <= filters.meantempmax) && (meanTemp >= filters.meantempmin))
			})
			let weatherIDs = filteredWeather.map((weather) => weather.location_id)
			setFilteredArray((prev) => prev.filter((country) => (weatherIDs.includes(country.location_id))))
		}

		if (filters.search !== "") {
			console.log(filters.search)
			setFilteredArray((prev) => prev.filter((country) => { return ((country.name.common.toLowerCase().includes(filters.search.toLowerCase())) || (country.name.official.toLowerCase().includes(filters.search.toLowerCase()))) }))
		}

	}, [filters])


	return (
		<div className={styles.mainDiv}>
			<FiltersTab />
			<h2>Prepare your trip</h2>
			<p className={styles.itemlistp}>Find the next destination to add to your Dreams, Plans, or Remembrances </p>
			<p className={styles.itemlistp}>Current possibilities: {filteredArray.length}</p>
			<div className={styles.container}>
				{filteredArray.map((country) => (
					<Item
						currentCountry={country}
						weathers={weathers}
						key={country.location_id}
					/>
				))}
			</div>
		</div>
	);
}

export default ListOfItems;
