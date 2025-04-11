import styles from "./../assets/styles/ListOfItems.module.css";
import PopUp from "./PopUp";
import { countries } from "../databases/countries";
import { weathers } from "../databases/weather";
const fakeObject = {
	countries: [
		{
			name: "France",
			temperature: 25,
			currency: "Euro",
			image: "https://img.freepik.com/photos-gratuite/capture-verticale-magnifique-tour-eiffel-capturee-paris-france_181624-45445.jpg"
		},
		{
			name: "Canada",
			temperature: 15,
			currency: "Dollar Canadien",
			image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
		},
		{
			name: "Bulgarie",
			temperature: 32,
			currency: "Bulgarian lev",
			image: "https://cdn.pixabay.com/photo/2019/03/07/21/59/sofia-4041209_1280.jpg"
		}
	]
};

function ListOfItems() {

	return (
		<>
			<div className={styles.container}>
				{fakeObject.countries.map((country, index) => (
					<div
						key={index}
						className={styles.img}
						style={{
							backgroundImage: `url(${country.image})`,
						}}
					>
						<div className={styles.textOverlay}>
							<h2>{country.name}</h2>
							<p>Température : {country.temperature} °C</p>
							<p>Devise : {country.currency}</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
};

export default ListOfItems;