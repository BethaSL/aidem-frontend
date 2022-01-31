import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";


//EN LA LINEA 42 HAY QUE PONER EL LINK DE SING OUT**********


export const Navbar = () => {
	return (
		<div className="navbar navbar-expand-lg navbar-light bg-light rounded fixed-top">
			<div className="navbar-logo">
				<Link to="/">
					<img src={Logo} />
				</Link>
			</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/organizations" className="navbar-link"> Organizations</Link>
				</li>

				<li className="nav-item">
					<Link to="/myprofile" className="navbar-link"> My profile</Link>
				</li>

				<li className="nav-item">
					<Link to="/aid" className="navbar-link"> Aid Them!</Link>
				</li>
			</ul>

			<form className="">
				<input className="form-control" type="text" placeholder="Organization's Search"/>
			</form>

			<div className="btn-group">
				<button type="button" className="btn navbar-button dropdown-toggle" data-bs-toggle="dropdown">
					<span className="navbar-toggler-icon"></span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					<li>
						<Link to="/signin">
							<button className="dropdown-item" type="button">Sign in</button>
						</Link>
					</li>
					<li>
						<Link to="/signup">
							<button className="dropdown-item" type="button">Sing up</button>
						</Link>
					</li>
					<li><hr className="dropdown-divider" /></li>
					<li>
						<Link to="/">
							<button className="dropdown-item" type="button">Sign out</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};