import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Signup } from "../views/signup.js";

export const Aiderprofile = () => {
    const { Store, actions } = useContext(Context);
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [contacted, setContacted] = useState(true); //ESTO ES UN INPUT NO UN STRING

    const submitData = () => {
        let aiderProfile = {
            fullname: fullname,
            phone: phone,
            contacted: contacted
        };
        let response = actions.Aiderprofile(aiderProfile);
    }

    return (
        <div className="container fisrt-row">
            <h3 className="text-center"> Aider's Profile  </h3>

            <div className="form-box">
                <label className="form-label"> Email: </label>
                <span> <input type="text" className="input-box " placeholder="Full Name" value="email@example.com"/> </span>  
            </div>

            <div className="form-box">
                <label className="form-label"> Full Name: </label>
                <span> <input className="input-box" required placeholder="Full Name" value={fullname} onChange={(e) => { setFullname(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Phone number: </label>
                <span> <input className="input-box" required placeholder="Phone number" value={phone} onChange={(e) => { setPhone(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Would you like to be contacted by the Organizations?: </label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="true" checked onChange={(e) => { setContacted(e.target.value) }} />
                    <label className="form-check-label">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="false" onChange={(e) => { setContacted(e.target.value) }} />
                    <label className="form-check-label">
                        No
                    </label>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <button type="button" onClick={submitData} className="btn form-button"> Save </button>
            </div>
        </div>
    )
}