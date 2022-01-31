import { bool } from "prop-types";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authpassword, setAuthPassword] = useState("");
    const [user_type, setUsertype] = useState("")
    const emailRegex = /\S+@\S+\.\S+/;

    const submitData = () => {
        var PasswordIsValid = true;
        var EmaiIsValid = true;
        
        if ((password !== "" && password == authpassword)  )  {
            document.getElementById('message').innerHTML = '';
            document.getElementById('message').style.color = 'white';

        }
        else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'Password Missmatch or blank';
            PasswordIsValid = false
        }
        if (emailRegex.test(email)) {

            document.getElementById('message2').innerHTML = '';
            document.getElementById('message2').style.color = 'white';
            
        } else {
            document.getElementById('message2').style.color = 'red';
            document.getElementById('message2').innerHTML = 'Please enter a Valid Email';
            EmaiIsValid = false;
        }
        if ((EmaiIsValid == true) && (PasswordIsValid == true)) {
            let userRegister = {
                email: email,
                password: password,
                user_type: user_type
            }
            let response = actions.userReg(userRegister)

        }
        else {
            console.log('stuff not submitted')
        }

    }

    return (
        <div className="container fisrt-row">
            <h1 className="text-center"> Sign up </h1>
            <div className="form-box">
                <form>
                    <div className="top-row">
                        <label className="form-label" htmlFor="input-id" > Email: </label>
                        <span> <input className="input-box" id="input-id" required placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} /> </span>

                    </div>

                    <div>
                        <label className="form-label" htmlFor="input-password" > Password: </label>
                        <span> <input className="input-box" id="input-password" type="password" value={password} required placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} /> </span>
                    </div>

                    <div>
                        <label className="form-label" htmlFor="input-authpassword" > Confirm Password: </label>
                        <span> <input className="input-box" id="input-authpassword" type="password" value={authpassword} required placeholder=" Confirm Password" onChange={(e) => { setAuthPassword(e.target.value) }} /> </span>

                    </div>

                    <div className="dropdown form-dropdown last-row">
                        <label className="form-label" htmlFor="dd-user-type" >User type: </label>
                        <span className="d-flex aligne-content-center">
                            <select className="form-select" aria-label="Default select example" onChange={(e) => { setUsertype(e.target.value) }}>
                                <option defaultValue={"Select user type"}>Select user type</option>
                                <option value="organization">Organization</option>
                                <option value="particular">Aider (inidividual)</option>
                                <option value="business">Aider (business)</option>
                            </select>
                        </span>
                    </div>

                    <br />

                    <span id='message' className="input-box"><br /></span>
                    <br />

                    <span id='message2' className="input-box"><br /></span>
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={submitData} className="btn form-button" id="singup-button"> Sign up </button>
                    </div>
                </form>
            </div>
        </div>
    )
};