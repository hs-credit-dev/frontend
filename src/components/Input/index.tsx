import React from 'react';

type InputProps = {
	type?: string;
	placeholder?: string;
	className?: string;
};

const Input = ({ type = 'text', placeholder = '', className = '' }: InputProps) => (
	<input type={type} placeholder={placeholder} className={className} />
);

export default Input;
