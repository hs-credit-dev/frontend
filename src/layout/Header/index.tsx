import React from 'react';

import Typography from '../../components/Typography';

const Header = () => {
	return (
		<div className='flex flex-col sm:flex-row justify-between w-full'>
			<Typography className='text-black text-base pl-4 sm:pl-8 lg:pl-[170px] pt-4 sm:pt-8'>
				hs.credit
			</Typography>
			<Typography className='text-black text-3xl font-bold pr-4 sm:pr-8 lg:pr-[170px] pt-4 sm:pt-8 text-center sm:text-right'>
				Account Creation
			</Typography>
		</div>
	);
};

export default Header;
