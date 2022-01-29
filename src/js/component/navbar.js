import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';

export const Navbar = () => {
	return (
		<div className="navbar fixed-top">
			<Link to="/">
				<img src={Logo} />
			</Link>
			
			<Link to="/signin">
				<button className="nav-button"> Sign in </button>
			</Link>

			<Link to="/signup">
				<button className="nav-button"> Sign up </button>
			</Link>
		</div>
	);
};