import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Aiderprofile = () => {
    const { Store, actions } = useContext(Context);
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");

    const submitData = () => {
        let aiderProfile = {
            fullname: fullname,
            phone: phone
        };
        let response = actions.Aiderprofile(aiderProfile);
    }

    return (
        <div className="container fisrt-row">
            <h3 className="text-center"> Aider's Profile  </h3>
            <div className="form-box">
                <label className="form-label"> Full Name: </label>
                <span> <input className="input-box" required placeholder="Full Name" value={fullname} onChange={(e) => { setFullname(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Phone number: </label>
                <span> <input className="input-box" required placeholder="Phone number" value={phone} onChange={(e) => { setPhone(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Would you like to contacted by the Organizations?: </label>
                <div>
                    <input type="checkbox" className="form-check-input form-checkbox" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
                        Yes
                    </label>
                    
                    <input type="checkbox" className="form-check-input form-checkbox" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
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