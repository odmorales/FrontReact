import axios from "axios";

export const personApi = axios.create({
    baseURL: 'http://localhost:4040/api/'
});

export const postApi = axios.create()