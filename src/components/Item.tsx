import { useEffect, useState } from "react";
import styles from "../assets/styles/Item.module.css";
import { WeatherResult, WeatherCountry } from "../interfaces/allInterfaces";
import DetailedItem from "./DetailedItem";
import { Link } from "react-router";

interface ItemProps {
	currentCountry: WeatherCountry;
}

// cet fonction NE DOIT PAS etre async à la fin, car les fetches doivent être faits dans detailled item

function getMoreWeatherData(currentCountry: WeatherCountry) {
	// je crée un objet à remplir avec toutes mes données UTILES + c'est les valeurs de base de cet objet que je renvoie si j'ai un problème
	const weatherResults = {
		meanTemp: 0,
		minTemp: 0,
		maxTemp: 0,
	};

	// variable intermédiaire pour le fetch
	//let urlWeather = null

	const sum = currentCountry.daily.temperature_2m_mean.reduce((a, b) => a + b);
	weatherResults.meanTemp =
		Math.floor((sum / currentCountry.daily.temperature_2m_mean.length) * 100) /
		100;
	weatherResults.minTemp = Math.min(...currentCountry.daily.temperature_2m_min);
	weatherResults.maxTemp = Math.max(...currentCountry.daily.temperature_2m_max);

	return weatherResults;
}

function Item({ currentCountry }: ItemProps) {
	// cet objet est un duplicata de weatherResults, c'est pas très propre, mais je cleanerai plus tard
	const weatherInitial = {
		meanTemp: 0,
		minTemp: 0,
		maxTemp: 0,
	};

	const [weather, setWeather] = useState<WeatherResult>(weatherInitial);
	useEffect(() => {
		// à la création de l'item, tous les éléments sont mis (ils ne seront jamais mis à jour)
		async function getWeatherData() {
			setWeather(getMoreWeatherData(currentCountry));
		}
		getWeatherData();
	});

	return (
		<div className={styles.img}>
			<h2 className={styles.h2item}>{currentCountry.name.common}</h2>
			<div className={styles.subdiv}>
				<p>Average Temperature : {weather.meanTemp} °C</p>
				{/* <p>Minimum Temperature : {weather.minTemp} °C</p>
					<p>Maximum Temperature : {weather.maxTemp} °C</p>*/}
				<p>Currency : {currentCountry.currencies}</p>
				<p>Landlocked : {currentCountry.landlocked ? "true" : "false"}</p>
				{/* <p>Capital city : {currentCountry.capital}</p> */}
				<p>Subregion : {currentCountry.subregion}</p>
				<p>Languages : {currentCountry.languages.join(", ")}</p>
				{/* <p>Elevation : {currentCountry.elevation}</p> */}
				{/* <p>ID : {currentWeather.location_id}</p> */}
				<Link to={`/details/${currentCountry.location_id}`}>More Info</Link>

				{/* // <Link to="le début du lien / entre accolade location id qui dépend de la ou je suis currentCountry.location_id">DetailedItem</Link> */}
			</div>
		</div>
	);
}
export default Item;
