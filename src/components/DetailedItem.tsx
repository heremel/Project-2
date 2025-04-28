import { useParams } from "react-router-dom";
import { countries } from "../databases/countries";
import { weathers } from "../databases/weather";

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

	return (
		<>
			<p>Name : {country.name.common}</p>
			{/* <p>Currency : {country.currencies}</p> */}
			<p>Capital : {country.capital}</p>
			<p>Region : {country.region}</p>
			<p>Subregion : {country.subregion}</p>
			<p>Languages : {country.languages.join(", ")}</p>
			<p>Landlocked : {country.landlocked ? "Yes" : "No"}</p>
			<p>Snowfall : {hasSnowfall ? "Yes" : "No"}</p>
			<p>
				Google Maps Link :{" "}
				<a target="_blank" href={country.maps.googleMaps} rel="noreferrer">
					View
				</a>
			</p>
		</>
	);
}

export default DetailedItem;

//<Link to="le début du lien / entre accolade location id qui dépend de la ou je suis currentCountry.location_id">DetailedItem</Link>

//recup la fin de l'url ça te donnera le nom du currentcountry

//urlFood = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${currentCountry.demonyms.eng.masc}`

//c'est le bon code, mais à déplacer dans detailled item:
// urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=${currentCountry.latitude}&longitude=${currentCountry.longitude}&current=temperature_2m`
// await fetch(urlWeather)
// 	.then(response => response.json())
// 	.then(data => weatherResults.currentTemperature = data.current.temperature_2m)// seule "temperature actuelle" est fetchée, les autres sont en BDD
// 	.catch(err => console.error(err));

// 	const sum = currentCountry.daily.temperature_2m_mean.reduce((a, b) => a + b);
// 	weatherResults.meanTemp =
// 		Math.floor((sum / currentCountry.daily.temperature_2m_mean.length) * 100) /
// 		100;
// 	weatherResults.minTemp = Math.min(...currentCountry.daily.temperature_2m_min);
// 	weatherResults.maxTemp = Math.max(...currentCountry.daily.temperature_2m_max);
