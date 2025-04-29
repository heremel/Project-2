import { Link } from "react-router";

function NavBar() {
	return (
		<>
			<nav>
				<Link to="/">About</Link>
				<Link to="/search">Research</Link>
				<Link to="/favorite">My List</Link>
			</nav>
		</>
	);
}

export default NavBar;
