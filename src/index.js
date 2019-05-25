import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

import "../src/assets/stylesheets/main.sass";

if (process.env.NODE_ENV !== "production") {
    import("reactotron-react-js").then(({ default: Reactotron }) => {
        Reactotron.connect();
    });
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
