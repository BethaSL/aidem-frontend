import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";


//EN LA LINEA 42 HAY QUE PONER EL LINK DE SING OUT**********


export const Navbar = () => {
	return (
		<div className="navbar fixed-top">
			<Link to="/">
				<img src={Logo} />
			</Link>

			<div className="btn-group">
				<button type="button" className="btn navbar-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Menu
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
				<li>
						<Link to="/organizations">
							<button className="dropdown-item" type="button">Our organizations</button>
						</Link>
					</li>
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