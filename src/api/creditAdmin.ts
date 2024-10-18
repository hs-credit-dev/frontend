import axios from '../utils/axios';

const getCreditAdmin = async (id: string) => {
	const { data } = await axios.get('/api/credit_admins/' + id + '/');
	return data;
};

export { getCreditAdmin };
