import axios from 'axios';

const fetchCredits = async (page: number) => {
	const token = localStorage.getItem('hstoken');
	const { data } = await axios.get(`https://api.hs.credit/api/credits/?page=${page}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return data;
};

export { fetchCredits };
