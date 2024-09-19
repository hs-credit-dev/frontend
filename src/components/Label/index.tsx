import React from 'react';

interface LabelProps {
	htmlFor: string;
	children: React.ReactNode;
	className?: string;
}
const Label = ({ htmlFor, children, className = '' }: LabelProps) => (
	<label htmlFor={htmlFor} className={className}>
		{children}
	</label>
);

export default Label;
