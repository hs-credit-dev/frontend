import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Typography from '../../../components/Typography';
import { useFetchCredits } from '../../../hooks/credits';
import Page from '../../../layout/Page';
import { CreditResponse } from '../../../types';

const CreditOwner = () => {
	const { data } = useFetchCredits(1);
	console.log('data', data);
	return (
		<Page>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Credits
					</Typography>
				</div>
				<div className='overflow-y-auto max-h-[calc(100vh-130px-140px-120px-56px)] pr-4 custom-scrollbar'>
					<div className='flex flex-wrap gap-2 md:gap-4 lg:gap-10'>
						{data?.results.map((card: CreditResponse) => (
							<Link
								key={card.id}
								href={{
									pathname: `/dashboard/creditowner/${card.id}`,
									query: { name: card.name, logo: card.logo, imgAlt: card.name },
								}}
								passHref
							>
								<div className='cursor-pointer flex flex-col'>
									<Image src={card.logo} alt={card.name} width={191} height={191} />
									<Typography className='font-bold mt-2 text-[14px]'>
										{card.name}
									</Typography>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default CreditOwner;
