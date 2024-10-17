import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getCreditOwners } from '../api/staff';
import { CACHE_KEY_CREDIT_OWNERS } from '../constants';
import { CreditOwner } from '../types';

const useFetchCreditOwners = (): UseQueryResult<CreditOwner[], AxiosError> => {
	return useQuery<CreditOwner[], AxiosError>({
		queryKey: [CACHE_KEY_CREDIT_OWNERS],
		queryFn: getCreditOwners,
		staleTime: 1_000 * 60 * 60,
		retry: false,
	});
};

export { useFetchCreditOwners };
