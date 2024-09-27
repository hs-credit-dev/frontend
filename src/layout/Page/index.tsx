import React, { ReactNode, useEffect } from 'react';

import { useUserInformation } from '../../hooks/users';
import useUserStoreHook from '../../store';
import Footer from '../Footer';
import Header from '../Header';

interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps) => {
	const { setUserInformation, isStudent } = useUserStoreHook();
	const { data } = useUserInformation();
	console.log('data', data);
	setUserInformation(data);

	useEffect(() => {
		console.log('isStudent', isStudent);
	}, [isStudent]);

	return (
		<div className='bg-[#805DBE12] min-h-[100vh] flex flex-col justify-between'>
			<Header />
			<div className='container mx-auto flex-grow overflow-auto'>{children}</div>
			<Footer />
		</div>
	);
};

export default Page;
