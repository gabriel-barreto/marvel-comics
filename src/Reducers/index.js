import { combineReducers } from "redux";

import loading from "./loading";
import comics from "./comics";
import page from "./page";
import years from "./years";

const root = combineReducers({
    loading,
    comics,
    page,
    years,
});

export default root;
