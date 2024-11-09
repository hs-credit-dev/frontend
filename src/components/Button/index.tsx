import React, { ReactNode } from 'react';
import classnames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
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
	<button
		type={type}
		onClick={onClick}
		className={classnames(
			'text-white bg-[#805DBE] text-sm py-4 px-6 disabled:bg-[#b49cdf] rounded-full focus:outline-none',
			className,
		)}
		disabled={disabled}
	>
		{children}
	</button>
);

export default Button;
