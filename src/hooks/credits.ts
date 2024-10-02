import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { createCredit, fetchCredit, fetchCredits } from '../api/credits';
import { CACHE_KEY_FETCH_CREDITS } from '../constants';

const isObject = (value: unknown): value is Record<string, unknown> => {
	return value !== null && typeof value === 'object';
};

const isArrayOfString = (value: unknown): value is string[] => {
	return Array.isArray(value) && value.every((item) => typeof item === 'string');
};

type OnSuccessCallback = (message?: string) => void;
type OnErrorCallback = (message?: string) => void;

const useFetchCredits = (page: number) => {
	return useQuery({
		queryKey: [CACHE_KEY_FETCH_CREDITS, page],
		queryFn: () => fetchCredits(page),
		staleTime: 1_000 * 60 * 60, // 1 hour
		retry: false, // Disable retry on failure
	});
};

const useCreateCredit = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: createCredit,
		onSuccess: (response) => {
			onSuccess(`Successfully created credit ${response.name}`);
		},
		onError: (error: AxiosError) => {
			const responseData = error.response?.data;
			if (isObject(responseData) && 'discipline' in responseData) {
				const nonFieldErrors = responseData.discipline;

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

const useFetchCredit = (creditId: string) => {
	return useQuery({
		queryKey: [CACHE_KEY_FETCH_CREDITS, creditId],
		queryFn: () => fetchCredit(creditId),
		staleTime: 1_000 * 60 * 60,
		enabled: !!creditId,
		retry: false,
	});
};

export { useCreateCredit, useFetchCredit, useFetchCredits };
