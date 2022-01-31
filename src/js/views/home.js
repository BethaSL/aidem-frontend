import React from "react";
import Foto1 from "../../img/foto1.jpg";
import Foto2 from "../../img/foto2.jpg";
import Foto3 from "../../img/foto3.jpg";
/*import { Orgs } from "../component/orgs.js";
import { Achievements } from "../component/achievements.js";
import { News } from "../component/news.js";
import Carousel from "react-elastic-carousel";*/

export const Home = () => {
	return (
		<div className="container fisrt-row">
			<div className="row">
				<h3>News</h3>
				<div className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-slide-to="0" className="active"></li>
						<li data-slide-to="1"></li>
						<li data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100" src={Foto1} alt="First slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src={Foto2} alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src={Foto3} alt="Third slide" />
						</div>
					</div>
					<a className="carousel-control-prev" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>

			<div className="row">
				<h3> Achievements</h3>
				<div className="col-lg-3">
					<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

					<h2>Organizations</h2>
					<p>We are proud to be helping so many organizations that trust us every day to handdle their adis!</p>
				</div>

				<div className="col-lg-3">
					<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

					<h2>Aiders</h2>
					<p>Thank you to aour Aiders who are always giving a hand on every way possible!</p>
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
				<h3>Popular Organizations</h3>
				<hr className="featurette-divider"/>

					<div className="row featurette">
						<div className="col-md-7">
							<h2>Organization's name</h2>
							<p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
						</div>
						<div className="col-md-5">
							<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

						</div>
					</div>

					<hr className="featurette-divider"/>

						<div className="row featurette">
							<div className="col-md-7 order-md-2">
								<h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
								<p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
							</div>
							<div className="col-md-5 order-md-1">
								<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

							</div>
						</div>

						<hr className="featurette-divider"/>

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