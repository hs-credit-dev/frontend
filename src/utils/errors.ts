import { AxiosError } from 'axios';

type OnErrorCallback = (message?: string) => void;

const isObject = (value: unknown): value is Record<string, unknown> => {
	return value !== null && typeof value === 'object';
};

const handleAxiosError = (error: AxiosError, onError: OnErrorCallback) => {
	const responseData = error.response?.data as { [key: string]: string | string[] };

	if (isObject(responseData)) {
		const firstKey = Object.keys(responseData)[0];

		if (firstKey) {
			const value = responseData[firstKey];

			if (Array.isArray(value) && value.length > 0) {
				onError(value[0]); // Handle array case
			} else if (typeof value === 'string' && value.trim()) {
				const formattedKey = firstKey.charAt(0).toUpperCase() + firstKey.slice(1); // Capitalize first letter
				onError(`${formattedKey} ${value.toLowerCase()}`); // Handle string case
			} else {
				onError('Something went wrong, please try again');
			}
		} else {
			onError('Something went wrong, please try again');
		}
	} else {
		onError('Something went wrong, please try again');
	}
};

export { handleAxiosError };
