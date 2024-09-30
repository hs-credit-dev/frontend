import axios from '../utils/axios';

const fetchCredits = async (page: number) => {
	const { data } = await axios.get(`/api/credits/?page=${page}`);
	return data;
};

const createCredit = async (values: FormData) => {
	const { data } = await axios.post('/api/credits/', values);
	console.log('credits ===>', data);
	return data;
};

export { createCredit, fetchCredits };
