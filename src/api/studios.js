import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export const create = async (username, email, password, firstName, lastName, name, website, phone, logo, bio) => {
    return await axios.post(`${REACT_APP_API_URL}/studios/create`, { username, email, password, firstName, lastName, name, website, phone, logo, bio });
};

/**
 * 
 * @param {Number} id 
 * @returns 
 */
export const get = async (id) => {
    return await axios.get(`${REACT_APP_API_URL}/studios/${id}`);
};

export const getAll = async () => {
    return await axios.get(`${REACT_APP_API_URL}/studios/all`);
};