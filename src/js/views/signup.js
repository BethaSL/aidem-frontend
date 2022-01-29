import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitData = () => {
        let userRegister = {
            email: email,
            password: password,
            username: username
        }
        let response = actions.userReg(userRegister);
    }
    return (
        <div className="container fisrt-row">
            <h1 className="text-center"> Sign up </h1>
            <div className="form-box">
                <form>
                    <div className="top-row">
                        <label className="form-label" htmlFor="input-id"> Email / Username: </label>
                        <span> <input className="input-box" id="input-id" required placeholder="Email / Username" /> </span>
                    </div>

                    <div>
                        <label className="form-label" htmlFor="input-password"> Password: </label>
                        <span> <input className="input-box" id="input-password" required placeholder="Password" /> </span>
                    </div>

                    <div>
                        <label className="form-label" htmlFor="input-password"> Confirm Password: </label>
                        <span> <input className="input-box" id="input-password" required placeholder="Password" /> </span>
                    </div>

                    <div className="dropdown form-dropdown">
                        <label className="form-label" htmlFor="dd-user-type"> Choose a user type: </label>
                        <span>
                            <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                User type
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Organization</a></li>
                                <li><a className="dropdown-item" href="#">Aider (personal)</a></li>
                                <li><a className="dropdown-item" href="#">Aider (business)</a></li>
                            </ul>
                        </span>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={submitData} className="form-button" id="singup-button"> Sign up </button>
                    </div>
                </form>
            </div>
        </div>
    )
};