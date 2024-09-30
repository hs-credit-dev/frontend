import * as yup from 'yup';

const validationSchema = yup.object().shape({
	email: yup.string().required('Email is required').email('Enter a valid email'),
	confirmEmail: yup
		.string()
		.oneOf([yup.ref('email'), undefined], 'Emails must match')
		.required('Please confirm your email'),
	first_name: yup
		.string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 characters'),
	last_name: yup
		.string()
		.required('Last name is required')
		.min(6, 'Last name must be at least 6 characters'),
});

export { validationSchema };
