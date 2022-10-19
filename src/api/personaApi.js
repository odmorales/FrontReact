import axios from "axios";

export const personApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});

export const postApi = axios.create()