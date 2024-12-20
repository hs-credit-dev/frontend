import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../components';
import Page from '../../layout/Page';

const Logout = () => {
	const { push } = useRouter();

	const handleLoginRedirect = () => {
		push('/login');
	};

	return (
		<Page isProtected={false}>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				<div className='flex flex-col items-center space-y-[61px]'>
					<Typography className='font-montserrat text-[40px] font-semibold leading-[48.76px] text-center'>
						You have successfully logged out!
					</Typography>
					<div className='w-[203px] h-[52px]'>
						<Button onClick={handleLoginRedirect} className='w-full font-bold'>
							Log In
						</Button>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Logout;
