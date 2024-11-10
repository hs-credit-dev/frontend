import { array, boolean, number, object, string } from 'yup';

export const addRubricValidationSchema = object().shape({
	rubric: array()
		.of(
			object().shape({
				title: string().required('Title is required'),
				points: number()
					.required('Points are required')
					.min(1, 'Points must be greater than or equal to 1'),
				blurb: string().required('Blurb is required'),
				notes: string().required('Notes are required'),
				is_active: boolean().required(),
			}),
		)
		.min(1, 'At least one rubric is required'), // Ensures there is at least one rubric
});
