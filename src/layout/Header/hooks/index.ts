import { useMutation } from '@tanstack/react-query';

import { logout } from '../api';

type OnSuccessCallback = () => void;
type OnErrorCallback = (message?: string) => void;

export const useLogout = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			onSuccess();
			localStorage.removeItem('hstoken');
		},
		onError: () => {
			onError();
		},
	});
};
