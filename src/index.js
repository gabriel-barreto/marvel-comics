import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import * as serviceWorker from "./serviceWorker";
import Reducers from "./Reducers";
import App from "./App";

import "../src/assets/stylesheets/main.sass";

const store = createStore(Reducers);

if (process.env.NODE_ENV !== "production") {
    import("reactotron-react-js").then(({ default: Reactotron }) => {
        Reactotron.connect();
    });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();

export const Store = store;
