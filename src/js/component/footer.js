import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="row footer fixed-bottom">
		<div className="row">
			<div className="col-2">
				<h6><strong>Contact</strong></h6>
				<ul className="nav flex-column">
					<li className="footer-link"> <a href="mailto:contact@aidem.com"> contact@aidem.com </a> </li>
					<li> 555 555 555 </li>
					<li className="nav-item"> Caracas, Venezuela </li>
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
							Be a member of the Aid'em community
						</Link>
					</li>
					<li>
						<Link to="/" className="footer-link">
							Checkout the latest news
						</Link>
					</li>
				</ul>
			</div>

			<div className="col-4 offset-1">
				<form>
					<h6><strong>Subscribe to our newsletter</strong></h6>
					<p>Monthly digest of our top organizations and latest events</p>
					<div className="d-flex w-100 gap-2">
						<input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
						<button className="btn form-button" type="button">Subscribe</button>
					</div>
				</form>
			</div>
		</div>
	</footer>
);