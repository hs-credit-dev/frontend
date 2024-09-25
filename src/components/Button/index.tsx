import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	type?: 'button' | 'submit';
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
};

const Button = ({
	children,
	onClick,
	className,
	type = 'button',
	disabled,
}: ButtonProps) => (
	<button type={type} onClick={onClick} className={className} disabled={disabled}>
		{children}
	</button>
);

export default Button;
