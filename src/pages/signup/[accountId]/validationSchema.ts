import * as yup from 'yup';

import { RegisterFormValues } from '../../../types';

const validationSchema: yup.ObjectSchema<RegisterFormValues> = yup.object({
	first_name: yup.string().required('First name is required'),
	last_name: yup.string().required('Last name is required'),
	middle_initial: yup.string().max(1, 'M.I. must be one character').optional(),
	ceeb_code: yup.string().required('CEEB code is required'),
	school_name: yup.string().required('School name is required'),
	bio: yup.string().required('Bio is required'),
	ageConfirmation: yup
		.boolean()
		.oneOf([true], 'You must confirm that you are at least 13 years old')
		.required(),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	dob: yup.string().required('Date of birth is required'),
});

export { validationSchema };
