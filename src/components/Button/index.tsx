import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
};

const Button = ({ children, onClick, className, type = 'button' }: ButtonProps) => (
	<button type={type} onClick={onClick} className={className}>
		{children}
	</button>
);

export default Button;
