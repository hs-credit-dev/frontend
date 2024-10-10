import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
	addCreditAdmin,
	createCredit,
	fetchCredit,
	fetchCredits,
	publishCredit,
	updateCredit,
} from '../api/credits';
import { CACHE_KEY_FETCH_CREDITS } from '../constants';
import { CreditAdmins } from '../types';

const isObject = (value: unknown): value is Record<string, unknown> => {
	return value !== null && typeof value === 'object';
};

const isArrayOfString = (value: unknown): value is string[] => {
	return Array.isArray(value) && value.every((item) => typeof item === 'string');
};

type UpdateCreditParams = {
	creditId: string;
	values: FormData;
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
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: createCredit,
		onSuccess: (response) => {
			queryClient.invalidateQueries({ queryKey: [CACHE_KEY_FETCH_CREDITS] });
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

const useUpdateCredit = (onSuccess: OnSuccessCallback, onError: OnErrorCallback) => {
	return useMutation({
		mutationFn: ({ creditId, values }: UpdateCreditParams) =>
			updateCredit(creditId, values),
		onSuccess: (response) => {
			onSuccess(`Successfully updated credit ${response.name}`);
		},
		onError: (error: AxiosError) => {
			const responseData = error.response?.data;
			console.log(error);
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

const usePublishCredit = (
	creditId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: () => publishCredit(creditId),
		onSuccess: (response) => {
			console.log('res', response);
			onSuccess(`Successfully published credit ${response.name}`);
		},
		onError: (error: AxiosError) => {
			const responseData = error.response?.data;
			console.log('error', error);
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

const useAddCreditAdmin = (creditId: string) => {
	return useMutation({
		mutationFn: (values: CreditAdmins) => addCreditAdmin(creditId, values),
		onSuccess: (response) => {
			console.log('res', response);
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
		},
	});
};

export {
	useAddCreditAdmin,
	useCreateCredit,
	useFetchCredit,
	useFetchCredits,
	usePublishCredit,
	useUpdateCredit,
};
