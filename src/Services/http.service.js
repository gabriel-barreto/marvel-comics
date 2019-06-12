import axios from "axios";
import apiKey from "./apiKey.service";

import Store from "../store";
import { loadingOn, loadingOff } from "../Actions";

const $http = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/comics",
});

$http.interceptors.request.use(
    config => {
        Store.dispatch(loadingOn());

        // ==> Setting auth params
        const apikey = process.env.REACT_APP_MARVEL_ACCESS_KEY;
        const secret = process.env.REACT_APP_MARVEL_SECRET_KEY;
        const ts = Date.now();
        const hash = apiKey.hash(`${ts}${secret}${apikey}`);

        config.params = { ...config.params, hash, apikey, ts };
        return config;
    },
    error => Promise.reject(error)
);

$http.interceptors.response.use(
    response => {
        Store.dispatch(loadingOff());
        return response;
    },
    err => Promise.reject(err)
);

export default $http;
