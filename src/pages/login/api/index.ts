import axios from 'axios';

import { LoginFormInputs } from '../../../types';

export const login = async (values: LoginFormInputs) => {
	const { data } = await axios.post('https://api.hs.credit/auth/login', values);
	return data;
};
