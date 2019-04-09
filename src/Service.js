import axios from 'axios';
import { BASE_URL, API_KEY } from "./Actions/types";
const axioService = axios.create({
    baseURL: BASE_URL,
    headers:{
        'content-type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
});

export {
    axioService
}