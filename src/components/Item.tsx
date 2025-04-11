import styles from "../assets/styles/ListOfItems.module.css";

function Item({ currentCountry, handleClickPopup }) {
	return (
		<div
			className={styles.img}
			style={{
				backgroundImage: `url(${currentCountry.image})`,
			}}
		>
			<div className={styles.textOverlay}>
				<button type="button" onClick={() => handleClickPopup(currentCountry)}>
					More Info
				</button>
				<h2>{currentCountry.name}</h2>
				<p>Température : {currentCountry.temperature} °C</p>
				<p>Devise : {currentCountry.currency}</p>
			</div>
		</div>
	);
}
export default Item;
