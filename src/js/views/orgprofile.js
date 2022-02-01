import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Orgprofile = () => {
    const { Store, actions } = useContext(Context);
    const [orgname, setOrgname] = useState("");
    const [address, setAddress] = useState("");
    const [rif, setRif] = useState("");
    const [persononcharge, setPersononcharge] = useState("");
    const [bankname, setBankname] = useState("");
    const [accountnum, setAccountnum] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("")
    const [orgtype, setOrgtype] = useState("")
    const [orgreview, setOrgreview] = useState("");
    const [status, setStatus] = useState(true)

    const submitData = () => {
        let orgProfile = {
            description: description,
            organization_type: orgtype,
            organization_name: orgname,
            rif: rif,
            phone: phone,
            address: address,
            person_oncharge: persononcharge,
            status: contacted,          
            bankname: bankname,
            accountnum: accountnum,
            phone: phone,
            orgreview: orgreview,
        };
        let response = actions.Orgprofile(orgProfile);
    }

    return (
        <div className="container fisrt-row">
            <h3 className="text-center"> Organization's Profile  </h3>
            <div className="form-box">
                <label className="form-label" htmlFor="input-name"> Organization's Name: </label>
                <span> <input className="input-box" id="input-name" required placeholder="Organization Name" value={orgname} onChange={(e) => { setOrgname(e.target.value) }} /> </span>
            </div>
            <div className="dropdown form-dropdown last-row">
                <label className="form-label" htmlFor="dd-user-type" >Organization type: </label>
                <span className="d-flex aligne-content-center">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => { setOrgtype(e.target.value) }}>
                        <option defaultValue={"Select organization type"}>Select organization type</option>
                        <option value="elderly">Elderly</option>
                        <option value="children">Children</option>
                        <option value="others">Others</option>
                    </select>
                </span>
            </div>
            <div className="form-box">
                <label className="form-label"> Description: </label>
                <span> <input className="input-box" required placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Email: </label>
                <span> <input type="text" className="input-box " placeholder="Full Name" value="email@example.com" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label" htmlFor="input-address"> Address: </label>
                <span> <input className="input-box" id="input-address" required placeholder="Address" value={address} onChange={(e) => { setAddress(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label" htmlFor="input-rif"> Rif: </label>
                <span> <input className="input-box" id="input-rif" required placeholder="Rif" value={rif} onChange={(e) => { setRif(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Person on charge: </label>
                <span> <input className="input-box" required placeholder="Person on charge" value={persononcharge} onChange={(e) => { setPersononcharge(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Organization's description: </label>
                <span><textarea className="form-control input-box" rows="3" value={orgreview} onChange={(e) => { setOrgreview(e.target.value) }}>Write a short review of your organization</textarea></span>
            </div>

            <div className="form-box">
                <label className="form-label"> Organization's status: </label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="true" checked onChange={(e) => { setStatus(e.target.value) }} />
                    <label className="form-check-label">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="false" onChange={(e) => { setStatus(e.target.value) }} />
                    <label className="form-check-label">
                        Inactive
                    </label>
                </div>
            </div>

            <div className="form-box">
                <label className="form-label"> Add your Logo: </label>
                <span> <input className="form-control form-control-sm" type="file"/> </span>
            </div>


            <h4 className="text-center"> Bank Data </h4>
            <div className="form-box">
                <label className="form-label"> Bank's Name: </label>
                <span> <input className="input-box" required placeholder="Bank's Name" value={rif} onChange={(e) => { setBankname(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Account number: </label>
                <span> <input className="input-box" required placeholder="Account number" value={rif} onChange={(e) => { setAccountnum(e.target.value) }} /> </span>
            </div>

            <div className="form-box last-row">
                <label className="form-label"> Phone number: </label>
                <span> <input className="input-box" required placeholder="Phone number" value={rif} onChange={(e) => { setPhone(e.target.value) }} /> </span>
            </div>

            <div className="d-flex justify-content-center">
                <button type="button" onClick={submitData} className="btn form-button"> Save </button>
            </div>

        </div>
    )

}