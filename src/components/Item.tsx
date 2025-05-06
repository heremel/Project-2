// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Item.module.css";
import { Country, Weathers } from "../interfaces/allInterfaces";

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
		;
	}

	const sum = currentWeather.daily.temperature_2m_mean.reduce((a, b) => a + b);
	weatherResults.meanTemp =
		Math.floor((sum / currentWeather.daily.temperature_2m_mean.length) * 100) /
		100;
	weatherResults.minTemp = Math.min(...currentWeather.daily.temperature_2m_min);
	weatherResults.maxTemp = Math.max(...currentWeather.daily.temperature_2m_max);

	return (
		<div className={styles.item}>
			<h2 className={styles.h2item}>{currentCountry.name.common}{!currentCountry.landlocked &&<img src="/src/assets/pictogram/picto_wave.svg" className={styles.miniPictoLL} />}</h2>
			<div className={styles.itemContent}>
				<img className={styles.itemContentImg} src={!currentCountry.image ? currentCountry.flags.png : currentCountry.image} />
				<div className={styles.subdiv}>
					
					<p className={styles.miniP}><img src="/src/assets/pictogram/picto_neutralThermometer.svg" className={styles.miniPicto} /> : {weatherResults.meanTemp} °C</p>
					<p className={styles.miniP}><img src="/src/assets/pictogram/picto_mainCurrency.svg" className={styles.miniPicto} /> : {currentCountry.currencies}</p>

					<p className={styles.miniP}>Subregion : {currentCountry.subregion}</p>
					<p className={styles.miniP}>Languages : {currentCountry.languages.join(", ")}</p>

					<Link to={`/details/${currentCountry.location_id}`}>More Info</Link>
				</div>
			</div>
		</div>
	);
}
export default Item;
