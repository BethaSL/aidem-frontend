import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authpassword, setAuthPassword] = useState("");
    const [errorExists, seterrorExists] = useState(false)
    const [errorUserType, seterrorUserType] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPass, setErrorPass] = useState(false)
    const [user_type, setUsertype] = useState("")
    let history = useHistory();
    const emailRegex = /\S+@\S+\.\S+/;

    const submitData = async () => {
       
        if (emailRegex.test(email) !== true) {
            setErrorEmail(true)
        }
        else if ((password.trim() == "") || (password != authpassword)) {
            setErrorPass(true)
            setErrorEmail(false)

        } else if (user_type.trim() == "") {
            seterrorUserType(true)
            setErrorPass(false)
            setErrorEmail(false)

        }
        else {
            seterrorUserType(false)
            setErrorPass(false)
            setErrorEmail(false)
            
            let userRegister = {
                email: email,
                password: password,
                user_type: user_type
            }
             actions.userReg(userRegister);
             //need to verify a susccesfull sign in before going to:
             // history.push also implement an user facing message using seterrorExists
             history.push("/signin")               
        }
    }

    return (
        <div className="container first-row footer-down">
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
                                <option value={"Select user type"}>Select user type</option>
                                <option value="organization">Organization</option>
                                <option value="particular">Aider</option>
                            </select>
                        </span>
                    </div>

                    <div>

                        {errorEmail ? <div className="alert alert-danger text-center"> Check your Email </div> : null}
                        {errorPass ? <div className="alert alert-danger text-center"> Password Mismatch or Blank</div> : null}
                        {errorUserType ? <div className="alert alert-danger text-center">No User Type Selected</div> : null}
                        {errorExists ? <div className="alert alert-danger text-center">Email already in use.</div> : null}

                    </div>


                    <div className="d-flex justify-content-center">

                        <button type="button" onClick={submitData} className="btn form-button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="singup-button"> Sign up &raquo;</button>

                    </div>

                </form>
            </div>
        </div>
    )
}