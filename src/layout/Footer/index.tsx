import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '../../components/Button';
import Typography from '../../components/Typography';

const Footer = () => {
	const router = useRouter();

	const isStudentPage = router.pathname === '/student';

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
				) : (
					<div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0'>
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
