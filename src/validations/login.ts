import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
	email: Yup.string().email().required('Username is required'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters long'),
});
