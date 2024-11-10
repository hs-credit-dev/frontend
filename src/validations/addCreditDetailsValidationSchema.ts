import { object, string } from 'yup';

export const addCreditDetailsValidationSchema = object().shape({
	description: string().required('Description is required'),
	rubric_version: string().required('Rubric version is required'),
	stake_text: string().required('Stake is required'),
	pitch_text: string().required('Pitch is required'),
	mint_text: string().required('Mint is required'),
});
