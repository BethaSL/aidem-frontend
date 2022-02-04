import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="row footer">
		<div className="row">
			<div className="col-2">
				<h6><strong>Contact</strong></h6>
				<ul className="nav flex-column">
					<li className="footer-link"> <Link to="mailto:contact@aidem.com"> contact@aidem.com </Link> </li>
					<li> 555 555 555 </li>
				</ul>
			</div>

			<div className="col-4">
				<h6><strong>Community</strong></h6>
				<ul className="nav flex-column">
					<li className="footer-link">
						<Link to="/organizations" className="footer-link">
							Our organizations
						</Link>
					</li>
					<li>
						<Link to="/signup" className="footer-link">
							Become member of the Aid'em community
						</Link>
					</li>
				</ul>
			</div>

			<div className="col-4 offset-1">
				<form>
					<h6><strong>Subscribe to our newsletter</strong></h6>
					<div className="d-flex w-100">
						<input id="newsletter1" type="text" className="form-control form-control-sm" placeholder="Email address" />
						<button className="btn btn-sm form-button" type="button">Subscribe</button>
					</div>
				</form>
			</div>
		</div>
	</footer>
);