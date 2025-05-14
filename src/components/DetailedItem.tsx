import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countries } from "../databases/countries";
import { weathers } from "../databases/weather";
import { useCountries } from "../contexts/CountriesContext";
import styles from "../assets/styles/DetailedItem.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import arrowImage from "../assets/pictogram/picto_arrow.svg";
import mainCurrencyImage from "../assets/pictogram/picto_mainCurrency.svg";

function DetailedItem() {
	const { location_id } = useParams<{ location_id: string }>();
	const country = countries.find(
		(currentLocatedCountry) =>
			currentLocatedCountry.location_id === Number(location_id),
	);
	const location = useLocation();

	const defaultFood = {
		strMeal: "",
		strMealThumb: "",
		idMeal: "",
	};

	const [food, setFood] = useState(defaultFood);

	const urlFood = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.demonyms.eng.masc}`;

	const { favoriteList, setFavoriteList } = useCountries();

	const initialPage = location.state?.from || "/";

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

	const urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=${country.capitalInfo.latlng[0]}&longitude=${country.capitalInfo.latlng[1]}&current=temperature_2m`;
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

	useEffect(() => {
		fetch(urlFood)
			.then((response) => response.json())
			.then((data) => setFood(data.meals[0]))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<Link className={styles.linkTo} to={initialPage}><img className={styles.arrowImg} alt="Cross Pictogram" src={arrowImage} /></Link>
			<div className={styles.checkBoxes}>
				<div className={styles.inLine}>
					<input
						type="checkbox"
						name="memories"
						checked={favoriteList.memories.includes(country.location_id)}
						onChange={() => handleChangeMemories(country.location_id)}
					/>
					<label htmlFor="memories">Add to your memories</label>
					<img alt="Approved Pictogram" src="/src/assets/pictogram/picto_approved.svg" className={styles.miniPicto} />
				</div>
				<div className={styles.inLine}>
					<input
						type="checkbox"
						name="dreams"
						checked={favoriteList.dreams.includes(country.location_id)}
						onChange={() => handleChangeDreams(country.location_id)}
					/>
					<label htmlFor="dreams">Add to your dreams</label>
					<img alt="Reflexion Bubble Pictogram" src="/src/assets/pictogram/picto_reflexionBubble.svg" className={styles.miniPicto} />
				</div>
			</div>
			<img
				alt={country.name.common}
				src={!country.image ? country.flags.png : country.image}
				className={styles.imgCountry}
			/>
			<h2>{country.name.common}</h2>
			<div className={styles.allParts}>
				<div className={styles.twoParts}>
					<div className={styles.firstPart}>
						<p>Subregion: {country.subregion}, {country.region} </p>
						<p>Languages: {country.languages.join(", ")}</p>
						<p className={styles.miniP}>Capital: {country.capital}</p>
						<p className={styles.miniP}><img alt="Cold Thermometer Pictogram" src="/src/assets/pictogram/picto_coldThermometer.svg" className={styles.miniPicto} />: {weatherMinTemp}°C</p>
						<p className={styles.miniP}><img alt="Hot Thermometer Pictogram" src="/src/assets/pictogram/picto_hotThermometer.svg" className={styles.miniPicto} />: {weatherMaxTemp}°C</p>
						<p className={styles.miniP}>Average<img alt="Neutral Thermometer Pictogram" src="/src/assets/pictogram/picto_neutralThermometer.svg" className={styles.miniPicto} />: {weatherMeanTemp}°C</p>
						<p className={styles.miniP}>Current <img alt="Neutral Thermometer Pictogram" src="/src/assets/pictogram/picto_neutralThermometer.svg" className={styles.miniPicto} /> in Capital: {currentWeather}°C</p>
					</div>
					<div className={styles.secondPart}>
						<p className={styles.miniP}>Has a seashore<img alt="Wave Pictogram" src="/src/assets/pictogram/picto_wave.svg" className={styles.miniPictoLL} />: {country.landlocked ? "No" : "Yes"}</p>
						<p className={styles.miniP}><img alt="Currency Pictogram" src={mainCurrencyImage} className={styles.miniPicto} /> : {country.currencies}</p>
						<p>Snowfall: {hasSnowfall ? "Yes" : "No"}</p>
						<p>Rainy Days: {rainyDays.length}</p>
						{/* 
				https://library.wmo.int/viewer/54922/download?file=1203_fr.pdf&type=pdf&navigator=1
				Page 14, 15
			*/}
						<p>Average Rain Per Day: {averageRainPerDay}mm</p>
						<p>
							<img alt="Google Pictogram" src="/src/assets/pictogram/picto_googleLocalisation.svg" className={styles.miniPicto} />:{" "}
							<a target="_blank" href={country.maps.googleMaps} rel="noreferrer" className={styles.linkColor}>
								View
							</a>
						</p>
						<p className={styles.pFlag}>Flag : <img className={styles.flagImg} src={country.flags.png} alt={`Flag of ${country.name.common}`} /></p>
					</div>
				</div>
				{!food.strMeal ? (
					<div className={styles.thirdPart}>
						<p className={styles.typical}>Typical food: Not found </p>
					</div>
				) : (
					<div className={styles.thirdPart}>
						<p className={styles.typical}>Typical food: {food.strMeal} </p>
						<img className={styles.typicalImg} alt={food.strMeal} src={food.strMealThumb} />
					</div>
				)}
			</div>
		</>
	);
}

export default DetailedItem;
