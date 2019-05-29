import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Comic from "./comic";

const payload = {
    src: "https://i.annihil.us/u/prod/marvel/i/mg/8/d0/5ce406a9220af/clean.jpg",
    title: "War of the Realms: War Scrolls (2019) #2",
    onClick: action("Comic Clicked"),
};

storiesOf("Comic", module).add("Default", () => <Comic {...payload} />);
