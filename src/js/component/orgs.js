import React, { Component } from "react";

export const Orgs = ({orgname,orgtype,description}) => (

		<div className="p-4 card align-center container-fluid">
  <div className="card-header">
    {orgname}
  </div>
  <div className="card-body">
    <h5 className="card-title">{orgtype}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary btn-sm">Go to Profile</a>
  </div>
</div>
	
);