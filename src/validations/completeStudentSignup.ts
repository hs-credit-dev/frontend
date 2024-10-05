import * as Yup from 'yup';

export const completeStudentSignupValidationSchema = Yup.object({
	first_name: Yup.string().required('First name is required'),
	last_name: Yup.string().required('Last name is required'),
	middle_initial: Yup.string()
		.max(1, 'M.I. must be one character')
		.required('Middle name is required'),
	ceeb_code: Yup.string().required('CEEB code is required'),
	school_name: Yup.string().required('School name is required'),
	bio: Yup.string().required('Bio is required'),
	age_confirmation: Yup.boolean()
		.oneOf([true], 'You must confirm that you are at least 13 years old')
		.required(),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	dob: Yup.string().required('Date of birth is required'),
});
