import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { createProject } from '../api/projects';
import { handleAxiosError } from '../utils/errors';

type OnSuccessCallback = (message?: string) => void;
type OnErrorCallback = (message?: string) => void;

const useCreateProject = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: createProject,
		onSuccess: (response) => {
			console.log('response', response);
			onSuccess('Educator succesfully invited');
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
			handleAxiosError(error, onError);
		},
	});
};

export { useCreateProject };
