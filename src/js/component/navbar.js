import Logo from "../../img/logo.png";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-lg fixed-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><img src={Logo} /></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li><Link className="nav-link" to="/organizations">Organizations</Link></li>
						{store.token == undefined ?
							<>
								<li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/signin">Sign in</Link></li>
								<li className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
							</>
							:
							<>
								{store.user_type == "organization" ?  
								 	store.organization_name == "null" || store.organization_name == null || store.organization_name == "undefined" || store.organization_name == undefined ?
										<li><Link className="nav-link" to="/orgprofile">Profile</Link></li>
									: 
										<li><Link className="nav-link" to="/orgprofile">{store.organization_name}</Link></li>
									
									:store.full_name == "null" || store.full_name == null || store.organization_name == "undefined" || store.organization_name == undefined ?

										<li><Link className="nav-link" to="/aiderprofile">Profile</Link></li>
										: 
										<li><Link className="nav-link" to="/aiderprofile">{store.full_name}</Link></li>
								}
								<li><Link className="nav-link" to="/" onClick={actions.logOut}>Sign out</Link></li>
							</>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};