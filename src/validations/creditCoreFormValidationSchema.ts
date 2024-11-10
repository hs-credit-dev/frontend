import { mixed, object, string } from 'yup';

export const creditCoreFormValidationSchema = object().shape({
	name: string().required('Credit name is required'),
	discipline: string().required('Discipline is required'),
	logo: mixed<File>()
		.test('fileSize', 'The file is too large', (value) => {
			return value instanceof File && value.size <= 2 * 1024 * 1024;
		})
		.test('fileType', 'Unsupported file format', (value) => {
			return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type);
		})
		.required('Logo is required'),
});
