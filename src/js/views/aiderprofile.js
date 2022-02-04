import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom"

export const Aiderprofile = () => {
    const { store, actions } = useContext(Context);
    const [fullname, setFullname] = useState(store.aiderProfile !== undefined ? store.aiderProfile.full_name : "");
    const [phone, setPhone] = useState(store.aiderProfile !== undefined ? store.aiderProfile.phone : "");
    const [contacted, setContacted] = useState(store.aiderProfile !== undefined ? store.aiderProfile.contacted : ""); //ESTO ES UN INPUT NO UN STRING
    const [error, setErrorA] = useState(false)
    let history = useHistory()

    const submitData = async (method) => {
        if (fullname.trim() != "" || phone.trim() != "") {
            let aiderProfile = {
                full_name: fullname,
                phone: phone,
                contacted: JSON.parse(contacted)
            };
            let response;
            if (method === "POST") {
                response = await actions.aiderProfile(aiderProfile);
            } 
            else {
                response = await actions.editAiderProfile(aiderProfile)
            }

            if (response) {
                let responsesGetData = await actions.getData("aiders")
                if (responsesGetData) {
                    actions.getAiderProfile()
                    setErrorA(false)
                    history.push("/")
                }
                
            }
        }
        else {
            setErrorA(true)
        }
    }

    const deleteProfile = async () => {
        let response = await actions.delProfile();
        if (response.ok) {
            actions.logOut()
            history.push("/")
        }
    }

    return (
        <div className="container first-row footer-down">
            <h3 className="text-center"> Aider's Profile  </h3>
            {error ? <h2 className="text-center alert"> Please fill all the fields </h2> : null}
            <div className="form-box">
                <label className="form-label"> Email: </label>
                <span> <input type="text" readOnly className="input-box " value={store.email} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Full Name: </label>
                <span> <input className="input-box" required placeholder="Full Name" value={fullname} onChange={(e) => { setFullname(e.target.value) }} /> </span>
            </div>

            <div className="form-box">
                <label className="form-label"> Phone number: </label>
                <span> <input className="input-box" required placeholder="Phone number" value={phone} onChange={(e) => { setPhone(e.target.value) }} /> </span>
            </div>

            <div className="dropdown form-dropdown form-box">
                <label className="form-label" htmlFor="dd-user-type" >Would you like to be contacted by the Organizations?: </label>
                <span className="">
                    <select className="form-select input-box" aria-label="Default select example" onChange={(e) => { setContacted(e.target.value) }}>
                        <option defaultValue={"Select organization status"}>Yes/No</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </span>
            </div>

            <div className="d-flex justify-content-center">
                {
                    store.aiderProfile !== undefined ?
                    <button type="button" onClick={() => submitData("PUT")} className="btn form-button"> Edit </button>
                    :
                    <button type="button" onClick={() => submitData("POST")} className="btn form-button"> Save </button>
                }
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
                                    <button type="button" className="btn btn-secondary" onClick={deleteProfile} href="/" data-bs-dismiss="modal">Yes</button>
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