import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Store from "./store";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

import "../src/assets/stylesheets/main.sass";

if (process.env.NODE_ENV !== "production") {
    import("reactotron-react-js").then(({ default: Reactotron }) => {
        Reactotron.connect();
    });
}

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();

export const Store = store;
