import { mixed, object, ref, string } from 'yup';

import { UserType } from '../types';

export const signupValidationSchema = object().shape({
	email: string().required('Email is required').email('Enter a valid email'),
	confirmEmail: string()
		.oneOf([ref('email'), undefined], 'Emails must match')
		.required('Please confirm your email'),
	first_name: string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 characters'),
	last_name: string()
		.required('Last name is required')
		.min(6, 'Last name must be at least 6 characters'),
	user_type: mixed<UserType>()
		.oneOf(['student', 'credit-owner'], 'Invalid user type')
		.required(),
});
