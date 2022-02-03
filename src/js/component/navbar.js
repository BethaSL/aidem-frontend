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
						{store.token == undefined ?
							<>
								<li className="nav-item"> <a className="nav-link active" aria-current="page" href="/signin">Sign in</a></li>
								<li className="nav-item"><a className="nav-link" href="/signup">Sign up</a></li>
							</>
							:
							<>
								{store.user_type == "organization" ?
									<li><a className="nav-link" href="/orgprofile">Profile</a></li>
									:
									<li><a className="nav-link" href="/aiderprofile">Profile</a></li>
								}

								<li><a className="nav-link" href="/aid">Aid them!</a></li>
								<li><a className="nav-link" href="/" onClick={actions.logOut}>Sign out</a></li>
							</>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};