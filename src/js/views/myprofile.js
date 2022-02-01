import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Myprofile = () => {
    /*SE PUEDE PONER UN IF PARA QUE ENSE;E MAS O MENOS COSAS SEGUN EL TIPO DE USUARIO*/
    let user_type = 5;
    if (user_type == 1) {
        return (
            <div className="container fisrt-row">
                <h3> aider_NAME </h3>
                <div className="row">
                    <div className="col-4">
                        <img src="https://via.placeholder.com/300x200" className="myprofile-pic" alt="..." />
                    </div>

                    <div className="col">
                        <p> Email:</p>
                        <p> Phone:</p>
                    </div>

                    <div>
                        <div className="d-flex justify-content-center">
                            <Link to="/aiderprofile">
                                <button type="button" className="btn form-button"> Edit </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container fisrt-row">
                <h3> org_NAME </h3>
                <div className="row">
                    <div className="col-4">
                        <img src="https://via.placeholder.com/300x200" className="myprofile-pic" alt="..." />
                    </div>

                    <div className="col">
                        <p> Email:</p>
                        <p> Phone:</p>
                        <p> Address: </p>
                        <p> Rif: </p>
                        <p> Person on charge: </p>
                        <p> Status: </p>
                        <p> Bank: </p>
                        <p> Account number: </p>
                    </div>

                    <div>
                        <div className="d-flex justify-content-center">
                            <Link to="/orgprofile">
                                <button type="button" className="btn form-button"> Edit </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}