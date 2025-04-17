import { Link } from "react-router";

function NavBar() {
	return (
		<>
			<nav>
				<Link to="/about">About</Link>
				<Link to="/search">Research</Link>
			</nav>
		</>
	);
}

export default NavBar;
