import React from 'react';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';

const LogoutConfirmation = () => {
	const [isClicked, setIsClicked] = React.useState(false);
	const router = useRouter();

	const handleClick = () => {
		setIsClicked(true);
		router.back();
	};

	const handleLogout = () => {
		router.push('/logout');
	};

	return (
		<div className='flex justify-center items-center w-screen h-screen'>
			<div className='w-[358px] h-[156px] flex items-center flex-col'>
				<div className='mt-[41px]'>
					<Typography className='font-montserrat text-[16px] font-semibold leading-[19.5px] text-center'>
						Are you sure you want to log out?
					</Typography>
				</div>
				<div className='flex flex-row space-x-[47px] mt-[19px]'>
					<Button
						onClick={handleLogout}
						className='border border-[#805dbe] w-[87px] h-[29px] rounded-full text-[8px] text-[#805dbe] font-montserrat'
					>
						Yes
					</Button>
					<Button
						onClick={handleClick}
						className={`w-[87px] h-[29px] rounded-full text-[8px] text-white font-montserrat ${
							isClicked ? 'bg-red-500' : 'bg-[#805dbe]'
						}`}
					>
						No
					</Button>
				</div>
			</div>
		</div>
	);
};

export default LogoutConfirmation;
