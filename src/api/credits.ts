import axios from '../utils/axios';

const fetchCredits = async (page: number) => {
	const { data } = await axios.get(`/api/credits/?page=${page}`);
	return data;
};

const createCredit = async (values: FormData) => {
	const { data } = await axios.post('/api/credits/', values);
	return data;
};

const fetchCredit = async (creditId: string) => {
	const { data } = await axios.get(`/api/credits/${creditId}`);
	return data;
};

const updateCredit = async (creditId: string, values: FormData) => {
	const { data } = await axios.patch(`/api/credits/${creditId}/`, values);
	return data;
};

export { createCredit, fetchCredit, fetchCredits, updateCredit };
