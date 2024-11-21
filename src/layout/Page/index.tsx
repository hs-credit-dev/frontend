import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useUserInformation } from '../../hooks/users';
import useUserStoreHook from '../../store';
import Footer from '../Footer';
import Header from '../Header';

interface PageProps {
	children: ReactNode;
	isLoading?: boolean;
	isProtected: boolean;
}

const Page = ({ children, isLoading, isProtected }: PageProps) => {
	const { push } = useRouter();
	const { setUserInformation } = useUserStoreHook();
	const { data } = useUserInformation();

	const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null); // Initialize as `null`

	useEffect(() => {
		// Check authorization on the client side
		if (typeof window !== 'undefined') {
			const token = localStorage.getItem('hstoken');
			setIsAuthorized(!!token); // Set true or false based on the token
		}
	}, []);

	useEffect(() => {
		if (data) {
			setUserInformation(data);
		}
	}, [data, setUserInformation]);

	useEffect(() => {
		// Only redirect if `isAuthorized` has been determined (not `null`)
		if (isAuthorized === false && isProtected) {
			console.log('Redirecting to /login');
			push('/login');
		}
	}, [isAuthorized, isProtected, push]);

	// Show loading state while determining `isAuthorized`
	if (isAuthorized === null) {
		return (
			<div className='bg-[#805DBE12] min-h-[100vh] flex flex-col justify-center items-center'>
				Loading...
			</div>
		);
	}

	// If not authorized and protected, display unauthorized message
	if (!isAuthorized && isProtected) {
		return (
			<div className='bg-[#805DBE12] min-h-[100vh] flex flex-col justify-between'>
				Not authorized, please return
			</div>
		);
	}

	return (
		<div className='bg-[#805DBE12] min-h-[100vh] flex flex-col justify-between'>
			<Header isProtected={isProtected} />
			<div className='container mx-auto flex-grow overflow-auto'>
				<div>{isLoading ? 'Loading...' : children}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Page;
