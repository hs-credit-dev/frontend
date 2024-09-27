import { useQuery } from '@tanstack/react-query';

import { fetchCredits } from '../api/credits';
import { CACHE_KEY_FETCH_CREDITS } from '../constants';

const useFetchCredits = (page: number) => {
	return useQuery({
		queryKey: [CACHE_KEY_FETCH_CREDITS, page],
		queryFn: () => fetchCredits(page),
		staleTime: 1_000 * 60 * 60, // 1 hour
		retry: false, // Disable retry on failure
	});
};

export { useFetchCredits };
