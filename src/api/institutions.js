import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export const create = async (username, email, password, firstName, lastName, name, title, logo, phone) => {
    return await axios.post(`${REACT_APP_API_URL}/api/institutions/create`, { username, email, password, firstName, lastName, name, title, logo, phone });
};

/**
 * 
 * @param {Number} id 
 * @returns 
 */
export const get = async (id) => {
    return await axios.get(`${REACT_APP_API_URL}/api/institutions/${id}`);
};

export const getAll = async () => {
    return await axios.get(`${REACT_APP_API_URL}/api/institutions/all`);
};