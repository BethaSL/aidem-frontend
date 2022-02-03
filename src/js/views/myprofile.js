import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Myprofile = () => {
    return (
        <div className="container fisrt-row">
            <h3> aider_NAME </h3>
            <div className="row">
                <div className="col-4">
                    <img src="https://via.placeholder.com/300x200" className="myprofile-pic" alt="..." />
                </div>

                <div className="col">
                    <p> REVIEW DE LA ORG</p>
                </div>

                <div>
                    <div className="d-flex justify-content-center">
                        <Link to="/aid">
                            <button type="button" className="btn form-button"> Adi'em! </button>
                        </Link>
                        <Link to="/">
                            <button type="button" className="btn form-button"> Go back </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}