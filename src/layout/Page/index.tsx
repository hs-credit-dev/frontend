import React, { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

import { useUserInformation } from '../../hooks/users';
import useUserStoreHook from '../../store';
import Footer from '../Footer';
import Header from '../Header';

interface PageProps {
	children: ReactNode;
	isLoading?: boolean;
}

const Page = ({ children, isLoading }: PageProps) => {
	const { push } = useRouter();
	const pathname = usePathname();
	const { setUserInformation, isCreditOwner, isStudent, isCreditAdmin, isAuthorized } =
		useUserStoreHook();
	const { data } = useUserInformation();

	const isCreditOwnerPage = pathname.includes('creditowner');
	const isStudentPage = pathname.includes('student');
	const isCreditAdminPage = pathname.includes('creditowner');
	useEffect(() => {
		if (data) {
			setUserInformation(data);
		}
	}, [data, setUserInformation]);

	useEffect(() => {
		if (!isAuthorized) {
			push('/login');
		}
	}, [isAuthorized, push]);

	const authorized =
		(isStudentPage && isStudent) ||
		(isCreditOwnerPage && isCreditOwner) ||
		(isCreditAdmin && isCreditAdminPage);

	return (
		<div className='bg-[#805DBE12] min-h-[100vh] flex flex-col justify-between'>
			<Header />
			<div className='container mx-auto flex-grow overflow-auto'>
				{authorized ? (
					<div>{isLoading ? 'Loading...' : children}</div>
				) : (
					'Not authorized, please return'
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Page;
