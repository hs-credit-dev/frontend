import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

/**
 * 
 * @param {*} username account username (or email)  
 * @param {*} password account password
 */
export const login = async (username, password) => {
    return await axios.post(`${REACT_APP_API_URL}/api/users/login`, { username, password });
};

export const logout = async () => {
    return await axios.post(`${REACT_APP_API_URL}/api/users/logout`);
};

export const getUserInSession = async () => {
    return await axios.get(`${REACT_APP_API_URL}/api/users/me`);
};

/**
 * Supply any data and fields that correctly match columns in the models will be updated.
 * Use this method to set address for the first time (supply full address data).
 * @param {any} data 
 * @returns 
 */
export const updateUserInSession = async (data) => {
    return await axios.put(`${REACT_APP_API_URL}/api/users/me`);
};

export const deleteUserInSession = async () => {
    return await axios.delete(`${REACT_APP_API_URL}/api/users/me`);
};