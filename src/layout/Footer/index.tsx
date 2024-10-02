import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../components';

const Footer = () => {
	const router = useRouter();

	const isStudentPage = router.pathname === '/student';
	const isCreditDetailsPage = router.pathname === '/student/credit-details'; // Check for the credit-details page

	return (
		<footer className='w-full text-gray-500 py-4'>
			<div className='container mx-auto'>
				{isStudentPage ? (
					<div className='flex justify-end items-center'>
						<div className='flex space-x-2 items-center'>
							<Button>View</Button>
							<Image
								src='/images/icons/view.png'
								alt='view icon'
								width={24}
								height={24}
							/>
						</div>
						<div className='flex space-x-2 items-center ml-10'>
							<Button>Download</Button>
							<Image
								src='/images/icons/download.png'
								alt='download icon'
								width={24}
								height={24}
							/>
						</div>
					</div>
				) : isCreditDetailsPage ? (
					<div className='flex justify-end items-center'>
						<div className='flex flex-row items-center space-x-4 md:space-x-3 sm:space-x-2'>
							<Button className='font-montserrat text-[20px] md:text-[18px] sm:text-[16px] font-semibold leading-[24.38px] text-black'>
								View Rubric
							</Button>
							<Image
								src='/images/icons/gridView.png'
								alt='grid view icon'
								width={24}
								height={24}
								className='w-[24px] h-[24px] md:w-[22px] md:h-[22px] sm:w-[20px] sm:h-[20px]'
							/>
						</div>
					</div>
				) : (
					<div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0'>
						<div>
							<Image
								src='/images/icons/hscreditlogonowords3.png'
								alt='logo icon'
								width={24}
								height={24}
								className='mr-[11px]'
							/>
						</div>
						<div className='pr-2 border-r-[1px] border-black'>
							<Typography
								variant='p'
								className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
							>
								Powered by hs.credit
							</Typography>
						</div>
						<div className='pr-2 pl-2 border-r-[1px] border-black'>
							<Typography
								variant='p'
								className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
							>
								Terms & Services
							</Typography>
						</div>
						<div className='pr-2 pl-2 border-r-[1px] border-black'>
							<Typography
								variant='p'
								className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
							>
								Privacy Policy
							</Typography>
						</div>
						<div className='pr-2 pl-2'>
							<Typography
								variant='p'
								className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
							>
								2022 Academic Capital Foundation, Inc
							</Typography>
						</div>
					</div>
				)}
			</div>
		</footer>
	);
};

export default Footer;
