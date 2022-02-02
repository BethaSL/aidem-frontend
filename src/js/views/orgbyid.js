import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Orgbyid = () => {

    const { store, actions } = useContext(Context);
    
    let { theid } = useParams()
    useEffect(() => {
        if (store.organizations.length>0 && store.orgbyid === undefined) {
            console.log("entro al if")
            actions.getOrgbyid(theid)
        }
    }, [store.organizations,store.orgbyid]);


    return (
        store.orgbyid != undefined && (<div className="container fisrt-row">
            <h3> aider_NAME </h3>
            <div className="row">
                <div className="col-4">
                    <img src="https://via.placeholder.com/300x200" className="myprofile-pic" alt="..." />
                </div>
              
                <div className="col">
                    <p>{store.orgbyid.description}</p>
                    <div className="d-flex justify-content-between">
                        <div>Email:</div>
                        <div>{store.orgbyid.email}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Address:</div>
                        <div>{store.orgbyid.address}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Bank Name:</div>
                        <div>{store.orgbyid.bank_name}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Organization type:</div>
                        <div>{store.orgbyid.organization_type}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>Phone:</div>
                        <div>{store.orgbyid.account_number}</div>
                    </div>
                     <div className="d-flex justify-content-between">
                        <div>Organization type:</div>
                        <div>{store.orgbyid.account_number}</div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/aid">
                            <button type="button" className="btn form-button"> Adi'em! </button>
                        </Link>
                        <Link to="/organizations">
                            <button type="button" className="btn form-button"> Go back </button>
                        </Link>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>)
    )
}