import axios from 'axios';
import config from '../config/local';

let api = axios.create({
    baseURL: config.API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use((response) => {
    return response;
}, error => {
    return Promise.reject(error);
});

export const getUser = (username) => {

    return api.get(`/users/${username}`)
        .then(response => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        })
};

export const getUsers = (sinceParam = 0) => {

    return api.get(`/users?since=${sinceParam}`)
        .then(response => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        })
};

export const getFollowers = (username) => {
    return api.get(`/users/${username}/followers`)
        .then(response => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        })
};
