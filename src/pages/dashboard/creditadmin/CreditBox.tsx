import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

// import { Typography } from '../../../components';
// import { useGetCreditAdmin } from '../../../hooks/creditAdmins';
// import { useRouter } from 'next/router';

interface CreditBoxProps {
	link: string;
}

const CreditBox = ({ link }: CreditBoxProps) => {
	// const regex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i;
	// const hashMatch = link.match(regex);
	// const { data } = useGetCreditAdmin(hashMatch[0]);
	// console.log('data', data);
	const hashMatch = link || 'ddd';
	if (hashMatch) {
		return (
			<Link
				href={{
					pathname: '/dashboard/creditadmin/credit',
					query: { creditId: hashMatch[0] },
				}}
				passHref
			>
				<div className='cursor-pointer flex flex-col w-[191px]'>
					dddd
					{/*<div className='h-[191px] relative'>*/}
					{/*	{card.logo && (*/}
					{/*		<Image*/}
					{/*			src={card.logo}*/}
					{/*			alt={card.name}*/}
					{/*			fill*/}
					{/*			className='w-[191px] h-[191px]'*/}
					{/*		/>*/}
					{/*	)}*/}
					{/*</div>*/}
					{/*<Typography className='font-bold mt-2 text-[14px]'>*/}
					{/*	{card.name}*/}
					{/*</Typography>*/}
				</div>
			</Link>
		);
	}
};

export default CreditBox;
