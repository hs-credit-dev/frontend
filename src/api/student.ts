import axios from '../utils/axios';

const fetchStudents = async (page: number) => {
	const { data } = await axios.get('/api/students/?page=' + page);
	return data;
};

export { fetchStudents };
