import axios from '../utils/axios';

const fetchUserInformation = async () => {
	const { data } = await axios.get('/api/users/me/');
	return data;
};

export { fetchUserInformation };
