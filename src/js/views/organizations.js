import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Organizations = () => {
    const { store, actions } = useContext(Context);
    return (
        //Children
        <div className="container">
            <div className="row first-row">
                <h1>
                    <strong> Children Organizations </strong>
                </h1>
                <div className="borders"> 
                    <Card/>
                </div>
            </div>
            <div className="row">
                <h1>
                    <strong> Elderly Organizations </strong>
                </h1>
                <div className="borders"> 
                    <Card/>
                </div>
            </div>
            <div className="row">
                <h1>
                    <strong> Other Organizations </strong>
                </h1>
                <div className="borders"> 
                    <Card/>
                </div>
            </div>
        </div>
    )
}