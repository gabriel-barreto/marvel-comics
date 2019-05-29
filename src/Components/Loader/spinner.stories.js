import React from "react";
import { storiesOf } from "@storybook/react";

import Spinner from "./spinner";

storiesOf("Spinner", module)
    .add("with Default Props (80px 12px)", () => <Spinner />)
    .add("with Custom Size (50px)", () => <Spinner size={50} />)
    .add("with Custom Thickness (16px)", () => <Spinner thickness={16} />)
    .add("with All Custom (24px 5px)", () => (
        <Spinner size={24} thickness={5} />
    ));
