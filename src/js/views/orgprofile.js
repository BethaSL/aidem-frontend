import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Orgprofile = () => {
    const { Store, actions } = useContext(Context);
    const [orgname, setOrgname] = useState("")
    const [address, setAddress] = useState("") // No estoy segura que esto se necesite porque aqui se usara la API externa 
    const [rif, setRif] = useState("")
    const [persononcharge, setPersononcharge] = useState("")

    const submitData = () => {
        let registredUser = {
            orgname: orgname,
            address: address,
            rif: rif,
            persononcharge: persononcharge
        };
        let response = action.Orgprofile(registredUser);
    }

    return (
        <div className="container fisrt-row">
            <h3 className="text-center"> Organization's Profile  </h3>
            <div className="form-box">
                <label className="form-label" htmlFor="input-name"> Organization's Name: </label>
                <span> <input className="input-box" id="input-name" required placeholder="Organization Name" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label" htmlFor="input-address"> Address: </label>
                <span> <input className="input-box" id="input-address" required placeholder="Address" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label" htmlFor="input-rif"> Rif: </label>
                <span> <input className="input-box" id="input-rif" required placeholder="Rif" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Person on charge: </label>
                <span> <input className="input-box" required placeholder="Person on charge" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Organization's status: </label>
                <div>
                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
                        Active
                    </label>

                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                    <label className="form-check-label" for="dropdownCheck">
                        Inactive
                    </label>
                </div>
            </div>


            <h4 className="text-center"> Bank Data </h4>
            <h5 className="text-center">National account:</h5>
            <div className="form-box">
                <label className="form-label"> Bank's Name: </label>
                <span> <input className="input-box" required placeholder="Bank's Name" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Account number: </label>
                <span> <input className="input-box" required placeholder="Account number" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Phone: </label>
                <span> <input className="input-box" required placeholder="Bank's Name" /> </span>
            </div>


            <h5 className="text-center">International account:</h5>
            <div className="form-box">
                <label className="form-label"> Bank's Name: </label>
                <span> <input className="input-box" required placeholder="Bank's Name" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Account number: </label>
                <span> <input className="input-box" required placeholder="Account number" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Swift: </label>
                <span> <input className="input-box" required placeholder="Swift" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> ABA: </label>
                <span> <input className="input-box" required placeholder="ABA" /> </span>
            </div>



        </div>
    )

}