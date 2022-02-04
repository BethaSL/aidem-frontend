import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const Card = ({ item, section }) => {
    const { actions } = useContext(Context);
    let history = useHistory()
    const handleMoreInfo = (id) => {
        actions.getOrgbyid(id)
        history.push(`/organizations/${id}`)

    }
    return (
        <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />

            <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">{item.organization_name}</h5>
                <p className="card-text"> {item.rif} </p>
                <button type="button" onClick={() => handleMoreInfo(item.id)} className="btn card-button">
                    More Info
                </button>
            </div>
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object,
    section: PropTypes.string

};