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

export { completeUserSignup, getSignupUser, loginUser, signupUser };
