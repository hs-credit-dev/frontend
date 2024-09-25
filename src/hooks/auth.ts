import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { completeUserSignup, getSignupUser, loginUser, signupUser } from '../api/auth';
import { CACHE_KEY_GET_SIGNUP_USER } from '../constants';
import { RegisterFormValues } from '../types';

const useLogin = () => {
	const { push } = useRouter();

	return useMutation({
		mutationFn: loginUser,
		onSuccess: (response) => {
			push('/student');
			localStorage.setItem('hstoken', response.token);
		},
	});
};

const useSignup = () => {
	return useMutation({
		mutationFn: signupUser,
		onSuccess: (response) => {
			console.log(response);
		},
	});
};

const useFetchSignupUser = (accountId: string) => {
	return useQuery({
		queryKey: [CACHE_KEY_GET_SIGNUP_USER, accountId],
		queryFn: () => getSignupUser(accountId),
		staleTime: 1_000 * 60 * 60,
		enabled: !!accountId,
	});
};

const useCompleteUserSignup = (accountId: string) => {
	const { push } = useRouter();

	return useMutation({
		mutationFn: (values: RegisterFormValues) => completeUserSignup(accountId, values),
		onSuccess: (response) => {
			console.log(response);
			push('/login');
		},
	});
};

export { useCompleteUserSignup, useFetchSignupUser, useLogin, useSignup };
