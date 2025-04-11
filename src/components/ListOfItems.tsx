import styles from "./../assets/styles/ListOfItems.module.css";
import Item from "./Item";
import PopUp from "./PopUp";
import { useState } from "react";

export const fakeObject = {
	countries: [
		{
			name: "France",
			temperature: 12,
			currency: "Euro",
			image:
				"https://img.freepik.com/photos-gratuite/capture-verticale-magnifique-tour-eiffel-capturee-paris-france_181624-45445.jpg",
			popupInfo: {
				culturalFacts: "J'en ai pas",
				touristSpots: [
					"The Eiffel Tower",
					"The Louvre",
					"The Mont Saint-Michel",
				],
				famousFood: "Baguette, Croissant",
			},
		},
		{
			name: "Canada",
			temperature: -5,
			currency: "Dollar Canadien",
			image:
				"https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			popupInfo: {
				culturalFacts: "Il fait froid",
				touristSpots: ["Le Château Frontenac", "Le Banff National Park"],
				famousFood: "Poutine",
			},
		},
		{
			name: "Bulgarie",
			temperature: 32,
			currency: "Bulgarian lev",
			image:
				"https://cdn.pixabay.com/photo/2019/03/07/21/59/sofia-4041209_1280.jpg",
			popupInfo: {
				culturalFacts: "La Bulgarie est connue pour sa musique folklorique!",
				touristSpots: ["Le Rila Monastery", "Sofia", "Plovdiv"],
				famousFood: "Banista",
			},
		},
		{
			name: "Japon",
			temperature: 16,
			currency: "Yen",
			image:
				"https://img.freepik.com/free-photo/beautiful-aerial-shot-modern-city-architecture-with-illuminated-tower-side_181624-1714.jpg?semt=ais_hybrid&w=740",
			popupInfo: {
				culturalFacts:
					"Le Japon est réputé pour sa technologie avancée et sa culture traditionnelle.",
				touristSpots: ["Mont Fuji", "Temple Senso-ji", "Château d'Osaka"],
				famousFood: "Sushi, Ramen",
			},
		},
	],
};

function ListOfItems() {
	const [selectedCountryIndex, setSelectedCountryIndex] = useState<
		number | null
	>(null);
	const windowpopup = (index: number) => {
		setSelectedCountryIndex(index);
	};
	const windowclosepopup = () => {
		setSelectedCountryIndex(null);
	};
	return (
		<>
			<div className={styles.container}>
				{fakeObject.countries.map((country, index) => (
					<Item />
				))}
			</div>
			{selectedCountryIndex !== null && (
				<PopUp
					country={fakeObject.countries[selectedCountryIndex]}
					closePopup={windowclosepopup}
				/>
			)}
		</>
	);
}

export default ListOfItems;
