import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
const BASE_URL = `${REACT_APP_API_URL}/api/credits`;

export const get = async (id) => {
    return await axios.get(`${BASE_URL}/${id}`);
};

export const getAll = async () => {
    return await axios.get(`${BASE_URL}/all`);
};

export const getMine = async () => {
    return await axios.get(`${BASE_URL}/mine`);
};

export const stake = async (discipline, contentStaked, teacherEmail) => {
    return await axios.post(`${BASE_URL}/stake`, { discipline, contentStaked, teacherEmail });
};

export const verify = async (id, password) => {
    return await axios.put(`${BASE_URL}/verify/${id}?password=${password}`);
};

export const update = async (id, changes) => {
    return await axios.put(`${BASE_URL}/update/${id}`, changes);
};

export const pitch = async (id) => {
    return await axios.put(`${BASE_URL}/pitch/${id}`);
};

export const addCheckpoint = async (creditId, date, description) => {
    return await axios.post(`${BASE_URL}/${creditId}/checkpoint`, { date, description });
};

export const getCheckpoints = async (creditId) => {
    return await axios.get(`${BASE_URL}/${creditId}/checkpoints`);
};