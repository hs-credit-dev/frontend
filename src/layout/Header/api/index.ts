import axios from '../../../utils/axios';

export const logout = async (token: string) => {
	const { data } = await axios.post('/auth/logout', { token });
	return data;
};
