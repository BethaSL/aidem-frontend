import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signin = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    // const [errorPass, setErrorPass] = useState(false)
    // const [errorEmail, setErrorEmail] = useState(false)
    let history = useHistory();
    const emailRegex = /\S+@\S+\.\S+/;

    const submitData = async () => {
        // if(password.trim() == ""){
        //     setErrorPass(true)
        //     if(email.trim()== "") {}       
        // }
        // else
        // {
        //     setErrorPass(false)
        // }


        var EmaiIsValid = true;
        var PasswordIsValid = true;
        let loggedUser = {
            email: email,
            password: password
        };
        if ((password !== "")) {
            document.getElementById('PassErr').innerHTML = '';

        }
        else {
            document.getElementById('PassErr').style.color = 'red';
            document.getElementById('PassErr').innerHTML = 'Please Enter a Password';
            document.getElementById("input-password").focus();
            PasswordIsValid = false
        }

        if (emailRegex.test(email)) {
            document.getElementById('emailerror').innerHTML = 'Your email is valid';
            document.getElementById('emailerror').style.color = 'white';
        } else {
            document.getElementById('emailerror').style.color = 'red';
            document.getElementById('emailerror').innerHTML = 'Please enter a Valid Email';
            document.getElementById("input-id").focus();
            EmaiIsValid = false;
        }

        if ((PasswordIsValid == true) && EmaiIsValid == true ) {
            let response = await actions.userAuth(loggedUser);
            if (response.ok) {
                setError(false)
                history.push("/")
            } else {
                setError(true);
            }

        }
    }
    
    return (
        <div className="container fisrt-row footer-down">
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

                    <div>
                        <p id='PassErr' className="text-center"></p>
                        <p id='emailerror' className="text-center"></p>
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