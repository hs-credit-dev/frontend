import React from 'react';
import Image from 'next/image';

import Typography from '../../../components/Typography';

type CardProps = {
	imageSrc: string;
	imageAlt: string;
	title: string;
};

const Card = ({ imageSrc, imageAlt, title }: CardProps) => (
	<div className='lex flex-col items-center'>
		<Image src={imageSrc} alt={imageAlt} width={191} height={191} />
		<Typography className='font-bold mt-2 text-[14px]'>{title}</Typography>
	</div>
);

export default Card;
