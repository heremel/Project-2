import { useEffect, useState } from "react";
import styles from "../assets/styles/ListOfItems.module.css";
import { ListProps } from "./ListOfItems";
import { Country, Weathers } from "../App";

interface WeatherResult {
	countryLat: number;
	countryLong: number;
	meanTemp: number;
	minTemp: number;
	maxTemp: number;
	currentTemperature: number;
	elevation: number;
}

async function getMoreWeatherData(currentCountry: Country, weathers: Weathers) {
	// je crée un objet à remplir avec toutes mes données UTILES + c'est les valeurs de base de cet objet que je renvoie si j'ai un problème
	const weatherResults = {
		countryLat: Math.round(currentCountry.latlng[0]),
		countryLong: Math.round(currentCountry.latlng[1]),
		meanTemp: 0,
		minTemp: 0,
		maxTemp: 0,
		currentTemperature: 0,
		elevation: 0
	}

	// variable intermédiaire pour le fetch
	let currentWeatherLong = null
	let currentWeatherLat = null
	let url = null

	const currentWeather = weathers.find((weather) => ((Math.round(weather.latitude) == Math.round(weatherResults.countryLat)) && (Math.round(weather.longitude) == Math.round(weatherResults.countryLong))));
	if (!currentWeather) { return weatherResults }
	currentWeatherLong = Math.round(currentWeather.longitude);
	currentWeatherLat = Math.round(currentWeather.latitude);
	const sum = currentWeather.daily.temperature_2m_mean.reduce((a, b) => a + b);
	weatherResults.meanTemp = Math.floor((sum / currentWeather.daily.temperature_2m_mean.length) * 100) / 100;
	weatherResults.minTemp = Math.min(...currentWeather.daily.temperature_2m_min)
	weatherResults.maxTemp = Math.max(...currentWeather.daily.temperature_2m_max)
	weatherResults.elevation = currentWeather.elevation

	url = `https://api.open-meteo.com/v1/forecast?latitude=${currentWeatherLat}&longitude=${currentWeatherLong}&current=temperature_2m`
	await fetch(url)
		.then(response => response.json())
		.then(data => weatherResults.currentTemperature = data.current.temperature_2m)// seule "temperature actuelle" est fetchée, les autres sont en BDD
		.catch(err => console.error(err));

	return weatherResults
}

interface ItemProps {
	currentCountry: Country;
	weathers: Weathers
	handleClickPopup: any
}

function Item({ currentCountry, handleClickPopup, weathers }: ItemProps) {
	// cet objet est un duplicata de weatherResults, c'est pas très propre, mais je cleanerai plus tard
	const weatherInitial = {
		countryLat: Math.round(currentCountry.latlng[0]),
		countryLong: Math.round(currentCountry.latlng[1]),
		meanTemp: 0,
		minTemp: 0,
		maxTemp: 0,
		currentTemperature: 0,
		elevation: 0
	}

	const [weather, setWeather] = useState<WeatherResult>(weatherInitial)
	useEffect(() => {// à la création de l'item, tous les éléments sont mis (ils ne seront jamais mis à jour)
		async function getWeatherData() {
			setWeather(await getMoreWeatherData(currentCountry, weathers))

		}
		getWeatherData()
	}, [])

	return (
		<div
			className={styles.img}

		// PAS D'IMAGE POUR L'INSTANT, j'ai du commenter ce style
		// style={{
		// 	backgroundImage: `url(${currentCountry.image})`,
		// }}
		>
			<div className={styles.textOverlay}>
				<button type="button" onClick={() => handleClickPopup(currentCountry)}>
					More Info
				</button>
				<h2>{currentCountry.name.common}</h2>
				<p>Average Temperature : {weather.meanTemp} °C</p>
				<p>Minimum Temperature : {weather.minTemp} °C</p>
				<p>Maximum Temperature : {weather.maxTemp} °C</p>
				<p>Current Temperature : {weather.currentTemperature} °C</p>
				<p>Devise : {currentCountry.currencies}</p>
				<p>Capital city : {currentCountry.capital}</p>
				<p>Subregion : {currentCountry.subregion}</p>
				<p>Languages : {currentCountry.languages.join(", ")}</p>
				<p>Elevation : {weather.elevation}</p>
				{/* <p>WeatherLong : {currentWeatherLong}</p> //debug items
				<p>WeatherLat : {currentWeatherLat}</p>
				<p>CountryLong : {countryLong}</p>
				<p>CountryLat : {countryLat}</p>
				<p>ID : {currentWeather.location_id}</p> */}
			</div>
		</div>
	);
}
export default Item;
