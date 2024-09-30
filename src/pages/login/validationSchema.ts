import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Username is required')
		.min(4, 'Username must be at least 4 characters long'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters long'),
});

export { validationSchema };
