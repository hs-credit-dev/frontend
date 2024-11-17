import { object, string } from 'yup';

export const addStudentMintValidationSchema = object().shape({
	title: string().required('Title is required'),
	abstract: string().required('Abstract is required'),
});
