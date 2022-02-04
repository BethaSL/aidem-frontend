import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import Foto4 from "../../img/foto4.jpeg";


export const Orgbyid = () => {

    const { store, actions } = useContext(Context);

    let { theid } = useParams()
    useEffect(() => {
        if (store.organizations.length > 0 && store.orgbyid === undefined) {
            console.log("entro al if")
            actions.getOrgbyid(theid)
        }
    }, [store.organizations, store.orgbyid]);

    return (
        store.orgbyid != undefined && (<div className="container first-row">
            <h3 className="text-center"> {store.orgbyid.organization_name} </h3>

            <div className="row featurette">
                <div className="col">
                    <h5>Description</h5>
                    <p className="lead">{store.orgbyid.description}</p>
                    <p>Organization type:  {store.orgbyid.organization_type}</p>
                </div>
                <div className="col">
                    <img src={Foto4} className="d-flex single-img"/>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row first-single">
                <div className="col">
                    <h5> Contact:</h5>
                    <ul>
                        <li>Email:  {store.orgbyid.user.email}</li>
                        <li>Phone:  {store.orgbyid.phone}</li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Bank data:</h5>
                    <ul>
                        <li>Bank Name:  {store.orgbyid.bank_name}</li>
                        <li>Bank Account:  {store.orgbyid.bank_account}</li>
                        <li>Rif: {store.orgbyid.rif}</li>
                    </ul>
                </div>

                <div className="d-flex justify-content-center first-single">
                    <Link to="/aid">
                        <button type="button" className="btn form-button"> Adi'em! </button>
                    </Link>
                    <Link to="/organizations">
                        <button type="button" className="btn form-button"> Go back </button>
                    </Link>
                </div>
            </div>
        </div>
        )
    )
}