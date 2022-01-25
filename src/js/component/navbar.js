import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from "../../img/logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar color_1 mb-3">
			<Link to="/">
				<img src={Logo} />
			</Link>
			<div className="ml-auto">

				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Log In / Register
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Link to="/login"><Dropdown.Item href="#/action-1">Login</Dropdown.Item></Link>
						<Link to="/REGISTER"> <Dropdown.Item href="#/action-2">Register</Dropdown.Item> </Link>
					</Dropdown.Menu>
				</Dropdown>

			</div>
		</nav>
	);
};