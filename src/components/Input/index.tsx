import React, { RefCallback } from 'react';

import { Typography } from '../index';

type InputProps = {
	type?: string;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	forwardRef?: RefCallback<HTMLInputElement>;
	isTouched?: boolean;
	name?: string;
	message?: string;
	value: string | number;
};

const Input = ({
	type = 'text',
	placeholder = '',
	className = '',
	disabled = false,
	onChange,
	onBlur,
	forwardRef,
	name,
	message,
	isTouched = false,
	value,
}: InputProps) => (
	<>
		<input
			name={name}
			ref={forwardRef}
			type={type}
			onBlur={onBlur}
			placeholder={placeholder}
			className={className}
			disabled={disabled}
			onChange={onChange}
			id={name}
			value={value}
		/>
		{isTouched && message && (
			<Typography variant='p' className='text-red-500 text-xs'>
				{message}
			</Typography>
		)}
	</>
);

export default Input;
