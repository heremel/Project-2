import styles from "./../assets/styles/PopUp.module.css";

type PopupInfo = {
	culturalFacts: string;
	touristSpots: string[];
	famousFood: string;
};

type Country = {
	name: string;
	temperature: number;
	currency: string;
	image: string;
	popupInfo: PopupInfo;
};

type PopUpProps = {
	country: Country;
	closePopup: () => void;
};

function PopUp({ country, closePopup }: PopUpProps) {
	const { popupInfo } = country;
	console.log("hola this is popup info :", popupInfo);
	return (
		<div className={styles.popUp}>
			<div className={styles.popupContent}>
				<h3>Informations supplémentaires</h3>
				<p>Culture : {popupInfo.culturalFacts}</p>
				<p>Tourists Spots : {popupInfo.touristSpots.join(", ")}</p>
				<p>Famous Dishes : {popupInfo.famousFood}</p>
				<button type="button" onClick={closePopup}>
					Fermer
				</button>
			</div>
		</div>
	);
}

export default PopUp;
