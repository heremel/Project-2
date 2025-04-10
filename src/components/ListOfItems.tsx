import styles from "./../assets/styles/ListOfItems.module.css";
import PopUp from "./PopUp";
import React, { useState } from "react";
const fakeObject = {
	countries: [
		{
			name: "France",
			temperature: 25,
			currency: "Euro",
			image: "https://img.freepik.com/photos-gratuite/capture-verticale-magnifique-tour-eiffel-capturee-paris-france_181624-45445.jpg",
			popupInfo:{
				culturalFacts: "J'en ai pas",
				touristSpots: ["La Tour Eiffel", "Le Louvre", "Le Mont Saint-Michel"],
				famousFood: "Baguette, Croissant"
			}
		},
		{
			name: "Canada",
			temperature: 15,
			currency: "Dollar Canadien",
			image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			popupInfo:{
				culturalFacts: "Il fait froid",
				touristSpots: ["Le Château Frontenac", "Le Banff National Park"],
				famousFood: "Poutine"
			}
		},
		{
			name: "Bulgarie",
			temperature: 32,
			currency: "Bulgarian lev",
			image: "https://cdn.pixabay.com/photo/2019/03/07/21/59/sofia-4041209_1280.jpg",
			popupInfo:{
				culturalFacts: "La Bulgarie est connue pour sa musique folklorique!",
				touristSpots: ["Le Rila Monastery", "Sofia", "Plovdiv"],
				famousFood: "Banista"
			}
		}
	]
};

function ListOfItems() {
	const [selectedCountryIndex, setSelectedCountryIndex] = useState<number | null>(null);
	const windowpopup = (index: number) => {
		setSelectedCountryIndex(index); //met popup a true pour afficher la popup
	};
	const windowclosepopup = () => {
		setSelectedCountryIndex(null); //met la popup a false pour la re-cacher
	};
	return (
		<>
		  <div className={styles.container}>
			{fakeObject.countries.map((country, index) => (
			  <div
				key={index}
				className={styles.img}
				style={{
				  backgroundImage: `url(${country.image})`, // Utiliser l'image comme fond
				}}
			  >
				<div className={styles.textOverlay}>
				  <button type="button" onClick={() => windowpopup(index)}>More Info</button>
				  <h2>{country.name}</h2>
				  <p>Température : {country.temperature} °C</p>
				  <p>Devise : {country.currency}</p>
				</div>
			  </div>
			))}
		  </div>
	
		  {selectedCountryIndex !== null && (
			<PopUp
			  country={fakeObject.countries[selectedCountryIndex]} // Passer les données du pays à la pop-up
			  closePopup={windowclosepopup}
			/>
		  )}
		</>
	  );
	}
	

export default ListOfItems;