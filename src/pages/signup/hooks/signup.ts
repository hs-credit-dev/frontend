import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { handleAxiosError } from '../../../utils/errors';
import { signup } from '../api';

type OnSuccessCallback = () => void;
type OnErrorCallback = (message?: string) => void;

export const useSignup = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: signup,
		onSuccess: () => {
			onSuccess();
		},
		onError: (error: AxiosError) => {
			handleAxiosError(error, onError);
		},
	});
};
