import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
	addCreditAdmin,
	addCreditExpert,
	addCreditRubrics,
	createCredit,
	fetchCredit,
	fetchCredits,
	publishCredit,
	updateCredit,
} from '../api/credits';
import { CACHE_KEY_FETCH_CREDITS } from '../constants';
import { CreditAdmins, CreditExperts } from '../types';
import { handleAxiosError } from '../utils/errors';

type UpdateValues = {
	description?: string;
	rubric_version?: string;
	stake_text?: string;
	pitch_text?: string;
	mint_text?: string;
};

type UpdateCreditParams = {
	creditId: string;
	values: UpdateValues;
};

type Rubric = {
	title: string;
	points: number;
	blurb: string;
	notes: string;
	is_active: boolean;
};

interface AddRubricPayload {
	rubric: Rubric[];
}

type OnSuccessCallback = (message?: string) => void;
type OnErrorCallback = (message?: string) => void;

const useGetCredits = (page: number) => {
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

const useAddCreditExpert = (
	creditId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (values: CreditExperts) => addCreditExpert(creditId, values),
		onSuccess: (response) => {
			queryClient.invalidateQueries({ queryKey: [CACHE_KEY_FETCH_CREDITS, creditId] });
			onSuccess(
				`Successfully invited expert ${response.first_name} ${response.last_name}`,
			);
		},
		onError: (error: AxiosError) => {
			handleAxiosError(error, onError);
		},
	});
};

const useAddCreditRubric = (
	creditId: string,
	onSuccess: OnSuccessCallback,
	onError: OnErrorCallback,
) => {
	return useMutation({
		mutationFn: (values: AddRubricPayload) => addCreditRubrics(creditId, values),
		onSuccess: () => {
			onSuccess('Successfully add rubrics');
		},
		onError: (error: AxiosError) => {
			handleAxiosError(error, onError);
		},
	});
};

export {
	useAddCreditAdmin,
	useAddCreditExpert,
	useAddCreditRubric,
	useCreateCredit,
	useFetchCredit,
	useGetCredits,
	usePublishCredit,
	useUpdateCredit,
};
