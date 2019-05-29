import React from "react";
import PropTypes from "prop-types";

import "./spinner.css";

const Spinner = ({ active, size, thickness }) => (
    <div
        className={`spinner ${active ? "-active" : ""}`}
        style={{
            width: `${size}px`,
            height: `${size}px`,
            borderWidth: `${thickness}px`,
        }}
    />
);

Spinner.propTypes = {
    active: PropTypes.bool,
    size: PropTypes.number.isRequired,
    thickness: PropTypes.number.isRequired,
};

Spinner.defaultProps = {
    active: true,
    size: 80,
    thickness: 12,
};

export default Spinner;
