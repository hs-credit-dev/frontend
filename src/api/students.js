import axios from 'axios';

const { API_URL } = process.env;

export const create = async (username, email, password, firstName, lastName, dob, schoolName, ceebCode, bio) => {
    return await axios.post(`${API_URL}/students/create`, { username, email, password, firstName, lastName, dob, schoolName, ceebCode, bio });
};

/**
 * 
 * @param {Number} id 
 * @returns 
 */
export const get = async (id) => {
    return await axios.get(`${API_URL}/students/${id}`);
};

export const getAll = async () => {
    return await axios.get(`${API_URL}/students/all`);
};