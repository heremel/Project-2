// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Item.module.css";
import type { Country, Weathers } from "../interfaces/allInterfaces";
import { useLocation, useNavigate } from "react-router";

interface ItemProps {
	currentCountry: Country;
	weathers: Weathers
}

function Item({ currentCountry, weathers }: ItemProps) {

	const weatherResults = {
		meanTemp: 0,
		minTemp: 0,
		maxTemp: 0,
	};

	const currentWeather = weathers.find(
		(weather) =>
			weather.location_id === currentCountry.location_id,
	);
	if (!currentWeather) {
		throw new Error("No match between country and weather");
	}

	const sum = currentWeather.daily.temperature_2m_mean.reduce((a, b) => a + b);
	weatherResults.meanTemp =
		Math.floor((sum / currentWeather.daily.temperature_2m_mean.length) * 100) /
		100;
	weatherResults.minTemp = Math.min(...currentWeather.daily.temperature_2m_min);
	weatherResults.maxTemp = Math.max(...currentWeather.daily.temperature_2m_max);

	const location = useLocation();

	return (
		<div className={styles.item}>
			<h2 className={styles.h2item}>{currentCountry.name.common}</h2>
			<div className={styles.itemContent}>
				<img alt={currentCountry.name.common} src={!currentCountry.image ? currentCountry.flags.png : currentCountry.image} />
				<div className={styles.subdiv}>
					{/* <img src={currentCountry.flags.png} /> */}

					<p>Average Temperature : {weatherResults.meanTemp} °C</p>
					<p>Currency : {currentCountry.currencies}</p>
					<p>Landlocked : {currentCountry.landlocked ? "true" : "false"}</p>
					<p>Subregion : {currentCountry.subregion}</p>
					<p>Languages : {currentCountry.languages.join(", ")}</p>
					<Link to={`/details/${currentCountry.location_id}`} state={{from:location.pathname}} >More Info</Link>
				</div>
			</div>
		</div>
	);
}
export default Item;
