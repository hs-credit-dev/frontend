import axios from 'axios';

const { API_URL } = process.env;

export const create = async (username, email, password, firstName, lastName, name, title, logo, phone) => {
    return await axios.post(`${API_URL}/institutions/create`, { username, email, password, firstName, lastName, name, title, logo, phone });
};

/**
 * 
 * @param {Number} id 
 * @returns 
 */
export const get = async (id) => {
    return await axios.get(`${API_URL}/institutions/${id}`);
};

export const getAll = async () => {
    return await axios.get(`${API_URL}/institutions/all`);
};