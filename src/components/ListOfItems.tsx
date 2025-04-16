import styles from "./../assets/styles/ListOfItems.module.css";
import Item from "./Item";
import PopUp from "./PopUp";
import { useState } from "react";
import { Countries, Filters } from "../App";
import { Weathers } from "../App";
import More_Info from "./Test";
import NavBar from "./NavBar";
import FiltersTab from "./FiltersTab";

export interface ListProps {
	countries: Countries;
	weathers: Weathers;
	filters: Filters;
}

function ListOfItems({ countries, weathers, filters }: ListProps) {
	const [selectedCountry, setSelectedCountry] = useState(null);

	const windowpopup = (country) => {
		console.log(country); // crée un type country
		setSelectedCountry(country);
	};
	const windowclosepopup = () => {
		setSelectedCountry(null);
	};

	function filterArray(array: Countries) {
		let filtered1;
		let filtered2;
		let filtered3;
		let filtered4;
		let filtered5;
		if (!filters.landlockedshown) {
			filtered1 = array.filter((country) => country.landlocked === false);
		} else {
			filtered1 = array;
		}

		return filtered1;
	}

	return (
		<>
			<FiltersTab/>
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
			<NavBar/>
		</>
	);
}

export default ListOfItems;
