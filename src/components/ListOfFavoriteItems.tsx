import styles from "./../assets/styles/ListOfItems.module.css";
import Item from "./Item";
import FiltersTabFavorite from "./FiltersTabFavorite";
import { useCountries } from "../contexts/CountriesContext";
import { useEffect, useState } from "react";

function ListOfFavoriteItems() {
	const { countries, weathers, favoriteList } = useCountries();
	let favoriteArray: Number[] = []
	const [filteredArray, setFilteredArray] = useState(countries)

	useEffect(() => {
		setFilteredArray(countries)

		switch (favoriteList.memoriesOrDreams) {
			case "both": favoriteArray = [...favoriteList.dreams, ...favoriteList.memories]; break;
			case "memories": favoriteArray = [...favoriteList.memories]; break;
			case "dreams": favoriteArray = [...favoriteList.dreams]; break;
		}

		setFilteredArray((prev) => prev.filter((country) => favoriteArray.includes(country.location_id)))

		if (!favoriteList.landlockedshown) { setFilteredArray((prev) => prev.filter((country) => country.landlocked === false)) }

		if (favoriteList.region !== "none") { setFilteredArray((prev) => prev.filter((country) => country.region === favoriteList.region)) }

		if (favoriteList.languages.length > 0) {
			setFilteredArray((prev) => prev.filter((country) => {
				let isIncluded = false
				for (let i = 0; i < favoriteList.languages.length; i++) {
					if (country.languages.includes(favoriteList.languages[i])) { isIncluded = true }
				}
				return isIncluded
			}))
		}

		if (favoriteList.subregion !== "none") { setFilteredArray((prev) => prev.filter((country) => country.subregion === favoriteList.subregion)) }

		if ((favoriteList.meantempmin !== -99) || (favoriteList.meantempmax !== 99)) {
			let filteredWeather = weathers.filter((weather) => {
				const sum = weather.daily.temperature_2m_mean.reduce((a, b) => a + b);
				const meanTemp = Math.floor((sum / weather.daily.temperature_2m_mean.length) * 100) / 100;
				return ((meanTemp <= favoriteList.meantempmax) && (meanTemp >= favoriteList.meantempmin))
			})
			let weatherIDs = filteredWeather.map((weather) => weather.location_id)
			setFilteredArray((prev) => prev.filter((country) => (weatherIDs.includes(country.location_id))))
		}

		if (favoriteList.search !== "") {
			console.log(favoriteList.search)
			setFilteredArray((prev) => prev.filter((country) => { return ((country.name.common.toLowerCase().includes(favoriteList.search.toLowerCase())) || (country.name.official.toLowerCase().includes(favoriteList.search.toLowerCase()))) }))
		}

	}, [favoriteList])


	return (
		<>
			<FiltersTabFavorite />
			<h2>Check your favs!</h2>
			<p className={styles.itemlistp}>Here are listed all your Dreams, Plans, and Remembrances</p>
			<p className={styles.itemlistp}>Current results: {filteredArray.length}</p>
			<div className={styles.container}>
				{filteredArray.map((country) => (
					<Item
						currentCountry={country}
						weathers={weathers}
						key={country.location_id}
					/>
				))}
			</div>
		</>
	);
}

export default ListOfFavoriteItems;
