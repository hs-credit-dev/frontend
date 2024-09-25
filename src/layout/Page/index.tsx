import React, { ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';

interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps) => {
	return (
		<div className='bg-[#805DBE12] min-h-[100vh] flex flex-col justify-between'>
			<Header />
			<div className='container mx-auto flex-grow overflow-auto'>{children}</div>
			<Footer />
		</div>
	);
};

export default Page;
