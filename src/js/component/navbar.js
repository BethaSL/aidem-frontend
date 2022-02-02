import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
					<Link to="/orgprofile" className="navbar-link"> Profile</Link>
				</li>

				<li className="nav-item">
					<Link to="/aid" className="navbar-link"> Aid Them!</Link>
				</li>
			</ul>

			<form className="">
				<input className="form-control form-control-sm" type="text" placeholder="Organization's Search"/>
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
							<button className="dropdown-item" onClick={actions.logOut} type="button">Sign out</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};