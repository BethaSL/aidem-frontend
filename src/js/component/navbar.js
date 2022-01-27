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
			<Link to="/login">
				<button className="nav-button"> Log in / Sign up </button>
			</Link>
		</div>
	);
};