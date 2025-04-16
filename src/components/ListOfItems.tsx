import styles from "./../assets/styles/ListOfItems.module.css";
import Item from "./Item";
import PopUp from "./test";
// import { countries } from "../databases/countries";
// import { weathers } from "../databases/weather";
import { useState } from "react";
import { Countries } from "../App";
import { Weathers } from "../App";
import More_Info from "./test";


export interface ListProps {
	countries: Countries,
	weathers: Weathers
}


function ListOfItems({ countries, weathers }: ListProps) {
	const [selectedCountry, setSelectedCountry] = useState(null);

	const windowpopup = (country) => {
		console.log(country); // crée un type country
		setSelectedCountry(country);
	};
	const windowclosepopup = () => {
		setSelectedCountry(null);
	};
	return (
		<>
			<div className={styles.container}>
				{countries.map((country, index) => (
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
		</>
	);
}

export default ListOfItems;
