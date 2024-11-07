import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '../../../../components';

type CardProps = {
	imageSrc: string;
	imageAlt: string;
	title: string;
	id: string;
};

const Card = ({ imageSrc, imageAlt, title, id }: CardProps) => (
	<Link
		href={{
			pathname: '/dashboard/student/browsecredits/' + id,
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
