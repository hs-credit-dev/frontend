import axios from 'axios';

import { LoginFormInputs, RegisterFormValues, SignupFormValues } from '../types';

const loginUser = async (values: LoginFormInputs) => {
	const { data } = await axios.post('https://api.hs.credit/auth/login', values);
	return data;
};

const signupUser = async (values: SignupFormValues) => {
	const { data } = await axios.post('https://api.hs.credit/api/signup/', values);
	return data;
};

const getSignupUser = async (accountId: string) => {
	const { data } = await axios.get(`https://api.hs.credit/api/signup/${accountId}`);
	return data;
};

const completeUserSignup = async (accountId: string, values: RegisterFormValues) => {
	const { data } = await axios.patch(`https://api.hs.credit/api/signup/${accountId}/`, {
		...values,
	});
	return data;
};

const logoutUser = async (token: string) => {
	try {
		const logoutEndpoint = 'https://api.hs.credit/auth/logout';
		console.log(`Sending logout request to: ${logoutEndpoint}`);
		const { data } = await axios.post(
			logoutEndpoint,
			{
				token,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return data;
	} catch (error) {
		console.error('Logout failed:', error);
		throw error;
	}
};

export { completeUserSignup, getSignupUser, loginUser, logoutUser, signupUser };
