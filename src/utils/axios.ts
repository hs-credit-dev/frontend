import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const axiosClient = (token: string | null = null): AxiosInstance => {
	const client = axios.create({
		baseURL: 'https://api.hs.credit',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		timeout: 6000,
		withCredentials: false,
	});

	client.interceptors.request.use((config) => {
		const token = localStorage.getItem('hstoken');
		config.headers = config.headers || {};
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	});

	client.interceptors.response.use(
		(response: AxiosResponse) => {
			return response;
		},
		(error: AxiosError) => {
			try {
				const { response } = error;
				if (response?.status === 401) {
					localStorage.removeItem('hstoken');
				}
			} catch (e) {
				console.error(e);
			}
			throw error;
		},
	);

	return client;
};

const client = axiosClient();

export default client;
