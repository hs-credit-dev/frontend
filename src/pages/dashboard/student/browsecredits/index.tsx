import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../components';
import { useFetchCredits } from '../../../../hooks/credits';
import Page from '../../../../layout/Page';

import Card from './Card';

type CardData = {
	logo: string;
	imageAlt: string;
	title: string;
	id: string;
};

const BrowseCredits = () => {
	const { push } = useRouter();
	const { data } = useFetchCredits(1);

	return (
		<Page isProtected>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Browse Credits
					</Typography>
					<Button
						onClick={() => push('/dashboard/student')}
						className='bg-[#805DBE] w-[82px] h-[39px] rounded-full text-white'
					>
						Back
					</Button>
				</div>
				<div className='overflow-y-auto max-h-[calc(100vh-130px-140px-120px-56px)] pr-4 custom-scrollbar'>
					<div className='flex flex-wrap gap-2 md:gap-4 lg:gap-10'>
						{data?.results.map((card: CardData, index: number) => (
							<Card
								key={index}
								imageSrc={card.logo}
								imageAlt={`${card.logo} alt description`}
								title={card.title}
								id={card.id}
							/>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default BrowseCredits;
