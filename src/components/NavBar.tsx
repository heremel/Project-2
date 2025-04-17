import { Link } from "react-router";

// interface NavBarProps {
//     setMainContent: React.Dispatch<React.SetStateAction<MainType>>;
//     mainContent: MainType;
// }

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
