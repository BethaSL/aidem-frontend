import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Foto1 from "../../img/foto1.jpg";
import Foto2 from "../../img/foto2.jpg";
import Foto3 from "../../img/foto3.jpg";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Money from "../../img/money.png";


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container fisrt-row">
			<div className="row carrusel">
				<h3>News</h3>
				<Carousel fade>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Foto1}
							alt="First slide"
						/>
						<Carousel.Caption>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Foto2}
							alt="Second slide"
						/>

						<Carousel.Caption>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Foto3}
							alt="Third slide"
						/>

						<Carousel.Caption>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className="row carrusel">
				<h3> Achievements</h3>
				<div className="col-lg-3">
					<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#FFFFFF" dy=".3em">{store.organizations.length}</text></svg>

					<h2>Organizations</h2>
					<p>We are proud to be helping so many organizations that trust us every day to handdle their aids!</p>
				</div>

				<div className="col-lg-3">
					<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

					<h2>Aiders</h2>
					<p>Thank you to our Aiders who are always giving a hand on every way possible!</p>
				</div>

				<div className="col-lg-3">
					<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

					<h2>Financial Aid</h2>
					<p>So far this is what we have collected for our different organizations.</p>
				</div>

				<div className="col-lg-3">
					<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

					<h2>Volunteer Hours</h2>
					<p className="last-row">This is the amount of of time dedicated by our Aiders to our Organizations. </p>
				</div>
			</div>

			<div className="row">
				<h3>How to participate?</h3>
				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2>Financial aid</h2>
						<p className="lead">If you are a registered member you can send money to our Organizations.</p>
					</div>
					<div className="col-md-5">
						<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading">Oh yeah, it is that good. <span className="text-muted">See for yourself.</span></h2>
						<p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
					</div>
					<div className="col-md-5 order-md-1">
						<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
						<p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
					</div>
					<div className="col-md-5">
						<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

					</div>
				</div>

				<hr className="featurette-divider"></hr>
			</div>
		</div>

	)
};