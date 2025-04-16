import styles from "./../assets/styles/PopUp.module.css";

type MoreInfoType = {
	culturalFacts: string;
	touristSpots: string[];
	famousFood: string;
};

type Country = {
	name: string;
	temperature: number;
	currency: string;
	image: string;
	moreInfo: MoreInfoType;
};

type MoreInfoProps = {
	country: Country;
	closePopup: () => void;
};

function More_Info({ country, closePopup }: MoreInfoProps) {
	const { moreInfo } = country;
	console.log("Test", moreInfo);
	return (
		<h1>Meow</h1>
		// <button type="button" onClick={closePopup}>
		// 	Fermer
		// </button>
	);
}

export default More_Info;
