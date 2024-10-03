import * as Yup from 'yup';

export const completeCreditOwnerSignupValidationSchema = Yup.object().shape({
	first_name: Yup.string()
		.required('First Name is required')
		.min(2, 'First Name must be at least 2 characters'),
	last_name: Yup.string()
		.required('Last Name is required')
		.min(2, 'Last Name must be at least 2 characters'),
	middle_initial: Yup.string()
		.max(1, 'Middle Initial can only be 1 character')
		.required('Middle name is required'),
	organization: Yup.string().required('Organization Name is required'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	ceeb_code: Yup.string().required('CEEB code is required'),
	age_confirmation: Yup.boolean()
		.required('You must confirm your age')
		.oneOf([true], 'You must agree to be at least 13 years old to continue'),
	logo: Yup.mixed<File>()
		.required('Logo is required')
		.test('fileSize', 'The file is too large', (value) => {
			return value instanceof File && value.size <= 2 * 1024 * 1024;
		})
		.test('fileType', 'Unsupported file format', (value) => {
			return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type);
		})
		.required('Logo is required'),
});
