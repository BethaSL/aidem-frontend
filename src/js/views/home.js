import React from "react";
import { Orgs } from "../component/orgs.js";
import { Achievements } from "../component/achievements.js";
import { News } from "../component/news.js";
import  Carousel from "react-elastic-carousel";
import "../../styles/home.css";

export const Home = () => (
	<div className="container">
		<div className="row">
			<h1 className="m-3">News</h1>


			
<Carousel>
<News newstitle='Placeholder 1' newsdesc='Description'/>
<News newstitle='Placeholder 2' newsdesc='Description'/>
<News newstitle='Placeholder 3' newsdesc='Description'/>
<News newstitle='Placeholder 4' newsdesc='Description'/>
      </Carousel>

		</div>

		<div className="row ">
			<h1 className="m-3">Organizations</h1>
			<Carousel>
			<Orgs orgname='Nombre de Org 1' orgtype='Children' description='Description' />
			<Orgs orgname='Nombre de Org 2' orgtype='Elderly' description='Description' />
			<Orgs orgname='Nombre de Org 3' orgtype='Other' description='Description' />
			</Carousel>
		</div>

		<h1 className="m-3">Achievements</h1>

		<div className="row align-items-center border border-primary p-4 logros">
			<Achievements data='#' title='Aiders' />
			<Achievements data='#' title='Organizations' />
			<Achievements data='#' title='Money' />
			<Achievements data='#' title='Volunteer Hours' />



		</div>
	</div>
);