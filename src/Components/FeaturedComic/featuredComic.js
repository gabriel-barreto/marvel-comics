import React from "react";
import PropTypes from "prop-types";

import "./featuredComic.css";

const FeaturedComic = ({ title, cover, publishedAt, authors, onClick }) => (
    <div className="featured-comic" onClick={onClick}>
        <div
            className="background"
            style={{
                background: `rgba(255, 255, 255, .8) url(${cover})`,
                ...backgroundStyle,
            }}
        />
        <div className="wrapper">
            <img src={cover} alt={title} className="cover" title={title} />
            <aside className="container">
                <div className="title-wrapper">
                    <h3 className="title">{title}</h3>
                    <p className="publish-date">
                        Publicado em: {publishedAt.toLocaleDateString()}
                    </p>
                </div>
                <div className="authors">
                    <p>Por:</p>
                    <p>{authors.join(", ")}</p>
                </div>
            </aside>
        </div>
    </div>
);

const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
};

FeaturedComic.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    publishedAt: PropTypes.instanceOf(Date),
    authors: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FeaturedComic;
