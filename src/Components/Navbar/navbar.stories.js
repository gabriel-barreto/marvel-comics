import React from "react";
import { storiesOf } from "@storybook/react";

import Navbar from "./navbar";

const navbarEntries = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
];

storiesOf("Navbar", module).add("Default", () => (
    <Navbar entries={navbarEntries} />
));
