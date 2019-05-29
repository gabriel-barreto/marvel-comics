import React, { useState } from "react";
import PropTypes from "prop-types";

import Brand from "../../assets/images/brand.png";

import "./navbar.css";

const Navbar = ({ entries }) => {
    const [active, setActive] = useState({});

    function toggle() {
        setActive(!active);
    }

    return (
        <nav className={`nav ${active === true ? "-active" : ""}`}>
            <button className="nav-toggler" onClick={toggle}>
                <span className="nav-toggler-icon" />
            </button>
            <img src={Brand} alt="Marvel Logo" className="nav-brand" />
            <ul className="navbar-nav">
                {entries.map(each => (
                    <li className="nav-item" key={each.link}>
                        <a href={each.link} className="nav-link">
                            {each.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    entries: PropTypes.array.isRequired,
};

Navbar.defaultProps = {
    entries: [],
};

export default Navbar;
