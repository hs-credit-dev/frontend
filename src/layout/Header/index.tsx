import React from 'react';

import Typography from '../../components/Typography';

const Header = () => {
	return (
		<div className='container'>
			<div className='flex flex-col sm:flex-row justify-between w-full'>
				<Typography className='text-black text-base pl-4 sm:pl-8 pt-4'>
					hs.credit
				</Typography>
				<Typography className='text-black text-3xl font-bold pr-4 pt-4 text-center sm:text-right'>
					Account Creation
				</Typography>
			</div>
		</div>
	);
};

export default Header;
