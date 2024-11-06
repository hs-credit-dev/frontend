import * as yup from 'yup';

export const addRubricValidationSchema = yup.object().shape({
	rubric: yup
		.array()
		.of(
			yup.object().shape({
				title: yup.string().required('Title is required'),
				points: yup
					.number()
					.required('Points are required')
					.min(1, 'Points must be greater than or equal to 1'),
				blurb: yup.string().required('Blurb is required'),
				notes: yup.string().required('Notes are required'),
				is_active: yup.boolean().required(),
			}),
		)
		.min(1, 'At least one rubric is required'), // Ensures there is at least one rubric
});
