import { useQuery } from '@tanstack/react-query';

import { fetchUserInformation } from '../api/users';
import { CACHE_KEY_USER_INFORMATION } from '../constants';

const useUserInformation = () => {
	return useQuery({
		queryKey: [CACHE_KEY_USER_INFORMATION],
		queryFn: fetchUserInformation,
		staleTime: 1_000 * 60 * 60, // 1 hour
		retry: false, // Disable retry on failure
	});
};

export { useUserInformation };
