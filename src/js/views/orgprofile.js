import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Orgprofile = () => {
    const { Store, actions } = useContext(Context);
    const [orgname, setOrgname] = useState("");
    const [address, setAddress] = useState(""); // No estoy segura que esto se necesite porque aqui se usara la API externa 
    const [rif, setRif] = useState("");
    const [persononcharge, setPersononcharge] = useState("");
    const [bankname, setBankname] = useState("");
    const [accountnum, setAccountnum] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("")

    const submitData = () => {
        let orgProfile = {
            organization_name: orgname,
            address: address,
            rif: rif,
            person_oncharge: persononcharge,
            bankname: bankname,
            accountnum: accountnum,
            phone: phone,
            description: description,
            user_info: 1
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

            <div className="form-box">
                <label className="form-label"> Description: </label>
                <span> <input className="input-box" required placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} /> </span>
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
                <label className="form-label"> Organization's status: </label>
                <div>
                    <input type="checkbox" className="form-check-input form-checkbox" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
                        Active
                    </label>

                    <input type="checkbox" className="form-check-input form-checkbox" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
                        Inactive
                    </label>
                </div>
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