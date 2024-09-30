import * as yup from 'yup';

const validationSchema = yup.object().shape({
	name: yup.string().required('Credit name is required'),
	discipline: yup.string().required('Discipline is required'),
	description: yup.string(),
	rubric_version: yup.string(),
	stake_text: yup.string(),
	pitch_text: yup.string(),
	mint_text: yup.string(),
	logo: yup
		.mixed<File>()
		.required('Logo is required')
		.test('fileSize', 'The file is too large', (value) => {
			return value instanceof File && value.size <= 2 * 1024 * 1024;
		})
		.test('fileType', 'Unsupported file format', (value) => {
			return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type);
		})
		.required('Logo is required'),
});

export { validationSchema };
