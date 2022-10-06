import { useRef } from "react";
import "./NavBar.css";

function Navbar() {
	const navRef = useRef();

    return (
		<header>
			<img src="images/pokeball.png" className="logo" alt="" />
			<h3 className="title">POKEMON APP</h3>
			<nav ref={navRef}>
				<a href="/favouritePokemons">Favourite Pokemons</a>
			</nav>
		</header>
	);
}

export default Navbar;