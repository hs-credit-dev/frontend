import React, { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

import { useUserInformation } from '../../hooks/users';
import useUserStoreHook from '../../store';
import Footer from '../Footer';
import Header from '../Header';

interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps) => {
	const { push } = useRouter();
	const pathname = usePathname();
	console.log('pathname', pathname);
	const { setUserInformation, isAuthorized } = useUserStoreHook();
	const { data } = useUserInformation();

	if (data) {
		setUserInformation(data);
	}

	useEffect(() => {
		if (!isAuthorized && pathname !== '/signup') {
			push('/login');
		}
	}, [isAuthorized, push]);

	return (
		<div className='bg-[#805DBE12] min-h-[100vh] flex flex-col justify-between'>
			<Header />
			<div className='container mx-auto flex-grow overflow-auto'>{children}</div>
			<Footer />
		</div>
	);
};

export default Page;
