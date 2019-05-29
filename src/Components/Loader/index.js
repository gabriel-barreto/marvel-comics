import React from "react";
import PropTypes from "prop-types";

import Spinner from "./spinner";

import "./loader.css";

const Loader = ({ active }) => (
    <div className={`loader ${active ? "-active" : ""}`}>
        <Spinner size={120} thickness={18} active={active} />
        <p className="alt">Carregando...</p>
    </div>
);

Loader.propTypes = {
    active: PropTypes.bool,
};

Loader.defaultProps = {
    active: true,
};

export default Loader;
