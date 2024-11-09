import { useQuery } from '@tanstack/react-query';

import { CACHE_KEY_GET_SIGNUP_USER } from '../../../constants';
import { fetchSignup } from '../api';

export const useGetSignup = (accountId: string) => {
	return useQuery({
		queryKey: [CACHE_KEY_GET_SIGNUP_USER, accountId],
		queryFn: () => fetchSignup(accountId),
		staleTime: 1_000 * 60 * 60,
		enabled: !!accountId,
		retry: false,
	});
};
