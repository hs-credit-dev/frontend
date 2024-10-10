import React, { RefCallback } from 'react';

import { Typography } from '../index';

interface TextAreaProps {
	isTouched?: boolean;
	message?: string;
	value?: string;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	forwardRef?: RefCallback<HTMLTextAreaElement>;
	name?: string;
}

const TextArea = ({
	isTouched,
	message,
	value,
	name,
	className,
	onBlur,
	onChange,
	forwardRef,
	placeholder,
	disabled,
}: TextAreaProps) => (
	<>
		<textarea
			id={name}
			ref={forwardRef}
			placeholder={placeholder}
			disabled={disabled}
			value={value}
			name={name}
			className={className}
			onBlur={onBlur}
			onChange={onChange}
			rows={4}
		/>
		{isTouched && message && (
			<Typography variant='p' className='text-red-500 text-xs'>
				{message}
			</Typography>
		)}
	</>
);

export default TextArea;
