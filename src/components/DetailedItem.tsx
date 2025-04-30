import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countries } from "../databases/countries";
import { weathers } from "../databases/weather";
import { useCountries } from "../contexts/CountriesContext";
import "../assets/styles/DetailedItem.module.css";

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

	const rainArray = weather.daily.rain_sum;
	const rainyDays = rainArray.filter((day: number) => day > 1);

	const sumOfRainyDays = weather.daily.rain_sum.reduce((a, b) => a + b, 0);
	const averageRainPerDay =
		Math.round((sumOfRainyDays / weather.daily.rain_sum.length) * 100) / 100;

	const { favoriteList, setFavoriteList } = useCountries(); //permet de récuperer dans le context.

	const handleChangeMemories = (location_id: number) => {
		if (favoriteList.memories.includes(location_id)) {
			//si ya ma country
			setFavoriteList((prev) => ({
				...prev,
				memories: prev.memories.filter((favorite) => favorite !== location_id),
			}));
		} else {
			setFavoriteList((prev) => ({
				...prev,
				memories: [...prev.memories, location_id],
			}));
		}
	};

	const handleChangeDreams = (location_id: number) => {
		if (favoriteList.dreams.includes(location_id)) {
			//si ya ma country
			setFavoriteList((prev) => ({
				...prev,
				dreams: prev.dreams.filter((favorite) => favorite !== location_id),
			}));
		} else {
			setFavoriteList((prev) => ({
				...prev,
				dreams: [...prev.dreams, location_id],
			}));
		}
	};

	//pour trouver la food
	const urlFood = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.demonyms.eng.masc}`;

	const defaultFood = {
		strMeal: "",
		strMealThumb: "",
		idMeal: "",
	};

	const [food, setFood] = useState(defaultFood);

	useEffect(() => {
		fetch(urlFood)
			.then((response) => response.json())
			.then((data) => setFood(data.meals[0]))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<input
				type="checkbox"
				name="memories"
				checked={favoriteList.memories.includes(country.location_id)}
				onChange={() => handleChangeMemories(country.location_id)}
			/>
			<label htmlFor="memories">Add to your memories</label>
			<input
				type="checkbox"
				name="dreams"
				checked={favoriteList.dreams.includes(country.location_id)}
				onChange={() => handleChangeDreams(country.location_id)}
			/>
			<label htmlFor="dreams">Add to your dreams</label>
			<p>Name: {country.name.common}</p>
			<div className="allParts">
				<div className="firstPart">
					<p>Capital: {country.capital}</p>
					<p>Region: {country.region}</p>
					<p>Subregion: {country.subregion}</p>
					<p>Languages: {country.languages.join(", ")}</p>
					<p>Current Temp: {currentWeather}°C</p>
					<p>Min Temp: {weatherMinTemp}°C</p>
					<p>Max Temp: {weatherMaxTemp}°C</p>
				</div>
				<div className="secondPart">
					<p>Average Temp: {weatherMeanTemp}°C</p>
					<p>Landlocked: {country.landlocked ? "Yes" : "No"}</p>
					<p>Snowfall: {hasSnowfall ? "Yes" : "No"}</p>
					<p>Rainy Days: {rainyDays.length}</p>
					{/* 
				https://library.wmo.int/viewer/54922/download?file=1203_fr.pdf&type=pdf&navigator=1
				Page 14, 15
			*/}
					<p>Average Rain Per Day: {averageRainPerDay}mm</p>
					<p>
						Google Maps Link:{" "}
						<a target="_blank" href={country.maps.googleMaps} rel="noreferrer">
							View
						</a>
					</p>
					{!food.strMeal ? (
						<div>
							<p>Typical food: Not found </p>
						</div>
					) : (
						<div>
							<p>Typical food: {food.strMeal} </p>
							<img src={food.strMealThumb} />
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default DetailedItem;
