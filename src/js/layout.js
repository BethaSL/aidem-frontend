import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { Organizations } from "./views/organizations.js";
import { Signup } from "./views/signup.js";
import { Signin } from "./views/signin.js";
import { Regorg } from "./views/RegOrg";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/organizations">
							<Organizations />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/signin">
							<Signin />
						</Route>
						<Route exact path="/regorg">
							<Regorg />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
