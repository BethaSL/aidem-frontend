import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Carousel from 'react-bootstrap/Carousel'
import Foto1 from "../../img/foto1.jpg";
import Foto2 from "../../img/foto2.jpeg";
import Foto3 from "../../img/foto3.jpg";
import Money from "../../img/money.png";
import Supplies from "../../img/supplies.png";
import Events from "../../img/events.png";
import Car from "../../img/car.png";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container first-row">
			<p className="hola"> Hola, {store.organization_name}</p>
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
							<h4 className="carrusel-caption">These furry friends were adopted during our latest event with Happy Doggies!</h4>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Foto2}
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h4 className="carrusel-caption"><span><strong> Aider! </strong></span>
								Next week Granny's is celebrating its 5 years aniversary, contact them to participate or collaborate as you can!
							</h4>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Foto3}
							alt="Third slide"
						/>
						<Carousel.Caption>
							<h4 className="carrusel-caption">
								Remember we are collecting toys for the Ronald McDonalds event next month.
							</h4>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>

			<div className="row carrusel">
				<h3> Achievements</h3>
				<div className="col">
					<h6 className="rounded-circle text-center display-1 home-circle"> <strong> {store.organizations.length} </strong> </h6>
					<h2>Organizations</h2>
					<p>We are proud to be helping so many organizations that trust us every day to handdle their aids!</p>
				</div>

				<div className="col-lg-3">
					<h6 className="rounded-circle text-center display-1 home-circle"> <strong> {store.aiders.length}</strong> </h6>
					<h2>Aiders</h2>
					<p>Thank you to our Aiders who are always giving a hand on every way possible!</p>
				</div>

				<div className="col-lg-3">
					<h6 className="rounded-circle text-center display-1 home-circle"> <strong> {store.countries.length} </strong> </h6>
					<h2>Countries</h2>
					<p>Our Aiders and Organizations come from accross the world. <span><strong>We are global!</strong></span></p>
				</div>

				<div className="col-lg-3">
					<h6 className="rounded-circle text-center display-1 home-circle"> <strong> 120 </strong> </h6>
					<h2>Volunteer Hours</h2>
					<p className="last-row">This is the amount of of time dedicated by our Aiders to our Organizations. </p>
				</div>
			</div>

			<div className="row">
				<h3>How to participate?</h3>
				<div className="row featurette">
					<div className="col">
						<h2>Financial aid</h2>
						<p className="lead">If you are a registered member you can send money to our Organizations.</p>
					</div>
					<div className="col-4">
						<img src={Money} className="d-flex justify-content-between" width="350" height="350" />
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col order-md-2">
						<h2 className="featurette-heading">Supplies</h2>
						<p className="lead">As a registred member you can provide food, clothes (in good state) or any kind of good that can be useful to our Organizations.</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img src={Supplies} className="d-flex justify-content-between" width="350" height="350" />
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">Events</h2>
						<p className="lead">Our Adiers can participate or create events with our Organizations. It can be a meal or just give some company.</p>
					</div>
					<div className="col-md-5">
						<img src={Events} className="d-flex justify-content-between" width="350" height="350" />
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col order-md-2">
						<h2 className="featurette-heading">Rides</h2>
						<p className="lead">When you become an Aider you can choose to be contacted by our Organizations and plan a ride to somewhere they need.</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img src={Car} className="d-flex justify-content-between" width="350" height="350" />
					</div>
				</div>
			</div>
		</div>
	)
};