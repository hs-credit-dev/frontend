import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../components';
import { useLogout } from '../../hooks/auth';
import { toastError, toastSuccess } from '../../utils/toast';

interface ConfirmationModalProps {
	onClose: () => void;
}

const ConfirmationModal = ({ onClose }: ConfirmationModalProps) => {
	const { push } = useRouter();

	const onSuccessMutation = () => {
		toastSuccess('Logged out successfully!');
		setTimeout(() => {
			push('/logout');
		}, 1000);
	};

	const onErrorMutation = () => {
		toastError('Something went wrong, please try again later!');
	};

	const { mutate } = useLogout(onSuccessMutation, onErrorMutation);
	const handleLogout = async () => {
		const token = localStorage.getItem('hstoken');
		if (token) {
			mutate(token);
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
						className='!py-2 !px-9 bg-transparent !text-[#805DBE] !border-[#805DBE] border-[1px]'
						onClick={handleLogout}
					>
						Yes
					</Button>
					<Button className='!py-2 !px-9' onClick={onClose}>
						No
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationModal;
