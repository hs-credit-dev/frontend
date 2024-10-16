import { useQuery } from '@tanstack/react-query';

import { getCreditAdmin } from '../api/creditAdmin';
import { CACHE_KEY_FETCH_CREDIT_ADMINS } from '../constants';

const useGetCreditAdmin = (id: string) => {
	return useQuery({
		queryKey: [CACHE_KEY_FETCH_CREDIT_ADMINS, id],
		queryFn: () => getCreditAdmin(id),
		staleTime: 1_000 * 60 * 60, // 1 hour
		retry: false, // Disable retry on failure
	});
};

export { useGetCreditAdmin };
