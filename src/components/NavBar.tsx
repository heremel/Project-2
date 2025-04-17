import { Link } from "react-router";

function NavBar() {
	return (
		<>
			<nav>
				<Link to="/">About</Link>
				<Link to="/search">Research</Link>
			</nav>
		</>
	);
}

export default NavBar;
