import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

const API = axios.create({baseURL: BASE_URL });

API.interceptors.request.use((req) => {
    return req;
});

export default API