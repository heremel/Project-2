import { Link } from "react-router";
import style from "../assets/styles/NavBar.module.css";


function NavBar() {
	return (
		<>
			<nav className={style.navbar}>
			<Link to="/"><img src="/src/assets/pictogram/picto_home.svg" alt="home" /></Link> 
			<Link to="/search"><img src="/src/assets/pictogram/picto_loup.svg" alt="search" /></Link>
			<Link to="/favorite"><img src="/src/assets/pictogram/picto_heart.svg" alt="my list" /></Link>
			</nav>
		</>
	);
}

export default NavBar;
