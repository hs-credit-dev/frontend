import { AxiosError } from 'axios';

type OnErrorCallback = (message?: string) => void;

const isObject = (value: unknown): value is Record<string, unknown> => {
	return value !== null && typeof value === 'object';
};

const handleAxiosError = (error: AxiosError, onError: OnErrorCallback) => {
	const responseData = error.response?.data as { [key: string]: string[] };

	if (isObject(responseData)) {
		const firstKey = Object.keys(responseData)[0];

		if (
			firstKey &&
			Array.isArray(responseData[firstKey]) &&
			responseData[firstKey].length > 0
		) {
			const firstError = responseData[firstKey][0];
			onError(firstError);
		} else {
			onError('Something went wrong, please try again');
		}
	} else {
		onError('Something went wrong, please try again');
	}
};

export { handleAxiosError };
