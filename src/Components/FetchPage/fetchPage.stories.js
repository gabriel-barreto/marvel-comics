import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FetchPage from "./fetchPage";

storiesOf("Fetch Page", module).add("Default", () => (
    <FetchPage onCallNext={action("Fetch Page: onCallNext")} />
));
