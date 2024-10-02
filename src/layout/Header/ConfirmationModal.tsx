import React from 'react';
import { useRouter } from 'next/router';

import { logoutUser } from '../../api/auth';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

interface ConfirmationModalProps {
	onClose: () => void;
}

const ConfirmationModal = ({ onClose }: ConfirmationModalProps) => {
	const router = useRouter();

	const handleLogout = async () => {
		try {
			const token = localStorage.getItem('hstoken');
			if (token) {
				await logoutUser(token);
				console.log('Logout successful');
				localStorage.removeItem('hstoken');
				router.push('/login');
			} else {
				console.error('No hstoken found in localStorage');
			}
		} catch (error) {
			console.error('Logout failed:', error);
		}
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40'></div>
			<div className='flex flex-col items-center justify-center w-[90%] max-w-[358px] h-auto md:h-[160px] p-4 md:p-6 bg-white shadow-lg shadow-gray-500/50 rounded-lg z-50'>
				<Typography className='font-montserrat text-[14px] md:text-[16px] font-semibold leading-[19.5px] text-center mb-[16px] md:mb-[19px]'>
					Are you sure you want to log out?
				</Typography>
				<div className='flex flex-row items-center justify-center space-x-[20px] md:space-x-[47px]'>
					<Button
						onClick={handleLogout}
						className='w-[75px] h-[29px] md:w-[87px] rounded-full border border-[#805dbe] text-[#805dbe]'
					>
						Yes
					</Button>
					<Button
						onClick={onClose}
						className='w-[75px] h-[29px] md:w-[87px] rounded-full bg-[#805dbe] text-white'
					>
						No
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
