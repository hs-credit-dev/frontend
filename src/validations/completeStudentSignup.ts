import { boolean, object, ref, string } from 'yup';

export const completeStudentSignupValidationSchema = object({
	first_name: string().required('First name is required'),
	last_name: string().required('Last name is required'),
	middle_initial: string()
		.max(1, 'M.I. must be one character')
		.required('Middle name is required'),
	ceeb_code: string().required('CEEB code is required'),
	school_name: string().required('School name is required'),
	bio: string().required('Bio is required'),
	age_confirmation: boolean()
		.oneOf([true], 'You must confirm that you are at least 13 years old')
		.required(),
	password: string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirm_password: string()
		.oneOf([ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	dob: string().required('Date of birth is required'),
});
