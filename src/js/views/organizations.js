import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/Card.js";
import "../../styles/home.css"

export const Organizations = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row first-row">
                <h1>
                     Children Organizations
                </h1>
                <div className="borders"> 
                    <Card/>
                </div>
            </div>
            <div className="row">
                <h1>
                    Elderly Organizations
                </h1>
                <div className="borders"> 
                    <Card/>
                </div>
            </div>
            <div className="row">
                <h1>
                    Other Organizations
                </h1>
                <div className="borders"> 
                    <Card/>
                </div>
            </div>
        </div>
    )
}