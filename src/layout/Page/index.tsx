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
	isProtected: boolean;
}

const Page = ({ children, isLoading, isProtected }: PageProps) => {
	const { push } = useRouter();
	const pathname = usePathname();
	const {
		setUserInformation,
		isCreditOwner,
		isStudent,
		isCreditAdmin,
		isAuthorized,
		isEducator,
	} = useUserStoreHook();
	const { data } = useUserInformation();

	const isCreditOwnerPage = pathname?.includes('creditowner');
	const isStudentPage = pathname?.includes('student');
	const isCreditAdminPage = pathname?.includes('creditadmin');
	const isEducatorPage = pathname?.includes('educator');

	useEffect(() => {
		if (data) {
			setUserInformation(data);
		}
	}, [data, setUserInformation]);

	useEffect(() => {
		if (!isAuthorized && isProtected) {
			push('/login');
		}
	}, [isAuthorized, isProtected, push]);

	const authorized =
		isProtected &&
		((isStudentPage && isStudent) ||
			(isCreditOwnerPage && isCreditOwner) ||
			(isCreditAdmin && isCreditAdminPage) ||
			(isEducator && isEducatorPage));

	if (!authorized && isProtected) {
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
