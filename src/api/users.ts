import axios from 'axios';

const fetchUserInformation = async () => {
	const token = localStorage.getItem('hstoken');
	const { data } = await axios.get('https://api.hs.credit/api/users/me/', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return data;
};

export { fetchUserInformation };
