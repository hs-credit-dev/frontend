import * as yup from 'yup';

export const creditCoreFormValidationSchema = yup.object().shape({
	name: yup.string().required('Credit name is required'),
	discipline: yup.string().required('Discipline is required'),
	logo: yup
		.mixed<File>()
		.test('fileSize', 'The file is too large', (value) => {
			return value instanceof File && value.size <= 2 * 1024 * 1024;
		})
		.test('fileType', 'Unsupported file format', (value) => {
			return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type);
		})
		.required('Logo is required'),
});
