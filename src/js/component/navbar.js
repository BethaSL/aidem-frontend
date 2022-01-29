import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<div className="navbar fixed-top">
			<Link to="/">
				<img src={Logo} />
			</Link>
			
			<Link to="/signin">
				<button type="button" className="nav-button"> Sign in </button>
			</Link>

			<Link to="/signup">
				<button type="button" className="nav-button"> Sign up </button>
			</Link>
		</div>
	);
};