import { CreditAdmins, CreditExperts } from '../types';
import axios from '../utils/axios';

type UpdateValues = {
	description?: string;
	rubric_version?: string;
	stake_text?: string;
	pitch_text?: string;
	mint_text?: string;
};

type Rubric = {
	title: string;
	points: number;
	blurb: string;
	notes: string;
	is_active: boolean;
};

interface AddRubricPayload {
	rubric: Rubric[];
}

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

const updateCredit = async (creditId: string, values: UpdateValues) => {
	const { data } = await axios.patch(`/api/credits/${creditId}/`, values);
	return data;
};

const publishCredit = async (creditId: string) => {
	const { data } = await axios.post(`/api/credits/${creditId}/publish/`);
	return data;
};

const addCreditAdmin = async (creditId: string, creditAdmins: CreditAdmins) => {
	const { data } = await axios.patch(`/api/credits/${creditId}/`, creditAdmins);

	return data;
};

const addCreditExpert = async (creditId: string, creditExpert: CreditExperts) => {
	const { data } = await axios.patch(`/api/credits/${creditId}/`, creditExpert);

	return data;
};

const addCreditRubrics = async (creditId: string, rubric: AddRubricPayload) => {
	const { data } = await axios.patch(`/api/credits/${creditId}/`, rubric);

	return data;
};

export {
	addCreditAdmin,
	addCreditExpert,
	addCreditRubrics,
	createCredit,
	fetchCredit,
	fetchCredits,
	publishCredit,
	updateCredit,
};
