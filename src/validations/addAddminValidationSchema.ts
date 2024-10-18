import * as yup from 'yup';
import * as Yup from 'yup';

export const addAdminValidationSchema = yup.object().shape({
	email: yup.string().email().required('Username is required'),
	first_name: Yup.string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 characters'),
	last_name: Yup.string()
		.required('Last name is required')
		.min(6, 'Last name must be at least 6 characters'),
});
