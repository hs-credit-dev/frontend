import { boolean, mixed, object, ref, string } from 'yup';

export const completeCreditOwnerSignupValidationSchema = object().shape({
	first_name: string()
		.required('First Name is required')
		.min(2, 'First Name must be at least 2 characters'),
	last_name: string()
		.required('Last Name is required')
		.min(2, 'Last Name must be at least 2 characters'),
	middle_initial: string()
		.max(1, 'Middle Initial can only be 1 character')
		.required('Middle name is required'),
	organization: string().required('Organization Name is required'),
	password: string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirm_password: string()
		.oneOf([ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	ceeb_code: string().required('CEEB code is required'),
	age_confirmation: boolean()
		.required('You must confirm your age')
		.oneOf([true], 'You must agree to be at least 13 years old to continue'),
	logo: mixed<File>()
		.required('Logo is required')
		.test('fileSize', 'The file is too large', (value) => {
			return value instanceof File && value.size <= 2 * 1024 * 1024;
		})
		.test('fileType', 'Unsupported file format', (value) => {
			return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type);
		})
		.required('Logo is required'),
});
