import { bool } from "prop-types";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
        var UserType = true;

        if ((password !== "" && password == authpassword)) {
            document.getElementById('PassErr').innerHTML = '';


        }
        else {
            document.getElementById('PassErr').style.color = 'red';
            document.getElementById('PassErr').innerHTML = 'Password Missmatch or blank';
            document.getElementById("input-password").focus();
            PasswordIsValid = false
        }

        if ((user_type !== "" && user_type !== "Select user type")) {

            document.getElementById('UserTypeError').innerHTML = '';

        } else {
            document.getElementById('UserTypeError').style.color = 'red';
            document.getElementById('UserTypeError').innerHTML = 'Please enter a valid User Type';
            document.getElementById("usertype").focus();
            UserType = false
        }
        if (emailRegex.test(email)) {

            document.getElementById('EmailErr').innerHTML = '';

        } else {
            document.getElementById('EmailErr').style.color = 'red';
            document.getElementById('EmailErr').innerHTML = 'Please enter a Valid Email';
            document.getElementById("input-id").focus();
            EmaiIsValid = false;
        }
        if ((EmaiIsValid == true) && (PasswordIsValid == true) && (UserType == true)) {
            let userRegister = {
                email: email,
                password: password,
                user_type: user_type
            }
            let response = actions.userReg(userRegister)
        }
    }

    return (
        <div className="container fisrt-row footer-down">
            <h1 className="text-center"> Sign up </h1>
            <div className="form-box">
                <form>
                    <div className="top-row">
                        <label className="form-label" htmlFor="input-id" > Email: </label>
                        <span> <input className="input-box" id="input-id" required placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} /> </span>
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
                            <select className="form-select" id="usertype" aria-label="custom-select mr-sm-2" onChange={(e) => { setUsertype(e.target.value) }}>
                                <option defaultValue={"Select user type"}>Select user type</option>
                                <option value="organization">Organization</option>
                                <option value="particular">Aider </option>
                            </select>
                        </span>
                    </div>

                    <div>
                        <p id='EmailErr' className="text-center"></p>
                        <p id='PassErr' className="text-center"></p>
                        <p id='UserTypeError' className="text-center"></p>
                    </div>


                    <div className="d-flex justify-content-center">
                        <Link to="/signin">
                        <button type="button" onClick={submitData} className="btn form-button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="singup-button"> Sign up &raquo;</button>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}