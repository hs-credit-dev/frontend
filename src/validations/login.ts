import { object, string } from 'yup';

export const loginValidationSchema = object().shape({
	email: string().email().required('Username is required'),
	password: string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters long'),
});
