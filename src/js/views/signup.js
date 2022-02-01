import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authpassword, setAuthPassword] = useState("");
    const [user_type, setUsertype] = useState("")


    const submitData = async () => {
        if (password == authpassword) {
            let userRegister = {
                email: email,
                password: password,
                user_type: user_type
            };

            let response = await actions.userReg(userRegister)
        }
        else { console.log("Password missmatch", password, authpassword) }
    }
    
    return (
        <div className="container fisrt-row">
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
                            <select className="form-select" aria-label="custom-select mr-sm-2" onChange={(e) => { setUsertype(e.target.value) }}>
                                <option defaultValue={"Select user type"}>Select user type</option>
                                <option value="organization">Organization</option>
                                <option value="particular">Aider </option>
                            </select>
                        </span>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={submitData} className="btn form-button" id="singup-button"> Sign up &raquo;</button>
                    </div>

                </form>
            </div>
        </div>
    )
};