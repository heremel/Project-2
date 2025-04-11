import styles from "../assets/styles/ListOfItems.module.css"

function Item(){
	return(
			<div
				key={index}
				className={styles.img}
				style={{
				  backgroundImage: `url(${country.image})`,
				}}
			  >
				<div className={styles.textOverlay}>
				  <button type="button" onClick={() => windowpopup(index)}>More Info</button>
				  <h2>{country.name}</h2>
				  <p>Température : {country.temperature} °C</p>
				  <p>Devise : {country.currency}</p>
				</div>
			  </div>
			  )
}
export default Item;