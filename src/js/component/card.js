import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = ({ item, endpoint }) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center"> Organizations Name </h5>
                <p className="card-text">
                    {`Some quick example text to build on the card title and make up the bulk of the card's
                content.`}
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
    endpoint: PropTypes.string
};
