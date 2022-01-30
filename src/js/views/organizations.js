import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card";


export const Organizations = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row first-row children-cards">
                <h1 className="text-center"> Our Organizations</h1>
                <h2>
                    Children Organizations
                </h2>
                <div className="borders">
                    <Card />
                </div>
            </div>
            <div className="row elderly-cards">
                <h2>
                    Elderly Organizations
                </h2>
                <div className="borders">
                    <Card />
                </div>
            </div>
            <div className="row others-cards">
                <h2>
                    Other Organizations
                </h2>
                <div className="borders">
                    <Card />
                </div>
            </div>
        </div>
    )
}