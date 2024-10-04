import React from 'react';

import Button from '../../../components/Button';

type ButtonCellProps = {
	isDisabled: boolean;
};

const ButtonCell = ({ isDisabled }: ButtonCellProps) => {
	return (
		<div className='flex items-center space-x-2 mr-[40px]'>
			<Button
				className={`w-[114px] h-[24px] px-4 font-normal text-white ${
					isDisabled
						? 'bg-gray-400 cursor-not-allowed'
						: 'bg-[#805DBE] hover:bg-violet-700'
				}`}
				disabled={isDisabled}
			>
				Approve
			</Button>
			<Button className='w-[114px] h-[24px] bg-[#D40000] text-white px-4 font-normal hover:bg-violet-700'>
				Decline
			</Button>
		</div>
	);
};

export default ButtonCell;
