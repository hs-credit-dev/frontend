import * as yup from 'yup';

export const addExpertValidationSchema = yup.object().shape({
	email: yup.string().email().required('Username is required'),
	first_name: yup
		.string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 characters'),
	last_name: yup
		.string()
		.required('Last name is required')
		.min(6, 'Last name must be at least 6 characters'),
});
