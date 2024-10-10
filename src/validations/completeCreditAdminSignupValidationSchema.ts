import * as Yup from 'yup';

export const completeCreditAdminSignupValidationSchema = Yup.object().shape({
	first_name: Yup.string()
		.required('First Name is required')
		.min(2, 'First Name must be at least 2 characters'),
	last_name: Yup.string()
		.required('Last Name is required')
		.min(2, 'Last Name must be at least 2 characters'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	age_confirmation: Yup.boolean()
		.required('You must confirm your age')
		.oneOf([true], 'You must agree to be at least 13 years old to continue'),
});
