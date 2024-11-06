import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import {
	completeUserSignup,
	getSignupUser,
	loginUser,
	logoutUser,
	signupUser,
} from '../api/auth';
import { fetchUserInformation } from '../api/users';
import { CACHE_KEY_GET_SIGNUP_USER } from '../constants';
import {
	CompleteSignupFormCreditAdminValues,
	CompleteSignupFormExpertValues,
	CompleteSignupFormStudentValues,
} from '../types';
import { handleAxiosError } from '../utils/errors';

type OnSuccessCallback = () => void;
type OnErrorCallback = (message?: string) => void;

const useLogin = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	const { push } = useRouter();

	return useMutation({
		mutationFn: loginUser,
		onSuccess: (response) => {
			localStorage.setItem('hstoken', response.token);

			fetchUserInformation()
				.then((res) => {
					console.log('res', res);
					onSuccess();
					setTimeout(() => {
						if (!!res.student) {
							push('/dashboard/student');
						} else if (!!res.credit_owner) {
							push('/dashboard/creditowner');
						} else if (!!res.credit_admins.length) {
							push('/dashboard/creditowner');
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
			handleAxiosError(error, onError);
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
			handleAxiosError(error, onError);
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
		mutationFn: (
			values:
				| FormData
				| CompleteSignupFormStudentValues
				| CompleteSignupFormCreditAdminValues
				| CompleteSignupFormExpertValues,
		) => completeUserSignup(accountId, values),
		onSuccess: () => {
			onSuccess();
		},
		onError: () => {
			onError();
		},
	});
};

const useLogout = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: logoutUser,
		onSuccess: () => {
			onSuccess();
			localStorage.removeItem('hstoken');
		},
		onError: () => {
			onError();
		},
	});
};

export { useCompleteUserSignup, useFetchSignupUser, useLogin, useLogout, useSignup };
