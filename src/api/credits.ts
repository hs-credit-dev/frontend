import { CreditAdmins } from '../types';
import axios from '../utils/axios';

const fetchCredits = async (page: number) => {
	const { data } = await axios.get(`/api/credits/?page=${page}`);
	return data;
};

const createCredit = async (values: FormData) => {
	const { data } = await axios.post('/api/credits/', values);
	return data;
};

const fetchCredit = async (creditId: string) => {
	const { data } = await axios.get(`/api/credits/${creditId}`);
	return data;
};

const updateCredit = async (creditId: string, values: FormData) => {
	const { data } = await axios.patch(`/api/credits/${creditId}/`, values);
	console.log('values', values);
	return data;
};

const publishCredit = async (creditId: string) => {
	const { data } = await axios.post(`/api/credits/${creditId}/publish/`);
	console.log('data', data);
	return data;
};

const addCreditAdmin = async (creditId: string, creditAdmins: CreditAdmins) => {
	const { data } = await axios.patch(`/api/credits/${creditId}/`, creditAdmins);

	return data;
};

export {
	addCreditAdmin,
	createCredit,
	fetchCredit,
	fetchCredits,
	publishCredit,
	updateCredit,
};
