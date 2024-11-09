import {
	CompleteSignupFormCreditAdminValues,
	CompleteSignupFormStudentValues,
	LoginFormInputs,
	SignupFormValues,
} from '../types';
import axios from '../utils/axios';

export const login = async (values: LoginFormInputs) => {
	const { data } = await axios.post('/auth/login', values);
	return data;
};

export const signup = async (values: SignupFormValues) => {
	const { data } = await axios.post('https://api.hs.credit/api/signup/', values);
	return data;
};

export const fetchSignup = async (accountId: string) => {
	const { data } = await axios.get(`https://api.hs.credit/api/signup/${accountId}`);
	return data;
};

export const completeSignup = async (
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

export const logout = async (token: string) => {
	const { data } = await axios.post('/auth/logout', { token });
	return data;
};
