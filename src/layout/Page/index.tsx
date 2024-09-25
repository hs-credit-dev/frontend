import React, { ReactNode } from 'react';

import { useUserInformation } from '../../hooks/users';
import useStore from '../../store';
import Footer from '../Footer';
import Header from '../Header';

interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps) => {
	const setUserInformation = useStore((state) => state.setUserInformation);
	const { data } = useUserInformation();

	setUserInformation(data);

	return (
		<div className='bg-[#805DBE12] min-h-[100vh] flex flex-col justify-between'>
			<Header />
			<div className='container mx-auto flex-grow overflow-auto'>{children}</div>
			<Footer />
		</div>
	);
};

export default Page;
