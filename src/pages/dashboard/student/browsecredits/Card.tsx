import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Typography from '../../../../components/Typography';

type CardProps = {
	imageSrc: string;
	imageAlt: string;
	title: string;
};

const Card = ({ imageSrc, imageAlt, title }: CardProps) => (
	<Link
		href={{
			pathname: '/student/credit-details',
			query: { title, imageSrc, imageAlt },
		}}
		passHref
	>
		<div className='cursor-pointer flex flex-col transition transform hover:scale-105'>
			<Image src={imageSrc} alt={imageAlt} width={191} height={191} />
			<Typography className='font-bold mt-2 text-[14px]'>{title}</Typography>
		</div>
	</Link>
);

export default Card;
