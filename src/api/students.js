import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
const BASE_URL = `${REACT_APP_API_URL}/api/students`;

export const create = async (username, email, password, firstName, lastName, dob, schoolName, ceebCode, bio = '', middleInitial = '') => {
    return await axios.post(`${BASE_URL}/create`, { username, email, password, firstName, middleInitial, lastName, dob, schoolName, ceebCode, bio });
};

/**
 * 
 * @param {Number} id 
 * @returns 
 */
export const get = async (id) => {
    return await axios.get(`${BASE_URL}/${id}`);
};

export const getAll = async () => {
    return await axios.get(`${BASE_URL}/all`);
};