import React, { useState } from "react";
import styles from "./../assets/styles/PopUp.module.css";
import ListOfItems from "./ListOfItems";

function PopUp(){
	const [isPopupOpen, setIsPopupOpen] = useState(false); //false pour cacher la popup par défault

	const windowpopup = () => {
			setIsPopupOpen(true); //met popup a true pour afficher la popup
	};
	const windowclosepopup = () => {
		setIsPopupOpen(false); //met la popup a false pour la re-cacher
	};

	return(
		<>
		<button type="button" onClick={windowpopup}>More Info</button>
		<button type="button" onClick={windowclosepopup}>Close</button>
		{isPopupOpen && (
          <div className={styles.popUp}>
			<h1>boo</h1>
		  </div>
      	)}
		</>
	)
}

export default PopUp;