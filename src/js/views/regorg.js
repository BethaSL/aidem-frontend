import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Regorg = () => {
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
        let response = action.userReg(registredUser);
    }

    return (
        <div className="container fisrt-row">
            <h3 className="text-center"> Registration Form: Organization  </h3>
            <div className="form-box">
                <label className="form-label" htmlFor="input-name"> Organization's Name: </label>
                <span> <input className="input-box" id="input-name" required placeholder="Organization Name" /> </span>
            </div>

            <div className="form-box">
                <label className="form-label" htmlFor="input-address"> Address: </label>
                <span> <input className="input-box" id="input-address" required placeholder="Address" /> </span>
            </div> 

        </div>
    )

}