import { configure } from "@storybook/react";

// automatically import global style
import "../src/assets/stylesheets/main.sass";

// automatically import all files ending in *.stories.js
const req = require.context("../src/Components", true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
