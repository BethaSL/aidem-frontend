import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"

export const Orgprofile = () => {
    const { store, actions } = useContext(Context);
    const [orgname, setOrgname] = useState("");
    const [address, setAddress] = useState("");
    const [rif, setRif] = useState("");
    const [persononcharge, setPersononcharge] = useState("");
    const [bankname, setBankname] = useState("");
    const [accountnum, setAccountnum] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("")
    const [orgtype, setOrgtype] = useState("")
    const [status, setStatus] = useState(true)
    const [errorG, setErrorG] = useState(false)
    let history = useHistory()

    const submitData = async () => {
        if (description.trim() != "" ||
            orgtype.trim() != "" ||
            orgname.trim() != "" ||
            rif.trim() != "" ||
            phone.trim() != "" ||
            address.trim() != "" ||
            persononcharge.trim() != "" ||
            status.trim() != "" ||
            bankname.trim() != "" ||
            accountnum.trim() != "") {

            let orgProfile = {
                description: description,
                organization_type: orgtype,
                organization_name: orgname,
                rif: rif,
                phone: phone,
                address: address,
                person_oncharge: persononcharge,
                status: status,
                bank_name: bankname,
                account_number: accountnum
            };
            let response = await actions.orgProfile(orgProfile);
            if (response.ok) {
                setErrorG(false)
                history.push("/")
            }
        }
        else {
            setErrorG(true)
        }
    }

    return (
        <div className="container fisrt-row">
            <h3 className="text-center"> Organization's Profile  </h3>
            {errorG ? <h2 className="text-center alert"> Please fill all the fields </h2> : null}
            <div className="form-box">
                <label className="form-label"> Email: </label>
                <span> <input readOnly className="input-box " value={store.email} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label" htmlFor="input-name"> Organization's Name: </label>
                <span> <input className="input-box" id="input-name" required placeholder="Organization Name" value={orgname} onChange={(e) => { setOrgname(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Phone number: </label>
                <span> <input className="input-box" required placeholder="Phone number" value={phone} onChange={(e) => { setPhone(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label" htmlFor="input-rif"> Rif: </label>
                <span> <input className="input-box" id="input-rif" required placeholder="Rif" value={rif} onChange={(e) => { setRif(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Person on charge: </label>
                <span> <input className="input-box" required placeholder="Person on charge" value={persononcharge} onChange={(e) => { setPersononcharge(e.target.value) }} /> </span>
            </div>

            <div className="dropdown form-dropdown form-box">
                <label className="form-label" htmlFor="dd-user-type" >Organization type: </label>
                <span className="">
                    <select className="form-select input-box" aria-label="Default select example" onChange={(e) => { setOrgtype(e.target.value) }}>
                        <option defaultValue={"Select organization type"}>Select organization type</option>
                        <option value="elderly">Elderly</option>
                        <option value="children">Children</option>
                        <option value="others">Others</option>
                    </select>
                </span>
            </div>

            <div className="form-box">
                <label className="form-label" htmlFor="input-address"> Address: </label>
                <div className="dropdown form-dropdown form-box">
                    <span className="input-box">
                        <select className="form-select input-box" aria-label="Default select example">
                            <option>Select Country</option>
                            {store.countries.map((city) => {
                                return (
                                    <option key={city} value={`${city}`}>{city}</option>
                                )
                            })}
                        </select>
                        <textarea className="form-control input-box" rows="1" value={address} onChange={(e) => { setAddress(e.target.value) }}></textarea>
                    </span>
                </div>
            </div>

            <div className="form-box">
                <label className="form-label"> Organization's description: </label>
                <span><textarea className="form-control input-box" rows="3" value={description} onChange={(e) => { setDescription(e.target.value) }}>Write a short review of your organization</textarea></span>
            </div>

            <div className="form-box">
                <label className="form-label"> Add your Logo: </label>
                <span> <input className="form-control form-control-sm" type="file" /> </span>
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

            <h4 className="text-center"> Bank Data </h4>
            <div className="form-box">
                <label className="form-label"> Bank's Name: </label>
                <span> <input className="input-box" required placeholder="Bank's Name" value={bankname} onChange={(e) => { setBankname(e.target.value) }} /> </span>
            </div>

            <div className="form-box last-row">
                <label className="form-label"> Account number: </label>
                <span> <input className="input-box" required placeholder="Account number" value={accountnum} onChange={(e) => { setAccountnum(e.target.value) }} /> </span>
            </div>

            <div className="d-flex justify-content-center">
                <button type="button" onClick={submitData} className="btn form-button"> Save </button>
                <span>
                    <button type="button" className="btn delete-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Delete Account
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Account</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete your account?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"  onClick={actions.delProfile} data-bs-dismiss="modal">Yes</button>
                                    <button type="button" className="btn form-button">No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    )

}