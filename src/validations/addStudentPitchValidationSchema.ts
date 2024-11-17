import { mixed, object } from 'yup';

export const addStudentPitchValidationSchema = object({
	media_asset: mixed().required('A PDF file is required'),
});
