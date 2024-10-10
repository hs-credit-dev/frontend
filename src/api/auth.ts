import axios from 'axios';

import {
	CompleteSignupFormCreditAdminValues,
	CompleteSignupFormStudentValues,
	LoginFormInputs,
	SignupFormValues,
} from '../types';
import axiosInstance from '../utils/axios';

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

const completeUserSignup = async (
	accountId: string,
	values:
		| FormData
		| CompleteSignupFormStudentValues
		| CompleteSignupFormCreditAdminValues,
) => {
	const { data } = await axios.patch(`https://api.hs.credit/api/signup/${accountId}/`, {
		...values,
	});
	return data;
};
const logoutUser = async (token: string) => {
	const { data } = await axiosInstance.post('/auth/logout', { token });
	return data;
};

export { completeUserSignup, getSignupUser, loginUser, logoutUser, signupUser };
