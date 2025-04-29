import { Link } from "react-router";
import style from "../assets/styles/NavBar.module.css";


function NavBar() {
	return (
		<>
			<nav className={style.navbar}>
				<a href="/"><img src="../assets/pictogram/picto_home.svg" alt="home" /></a>
				<a href="/search"><img src="../assets/pictogram/picto_loupe.svg" alt="search" /></a>
			</nav>
		</>
	);
}

export default NavBar;
