import React from 'react';

type InputProps = {
	type?: string;
	placeholder?: string;
	className?: string;
	disabled?: boolean;
	textColor?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
};

const Input = ({
	type = 'text',
	placeholder = '',
	className = '',
	disabled = false,
	textColor = 'black',
	onChange,
	id,
}: InputProps) => (
	<input
		type={type}
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
