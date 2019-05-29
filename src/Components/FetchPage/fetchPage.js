import React from "react";
import PropTypes from "prop-types";

import "./fetchPage.css";

const FetchPage = ({ onCallNext }) => (
    <button className="btn next-page-trigger" onClick={onCallNext}>
        Ver mais resultados
    </button>
);

FetchPage.propTypes = {
    onCallNext: PropTypes.func.isRequired,
};

export default FetchPage;
