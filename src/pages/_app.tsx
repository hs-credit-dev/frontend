import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import 'react-toastify/dist/ReactToastify.css';
import '../globals.css';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ToastContainer position='top-right' autoClose={3000} closeOnClick />
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}
