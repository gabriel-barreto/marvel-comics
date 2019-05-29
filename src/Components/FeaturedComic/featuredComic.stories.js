import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FeaturedComic from "./featuredComic";

const base = {
    cover:
        "https://i.annihil.us/u/prod/marvel/i/mg/1/a0/5ce405fade0ba/clean.jpg",
    title: "Star Wars: Vader - Dark Visions (2019) #4",
    publishedAt: new Date("2019-05-29T00:00:00"),
    authors: ["Greg Smallwood"],
    onClick: action("Featured Comic Clicked"),
};

const authors = {
    cover:
        "https://i.annihil.us/u/prod/marvel/i/mg/6/b0/5ce403c8b7396/clean.jpg",
    title: "Spider- Man & the League of Realms(2019) #2",
    authors: ["Greg Smallwood", "Lorem Ipsum", "Gabriel Barreto"],
};

storiesOf("Featured Comic", module)
    .add("Single Author", () => <FeaturedComic {...base} />)
    .add("Multiple Authors", () => <FeaturedComic {...base} {...authors} />);
