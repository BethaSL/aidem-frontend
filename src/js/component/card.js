import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = ({ item, section }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">{item.organization_name} </h5>
                <p className="card-text">
                    {item.rif}
                </p>
                <div className="card_footer">
                    <button type="button" className="btn button form-button" href="#"> More Info </button>
                    <a href="#" className="btn card__heart">
                        <i className="fa fa-heart" />
                    </a>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object,
    section: PropTypes.string
};
