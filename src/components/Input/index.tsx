import React, { RefCallback } from 'react';

type InputProps = {
	type?: string;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	textColor?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	forwardRef?: RefCallback<HTMLInputElement>;
	id?: string;
	isTouched?: boolean;
};

const Input = ({
	type = 'text',
	placeholder = '',
	className = '',
	disabled = false,
	textColor = 'black',
	onChange,
	onBlur,
	id,
	forwardRef,
}: InputProps) => (
	<input
		ref={forwardRef}
		type={type}
		onBlur={onBlur}
		placeholder={placeholder}
		className={className}
		disabled={disabled}
		style={{
			color: textColor,
		}}
		onChange={onChange}
		id={id}
	/>
);

export default Input;
