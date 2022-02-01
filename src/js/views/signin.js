import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signin = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    let history = useHistory();

    const submitData = async () => {
        let loggedUser = {
            email: email,
            password: password
        };

        let response = await actions.userAuth(loggedUser);
        if(response.ok) {
            setError(false)
            history.push("/")
        } else {
            setError(true);
        }
    }
    return (
        <div className="container fisrt-row">
            <h1 className="text-center"> Sign in </h1>
            <div className="form-box">
                <form>
                    <div className="top-row">
                        <label className="form-label" htmlFor="input-id"> Email: </label>
                        <span> <input className="input-box" id="input-id" type="email" value={email} required placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} /> </span>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="input-password"> Password: </label>
                        <span> <input className="input-box" id="input-password" type="password" value={password} required placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} /> </span>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={submitData} className="btn last-row form-button" id="singup-button"> Sign in &raquo;</button>
                    </div>
                </form>

                {error ? <div className="alert alert-danger"> Authentication error </div> : null}

            </div>
        </div>
    )
};