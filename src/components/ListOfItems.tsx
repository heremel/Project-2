import styles from "./../assets/styles/ListOfItems.module.css";
import Item from "./Item";
import { useState } from "react";
import { Countries, Filters } from "../App";
import { Weathers } from "../App";
import More_Info from "./Test";
import NavBar from "./NavBar";
import FiltersTab from "./FiltersTab";
import { useContext } from 'react';
import CountriesContext from "../contexts/CountriesContext";

// export interface ListProps {
// 	countries: Countries;
// 	weathers: Weathers;
// 	filters: Filters;
// }

function ListOfItems() {
	const { countries } = useContext(CountriesContext);
	const { weathers } = useContext(CountriesContext);
	const { filters } = useContext(CountriesContext);


	const [selectedCountry, setSelectedCountry] = useState(null);

	const windowpopup = (country) => {
		console.log(country); // crée un type country
		setSelectedCountry(country);
	};
	const windowclosepopup = () => {
		setSelectedCountry(null);
	};

	function filterArray(array: Countries) {
		let filtered1
		let filtered2
		let filtered3
		let filtered4
		let filtered5

		//étape pour appliquer le filtre 1
		if (!filters.landlockedshown) { filtered1 = array.filter((country) => country.landlocked === false) }
		else { filtered1 = array }

		if (filters.region !== "none") { filtered2 = filtered1.filter((country) => country.region === filters.region) }
		else { filtered2 = filtered1 }

		//étapes pour appliquer les filtres 1 à 5 (manquantes)

		return filtered2 //à terme, doit retourner filtered5
	}

	return (
		<>
			<FiltersTab />
			<div className={styles.container}>
				{filterArray(countries).map((country, index) => (
					<Item
						currentCountry={country}
						weathers={weathers}
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						handleClickPopup={windowpopup}
					/> // currentCountry = props dont va avoir besoin le composant item pour fonctionner
					//valeur fournis c'est country entre les accolades, c'est une valeur dynamique et country cest la valeur qu'attends mon
					//composant,
				))}
			</div>
			<NavBar />
		</>
	);
}

export default ListOfItems;
