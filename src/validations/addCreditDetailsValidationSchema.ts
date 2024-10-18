import * as yup from 'yup';

export const addCreditDetailsValidationSchema = yup.object().shape({
	description: yup.string().required('Description is required'),
	rubric_version: yup.string().required('Rubric version is required'),
	stake_text: yup.string().required('Stake is required'),
	pitch_text: yup.string().required('Pitch is required'),
	mint_text: yup.string().required('Mint is required'),
});
