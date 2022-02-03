import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Aid = () => {
    const { store, actions } = useContext(Context);
    const [organization, setOrganization] = useState("");
    const [aid_type, setAidtype] = useState("");
    const [aid_status, setAidstatus] = useState("");

    const submitData = () => {
        let aid = {
            organization: organization,
            aid_type: aid_type
        };
        let response = actions.Aid(aid);
    }
    return (
        <div className="container fisrt-row footer-down">
            <h3 className="text-center"> Aid Them! </h3>
            <div>
                <label className="form-label" > Organization: </label>
                <span className="d-flex align-content-center">
                    <input readOnly className="input-box" value={store.orgbyid.organization_name} />
                </span>
            </div>

            <div className="dropdown form-dropdown aid-input">
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

            <div className="aid-input d-flex">
                <label className="form-label">Anonymus?: </label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="true" checked onChange={(e) => { setStatus(e.target.value) }} />
                    <label className="form-check-label">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="false" onChange={(e) => { setStatus(e.target.value) }} />
                    <label className="form-check-label">
                        No
                    </label>
                </div>
            </div>

            <div className="dropdown form-dropdown aid-input last-row">
                <label className="form-label" > Aid status: </label>
                <span className="d-flex align-content-center">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => { setAidstatus(e.target.value) }}>
                        <option defaultValue={"on the way"}>On the way</option>
                        <option value="accept">Accepted</option>
                        <option value="receive">Received</option>
                        <option value="delay">Delayed</option>
                        <option value="cancel">Cancelled</option>
                    </select>
                </span>
            </div>

            <div className="d-flex justify-content-center">
                <button type="button" onClick={submitData} className="btn form-button"> Send </button>

                <Link to="/organizations">
                    <button type="button" className="btn form-button"> Go back </button>
                </Link>
            </div>
        </div>
    )
}