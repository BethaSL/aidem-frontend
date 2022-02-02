import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-lg fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="/"><img src={Logo} /></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li><a className="nav-link" href="/organizations">Organizations</a></li>
						<li><a className="nav-link" href="/orgprofile">Profile</a></li>
						<li><a className="nav-link" href="/aid">Aid them!</a></li>
						{store.token == undefined ?
							<>
								<li className="nav-item"> <a className="nav-link active" aria-current="page" href="/signin">Sign in</a></li>
								<li className="nav-item"><a className="nav-link" href="/signup">Signup</a></li>
							</>
							:
							<>
								<li><a className="nav-link" href="/" onClick={actions.logOut}>Sign out</a></li>
							</>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};

/* 
<div className="navbar navbar-expand-lg rounded fixed-top">
			<div className="navbar-logo">
				<Link to="/">
					<img src={Logo} />
				</Link>
			</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/signin" className="navbar-link"> Sing in </Link>
				</li>

				<li className="nav-item">
					<Link to="/signup" className="navbar-link"> Sign up</Link>
				</li>
			</ul>

			<div className="btn-group">
				<button type="button" className="btn navbar-button dropdown-toggle navbar-link" data-bs-toggle="dropdown">
					Menu
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					<li>
						<Link to="/organizations">
							<button className="dropdown-item" type="button">Organizations</button>
						</Link>
					</li>
					<li>
						<Link to="/orgprofile">
							<button className="dropdown-item" type="button">Profile</button>
						</Link>
					</li>
					<li>
						<Link to="/aid">
							<button className="dropdown-item" type="button">Aid them!</button>
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
*/