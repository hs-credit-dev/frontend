import { object, string } from 'yup';

export const addExpertValidationSchema = object().shape({
	email: string().email().required('Username is required'),
	first_name: string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 characters'),
	last_name: string()
		.required('Last name is required')
		.min(6, 'Last name must be at least 6 characters'),
});
