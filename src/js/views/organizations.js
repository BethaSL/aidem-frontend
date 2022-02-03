import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card";


export const Organizations = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container first-row">
            <div className="row children-cards">
                <h1 className="text-center"> Our Organizations</h1>
                <h3>
                    Children Organizations
                </h3>
                <div className="borders">
                    {store.children.map(item => {
                        return <Card key={item.rif} item={item} section="children"/>
                    })}
                    
                </div>
            </div>
            <div className="row elderly-cards">
                <h3>
                    Elderly Organizations
                </h3>
                <div className="borders">
                {store.elderly.map(item => {
                        return <Card key={item.rif} item={item} section="elderly"/>
                    })}
                </div>
            </div>
            <div className="row others-cards">
                <h3>
                    Other Organizations
                </h3>
                <div className="borders">
                {store.others.map(item => {
                        return <Card key={item.rif} item={item} section="others"/>
                    })}
                </div>
            </div>
        </div>
    )
}