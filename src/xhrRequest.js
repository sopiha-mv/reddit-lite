import axios from 'axios';

export const getHeaders = () => ({
    'Accept': '*/*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
});

export const xhrRequest = axios.create({
    baseURL: location.origin,
    headers: getHeaders(),
    withCredentials: false
});