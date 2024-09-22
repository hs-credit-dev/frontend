import React, { ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';

interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps) => {
	return (
		<div className='bg-[#805DBE12] h-[100vh]'>
			<Header />
			<div className='container mx-auto h-[calc(100vh-110px)]'>{children}</div>
			<Footer />
		</div>
	);
};

export default Page;
