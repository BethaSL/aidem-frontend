import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signin = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const submitData = () => {
        console.log('me ejecuto desde Submit data')
        // let loggedUser = {user_email: email, user_password: password};
        // let response = actions.userAuth(loggedUser);
    }
    return (
        <div className="container fisrt-row">
            <h1 className="border text-center"> Sign in </h1>
            <div className="border form-box">
                {/* <form action="#">
                    <div className="top-row">
                        <label className="form-label" htmlFor="input-id"> Email: </label>
                        <span> <input className="input-box" id="input-id" value={email} required placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} /> </span>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="input-password"> Password: </label>
                        <span> <input className="input-box" id="input-password" type="password" value={password} required placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} /> </span>
                    </div>

                    <div className="d-flex justify-content-center">

                        <button className="form-button" id="singup-button"> Sign in </button>

                    </div>
                </form> */}
            </div>
        </div>
    )
};