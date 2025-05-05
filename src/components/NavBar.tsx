import { NavLink } from "react-router-dom";
import style from "../assets/styles/NavBar.module.css";

const navIcon = [
	{to: "/", src: "/src/assets/pictogram/picto_home.svg", alt: "home"},
	{to: "/search", src: "/src/assets/pictogram/picto_loup.svg", alt: "search"},
	{to: "/favorite", src: "/src/assets/pictogram/picto_heart.svg", alt: "favorite"}
]

function NavBar() {
	return (
		<>
			<nav className={style.navbar}>
  			{navIcon.map((icon) => (
    			<NavLink  key={icon.to} to={icon.to}  className={({ isActive }) => isActive ? `${style.navIcon} ${style.active}` : style.navIcon}>
      				<img src={icon.src} alt={icon.alt} />
    			</NavLink>))}
			</nav>
		</>
	);
}

export default NavBar;
