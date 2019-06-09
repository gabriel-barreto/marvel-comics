import React from "react";

import "./grid.css";

const Grid = ({ year, children }) =>
    <section className="gallery">
        <h2 className="title">{year}'s Comics</h2>
        <div className="wrapper grid">{children}</div>;
    </section>

export default Grid;
