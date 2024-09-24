import React from 'react';

import Typography from '../../components/Typography';

const Footer = () => {
	return (
		<footer className='w-full flex items-center text-gray-500 py-4 mt-8 md:mt-0'>
			<div className='container mx-auto'>
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

					<div className='pr-2 pl-2 border-r-2'>
						<Typography
							variant='p'
							className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
						>
							2022 Academic Capital Foundation, Inc
						</Typography>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
