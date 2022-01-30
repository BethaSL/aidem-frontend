import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Aid = () => {
    const { Store, actions } = useContext(Context);
    const [organization, setOrganization] = useState("");
    const [aid_type, setAidtype] = useState("");
    
    const submitData = () => {
        let aid = {
            organization: organization,
            aid_type: aid_type
        };
        let response = actions.Aid(aid);
    }
    return (
        <div className="container fisrt-row">
            <h3 className="text-center"> Aid Them! </h3>
            <div className="dropdown form-dropdown last-row">
                <label className="form-label" > Organization: </label>
                <span className="d-flex align-content-center">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => { setOrganization(e.target.value) }}>
                        <option defaultValue={"Select organization"}>Select an Organization</option>
                        <option value="financial">Financial</option>
                        <option value="supplies">Supplies</option>
                        <option value="event">Event</option>
                        <option value="ride">Offer a ride</option>
                        <option value="other">Other</option>
                    </select>
                </span>
            </div>

            <div className="dropdown form-dropdown ">
                <label className="form-label" > Aid type: </label>
                <span className="d-flex align-content-center">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => { setAidtype(e.target.value) }}>
                        <option defaultValue={"Select aid type"}>Select aid type</option>
                        <option value="financial">Financial</option>
                        <option value="supplies">Supplies</option>
                        <option value="event">Event</option>
                        <option value="ride">Offer a ride</option>
                        <option value="other">Other</option>
                    </select>
                </span>
            </div>

            <div className="form-box last-row">
                <label className="form-label"> Anonymus?: </label>
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
                <button type="button" onClick={submitData} className="btn form-button"> Send </button>
            </div>
        </div>
    )
}