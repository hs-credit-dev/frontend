import axios from 'axios';

/**
 * 
 * @param {*} username account username (or email)  
 * @param {*} password account password
 */
export const login = async (username, password) => {
    return await axios.post('api/users/login', { username, password });
};