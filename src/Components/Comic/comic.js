import React from "react";
import PropTypes from "prop-types";

import "./comic.css";

const Comic = ({ title, src, onClick }) => (
    <div className="comic" onClick={onClick}>
        <div
            className="background"
            style={{
                background: `url(${src}), rgba(0, 0, 0, 0.8)`,
                backgroundPosition: "center",
            }}
        />
        <img className="cover" alt={title} src={src} title={title} />
        <button className="overlay">
            <p>+</p>
            <p>Ver mais</p>
        </button>
    </div>
);

Comic.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Comic;
