import { mixed, object } from 'yup';

export const addStudentPitchValidationSchema = object({
	media_asset: mixed<File>().required('A pdf is requried'),
});
