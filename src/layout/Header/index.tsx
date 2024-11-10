import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../components';
import useUserStoreHook from '../../store';

import ConfirmationModal from './ConfirmationModal';

interface HeaderProps {
	isProtected: boolean;
}

const Header = ({ isProtected }: HeaderProps) => {
	const router = useRouter();
	const { firstName } = useUserStoreHook();
	const isAccountCreationPage = router.pathname === '/signup';
	const isLogoutPage = router.pathname === '/logout';
	const [isModalOpen, setIsModalOpen] = useState(false);

	if (isLogoutPage) return null;

	return (
		<div className='container mx-auto pt-10 pb-5'>
			<div className='flex flex-col sm:flex-row justify-between items-center w-full'>
				{isAccountCreationPage ? (
					<>
						<Typography className='text-black text-base sm:pl-8'>hs.credit</Typography>
						<Typography className='text-black text-3xl font-bold text-center sm:text-right'>
							Account Creation
						</Typography>
					</>
				) : (
					<div className='flex justify-between items-center w-full'>
						<div className='flex items-center'>
							<Image
								src='/images/icons/hscreditlogonowords3.png'
								alt='logo'
								width={70}
								height={70}
							/>
							<Typography className='ml-2 text-[22px] font-bold'>hs.credit</Typography>
						</div>
						{isProtected && (
							<div className='flex items-center space-x-4'>
								<Button className='text-2xl !p-0 w-10 h-10 !rounded-[10px] bg-[#85C4E9]'>
									{firstName && firstName[0]}
								</Button>
								<Button
									className='!px-4 bg-transparent'
									onClick={() => setIsModalOpen(true)}
								>
									<Image
										src='/images/icons/quitIcon.png'
										alt='logo'
										width={27}
										height={27}
									/>
								</Button>
								{isModalOpen && (
									<ConfirmationModal onClose={() => setIsModalOpen(false)} />
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
