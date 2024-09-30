import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { createCredit, fetchCredit, fetchCredits } from '../api/credits';
import { CACHE_KEY_FETCH_CREDITS } from '../constants';

const useFetchCredits = (page: number) => {
	return useQuery({
		queryKey: [CACHE_KEY_FETCH_CREDITS, page],
		queryFn: () => fetchCredits(page),
		staleTime: 1_000 * 60 * 60, // 1 hour
		retry: false, // Disable retry on failure
	});
};

const useCreateCredit = () => {
	return useMutation({
		mutationFn: createCredit,
		onSuccess: (response) => {
			console.log('response', response);
		},
		onError: (error: AxiosError) => {
			console.log('error', error);
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
