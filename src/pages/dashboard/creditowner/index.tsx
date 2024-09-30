import React from 'react';

import Typography from '../../../components/Typography';
import { useFetchCredits } from '../../../hooks/credits';
import Page from '../../../layout/Page';

import Card from './Card';

interface Credit {
	code: string;
	created_at: string;
	description: string;
	discipline: string;
	id: string;
	logo: string;
	mint_text: string;
	name: string;
	pitch_text: string;
	rubric: string[];
	rubric_version: string;
	stake_text: string;
	status: string;
	updated_at: string;
}

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
						{data?.results.map((card: Credit) => (
							<Card
								key={card.id}
								imageSrc={card.logo}
								imageAlt={card.name}
								title={card.name}
								id={card.id}
							/>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default CreditOwner;
