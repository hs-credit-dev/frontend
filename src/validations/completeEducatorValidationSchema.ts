import { boolean, object, ref, string } from 'yup';

export const completeEducatorSignupValidationSchema = object().shape({
	first_name: string()
		.required('First Name is required')
		.min(2, 'First Name must be at least 2 characters'),
	last_name: string()
		.required('Last Name is required')
		.min(2, 'Last Name must be at least 2 characters'),
	password: string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirm_password: string()
		.oneOf([ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	age_confirmation: boolean()
		.required('You must confirm your age')
		.oneOf([true], 'You must agree to be at least 13 years old to continue'),
	organization: string().required('Organization name is required'),
});
