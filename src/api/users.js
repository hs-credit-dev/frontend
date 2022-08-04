import axios from 'axios';

const { API_URL } = process.env;

/**
 * 
 * @param {*} username account username (or email)  
 * @param {*} password account password
 */
export const login = async (username, password) => {
    return await axios.post(`${API_URL}/users/login`, { username, password });
};

export const logout = async () => {
    return await axios.post(`${API_URL}/users/logout`);
};

export const getUserInSession = async () => {
    return await axios.get(`${API_URL}/users/me`);
};

/**
 * Supply any data and fields that correctly match columns in the models will be updated.
 * Use this method to set address for the first time (supply full address data).
 * @param {any} data 
 * @returns 
 */
export const updateUserInSession = async (data) => {
    return await axios.put(`${API_URL}/users/me`);
};

export const deleteUserInSession = async () => {
    return await axios.delete(`${API_URL}/users/me`);
};