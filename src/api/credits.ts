import axios from '../utils/axios';

const fetchCredits = async (page: number) => {
	const { data } = await axios.get(`/api/credits/?page=${page}`);
	return data;
};

export { fetchCredits };
