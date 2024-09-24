import React from 'react';

import Typography from '../../components/Typography';

const Header = () => {
	return (
		<div className='container mx-auto pt-10 pb-5'>
			<div className='flex flex-col sm:flex-row justify-between items-center w-full'>
				<Typography className='text-black text-base sm:pl-8'>hs.credit</Typography>
				<Typography className='text-black text-3xl font-bold text-center sm:text-right'>
					Account Creation
				</Typography>
			</div>
		</div>
	);
};

export default Header;
