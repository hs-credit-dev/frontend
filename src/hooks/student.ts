import { useQuery } from '@tanstack/react-query';

import { fetchStudents } from '../api/student';
import { CACHE_KEY_FETCH_STUDENTS } from '../constants';

const useFetchStudents = (page: number) => {
	return useQuery({
		queryKey: [CACHE_KEY_FETCH_STUDENTS, page],
		queryFn: () => fetchStudents(page),
		staleTime: 1_000 * 60 * 60, // 1 hour
		retry: false, // Disable retry on failure
	});
};

export { useFetchStudents };
