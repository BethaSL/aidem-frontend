import React, { Component } from "react";

export const News = ({ newstitle, newsdesc }) => (

  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">{newstitle}</h1>
      <p className="lead">{newsdesc}</p>
      <a className="btn btn-primary btn-sm" href="#" role="button">More Info</a>
    </div>
  </div>
);