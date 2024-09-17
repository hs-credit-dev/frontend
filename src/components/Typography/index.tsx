import React from 'react';

type TypographyProps = {
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
	children: React.ReactNode;
	className?: string;
};

const Typography = ({ variant = 'p', children, className = '' }: TypographyProps) => {
	const Component = variant;

	return <Component className={className}>{children}</Component>;
};

export default Typography;
