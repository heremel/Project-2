import { useParams } from "react-router-dom";
import { countries } from "../databases/countries";
import { weathers } from "../databases/weather";
import { useState } from "react";
import { Weather } from "../interfaces/allInterfaces";

function DetailedItem() {
	const { location_id } = useParams<{ location_id: string }>();
	const country = countries.find(
		(currentLocatedCountry) =>
			currentLocatedCountry.location_id === Number(location_id),
	);
	//cree une nouvelle const qui s'appelle country, qui est un find de location_id dans countries
	//une constant qui sappelle country et une qui sappelle weather (même location_id)

	if (!country || country.location_id !== Number(location_id)) {
		return <p>Country not found!</p>;
	}

	const weather = weathers.find(
		(currentWeather) => currentWeather.location_id === Number(location_id),
	);

	if (!weather) {
		return <p>Data not found!</p>;
	}

	const hasSnowfall = weather.daily.snowfall_sum.some(
		(snow: number) => snow > 0,
	); //trouve si y'a de la snow

	const sum = weather.daily.temperature_2m_mean.reduce((a, b) => a + b, 0);
	const weatherMeanTemp =
		Math.round((sum / weather.daily.temperature_2m_mean.length) * 100) / 100;
	const weatherMinTemp = Math.min(...weather.daily.temperature_2m_min);
	const weatherMaxTemp = Math.max(...weather.daily.temperature_2m_max);

	const urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=${weather.latitude}&longitude=${weather.longitude}&current=temperature_2m`;
	const [currentWeather, setCurrentWeather] = useState(0);

	fetch(urlWeather)
		.then((response) => response.json())
		.then((data) => setCurrentWeather(data.current.temperature_2m))
		.catch((err) => console.error(err));

	const totalOfRainyDays = weather.daily.rain_sum;
	console.log(totalOfRainyDays);
	const newTotalOfRainyDays = totalOfRainyDays.filter(
		(day: number) => day > 2.4,
	);

	const sumOfRainyDays = weather.daily.rain_sum.reduce((a, b) => a + b, 0);
	const averageRainyDays =
		Math.round((sumOfRainyDays / weather.daily.rain_sum.length) * 100) / 100;

	return (
		<>
			<p>Name: {country.name.common}</p>
			<p>Capital: {country.capital}</p>
			<p>Region: {country.region}</p>
			<p>Subregion: {country.subregion}</p>
			<p>Languages: {country.languages.join(", ")}</p>
			<p>Weather: {currentWeather}°C</p>
			<p>Min Temp: {weatherMinTemp}°C</p>
			<p>Max Temp: {weatherMaxTemp}°C</p>
			<p>Average Temp: {weatherMeanTemp}°C</p>
			<p>Landlocked: {country.landlocked ? "Yes" : "No"}</p>
			<p>Snowfall: {hasSnowfall ? "Yes" : "No"}</p>
			<p>Rainy Days: {newTotalOfRainyDays.length}</p>
			{/* Pour la pluie selon les critères de l'OMM on a:
				Précipitation nulle: < 0.1mm/h
				(donc 2.4mm/j)
				https://library.wmo.int/viewer/54922/download?file=1203_fr.pdf&type=pdf&navigator=1
				Page 14, 15
			*/}
			<p>Average Rain Per Day: {averageRainyDays}</p>
			<p>
				Google Maps Link:{" "}
				<a target="_blank" href={country.maps.googleMaps} rel="noreferrer">
					View
				</a>
			</p>
		</>
	);
}

export default DetailedItem;
