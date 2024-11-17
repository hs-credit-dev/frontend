import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { completeSignup, fetchSignup, login, logout, signup } from '../api/auth';
import { fetchUserInformation } from '../api/users';
import { CACHE_KEY_GET_SIGNUP_USER } from '../constants';
import {
	CompleteSignupFormCreditAdminValues,
	CompleteSignupFormExpertValues,
	CompleteSignupFormStudentValues,
} from '../types';
import { handleAxiosError } from '../utils/errors';
import { toastError, toastSuccess } from '../utils/toast';

type OnSuccessCallback = () => void;
type OnErrorCallback = (message?: string) => void;

export const useLogin = () => {
	const { push } = useRouter();

	return useMutation({
		mutationFn: login,
		onSuccess: (response) => {
			localStorage.setItem('hstoken', response.token);

			fetchUserInformation()
				.then((res) => {
					toastSuccess('Login Successful!');
					setTimeout(() => {
						if (!!res.student) {
							push('/dashboard/student');
						} else if (!!res.credit_owner) {
							push('/dashboard/creditowner');
						} else if (!!res.credit_admins.length) {
							push('/dashboard/creditadmin');
						} else if (res.educator.link) {
							push('/dashboard/educator');
						} else {
							push('/dashboard/staff/students');
						}
					}, 1000);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		onError: (error: AxiosError) => {
			handleAxiosError(error, toastError);
		},
	});
};

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

export const useGetSignup = (accountId: string) => {
	return useQuery({
		queryKey: [CACHE_KEY_GET_SIGNUP_USER, accountId],
		queryFn: () => fetchSignup(accountId),
		staleTime: 1_000 * 60 * 60,
		enabled: !!accountId,
		retry: false,
	});
};

export const useCompleteSignup = (
	accountId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (
			values:
				| FormData
				| CompleteSignupFormStudentValues
				| CompleteSignupFormCreditAdminValues
				| CompleteSignupFormExpertValues,
		) => completeSignup(accountId, values),
		onSuccess: () => {
			onSuccess();
		},
		onError: () => {
			onError();
		},
	});
};

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
