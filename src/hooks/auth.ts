import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { completeUserSignup, getSignupUser, loginUser, signupUser } from '../api/auth';
import { fetchUserInformation } from '../api/users';
import { CACHE_KEY_GET_SIGNUP_USER } from '../constants';
import { RegisterFormValues } from '../types';

type OnSuccessCallback = () => void;
type OnErrorCallback = (message?: string) => void;

const isObject = (value: unknown): value is Record<string, unknown> => {
	return value !== null && typeof value === 'object';
};
const isArrayOfString = (value: unknown): value is string[] => {
	return Array.isArray(value) && value.every((item) => typeof item === 'string');
};

const useLogin = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	const { push } = useRouter();

	return useMutation({
		mutationFn: loginUser,
		onSuccess: (response) => {
			localStorage.setItem('hstoken', response.token);

			fetchUserInformation()
				.then((res) => {
					onSuccess();
					setTimeout(() => {
						if (!!res.student) {
							push('/dashboard/student');
						}
					}, 1000);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		onError: (error: AxiosError) => {
			const responseData = error.response?.data;

			if (isObject(responseData) && 'non_field_errors' in responseData) {
				const nonFieldErrors = responseData.non_field_errors;

				// Check if nonFieldErrors is an array of strings
				if (isArrayOfString(nonFieldErrors)) {
					onError(nonFieldErrors[0]);
				} else {
					onError('Something went wrong, please try again');
				}
			} else {
				onError('Something went wrong, please try again');
			}
		},
	});
};

const useSignup = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: signupUser,
		onSuccess: () => {
			onSuccess();
		},
		onError: (error: AxiosError) => {
			const responseData = error.response?.data;

			if (isObject(responseData) && 'email' in responseData) {
				const nonFieldErrors = responseData.email;

				if (isArrayOfString(nonFieldErrors)) {
					onError(nonFieldErrors[0]);
				} else {
					onError('Something went wrong, please try again');
				}
			} else {
				onError('Something went wrong, please try again');
			}
		},
	});
};

const useFetchSignupUser = (accountId: string) => {
	return useQuery({
		queryKey: [CACHE_KEY_GET_SIGNUP_USER, accountId],
		queryFn: () => getSignupUser(accountId),
		staleTime: 1_000 * 60 * 60,
		enabled: !!accountId,
		retry: false,
	});
};

const useCompleteUserSignup = (
	accountId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (values: RegisterFormValues) => completeUserSignup(accountId, values),
		onSuccess: () => {
			onSuccess();
		},
		onError: () => {
			onError();
		},
	});
};

export { useCompleteUserSignup, useFetchSignupUser, useLogin, useSignup };
