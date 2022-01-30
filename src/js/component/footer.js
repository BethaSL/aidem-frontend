import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="row footer fixed-bottom">
		<div className="col-2">
			Contact us:
			<p>
				<a href="mailto:contact@aidem.com"> contact@aidem.com </a>
			</p>
		</div>

		<div className="col-4">
			<Link to="/signup" className="footer-link">
				Become a member of the Aid'em comuinity
			</Link>
			<p>
				<Link to="/organizations" className="footer-link">
					Our organizations
				</Link>
			</p>
		</div>

		<div className="col-4">
			<Link to="/" className="footer-link">
				Checkout the latest news
			</Link>
		</div>
	</footer>
);