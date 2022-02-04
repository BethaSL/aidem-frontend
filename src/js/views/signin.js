import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signin = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authError, setAuthError] = useState(false)
    const [errorPass, setErrorPass] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    let history = useHistory();
    const emailRegex = /\S+@\S+\.\S+/;

    const submitData = async () => {
        
      
       
        if (emailRegex.test(email) !== true) {
            setErrorEmail(true)
        }
        else if (password.trim() == "") {
            setErrorPass(true)
            setErrorEmail(false)

        } else
     {

            setErrorPass(false)
            setErrorEmail(false)
            let loggedUser = {
                email: email,
                password: password
            };
            let response = await actions.userAuth(loggedUser);
          
            if (localStorage.token != null) {
                 setAuthError(false)
                 actions.getProfileInfo()
                 history.push("/")
             } else {
                  setAuthError(true);

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
                        {errorEmail ? <div className="alert alert-danger text-center"> Check your Email </div> : null}
                        {errorPass ? <div className="alert alert-danger text-center">Please enter your password</div> : null}
                        {authError ? <div className="alert alert-danger text-center"> There was a Problem with yout credentials</div> : null}
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={submitData} className="btn last-row form-button" id="singup-button"> Sign in &raquo;</button>
                    </div>
                </form>



            </div>
        </div>
    )
};