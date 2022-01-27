import React from "react";
import { Link } from "react-router-dom";

export const Login = () => (
    <div className="container fisrt-row">
        <h1 className="border text-center"> Log In </h1>
        <div className="border form-box">
            <form action="#">
                <div className="top-row">
                    <label className="form-label" for="input-id"> Email / Username: </label>
                    <span> <input className="input-box" id="input-id" required placeholder="Email / Username" /> </span>
                </div>

                <div>
                    <label className="form-label" for="input-password"> Password: </label>
                    <span> <input className="input-box" id="input-password" required placeholder="Password" /> </span>
                </div>

                <div className="d-flex justify-content-center">
                    <Link to="/">
                        <button className="form-button" id="login-button"> Log in </button>
                    </Link>
                    <Link to="/">
                        <button className="form-button" id="singup-button"> Sign up </button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
);
