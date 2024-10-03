import * as Yup from 'yup';

import { UserType } from '../types';

export const signupValidationSchema = Yup.object().shape({
	email: Yup.string().required('Email is required').email('Enter a valid email'),
	confirmEmail: Yup.string()
		.oneOf([Yup.ref('email'), undefined], 'Emails must match')
		.required('Please confirm your email'),
	first_name: Yup.string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 characters'),
	last_name: Yup.string()
		.required('Last name is required')
		.min(6, 'Last name must be at least 6 characters'),
	user_type: Yup.mixed<UserType>()
		.oneOf(['student', 'credit-owner'], 'Invalid user type')
		.required(),
});
