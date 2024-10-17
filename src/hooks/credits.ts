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
import { handleAxiosError } from '../utils/errors';

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
			handleAxiosError(error, onError);
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
			handleAxiosError(error, onError);
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
			onSuccess(`Successfully published credit ${response.name}`);
		},
		onError: (error: AxiosError) => {
			handleAxiosError(error, onError);
		},
	});
};

const useAddCreditAdmin = (
	creditId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (values: CreditAdmins) => addCreditAdmin(creditId, values),
		onSuccess: (response) => {
			onSuccess(
				`Successfully invited admin ${response.first_name} ${response.last_name}`,
			);
		},
		onError: (error: AxiosError) => {
			handleAxiosError(error, onError);
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
