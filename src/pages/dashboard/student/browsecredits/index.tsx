import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../components';
import Page from '../../../../layout/Page';

import Card from './Card';

type CardData = {
	imageSrc: string;
	imageAlt: string;
	title: string;
};

const cardData: CardData[] = [
	{
		imageSrc: '/images/filmmaking.png',
		imageAlt: 'filmmaking',
		title: 'Filmmaking',
	},
	{
		imageSrc: '/images/africanAmericanStudies.png',
		imageAlt: 'African american studies',
		title: 'African American Studies',
	},
	{
		imageSrc: '/images/cognitiveScience.png',
		imageAlt: 'cognitive science',
		title: 'Cognitive Science',
	},
	{
		imageSrc: '/images/musicTheory.png',
		imageAlt: 'music theory',
		title: 'Music Theory',
	},
	{
		imageSrc: '/images/dataScience.png',
		imageAlt: 'data science',
		title: 'Data Science',
	},
	{
		imageSrc: '/images/digitalAnimation.png',
		imageAlt: 'digital animation',
		title: 'Digital Animation',
	},
	{
		imageSrc: '/images/businessAdministration.png',
		imageAlt: 'business administration',
		title: 'Business Administration',
	},
	{
		imageSrc: '/images/clinicalPsychology.png',
		imageAlt: 'clinical psychology',
		title: 'Clinical Psychology',
	},
	{
		imageSrc: '/images/clinicalPsychology.png',
		imageAlt: 'clinical psychology',
		title: 'Clinical Psychology',
	},
	{
		imageSrc: '/images/digitalAnimation.png',
		imageAlt: 'digital animation',
		title: 'Digital Animation',
	},
	{
		imageSrc: '/images/businessAdministration.png',
		imageAlt: 'business administration',
		title: 'Business Administration',
	},
	{
		imageSrc: '/images/clinicalPsychology.png',
		imageAlt: 'clinical psychology',
		title: 'Clinical Psychology',
	},
	{
		imageSrc: '/images/clinicalPsychology.png',
		imageAlt: 'clinical psychology',
		title: 'Clinical Psychology',
	},
];

const BrowseCredits = () => {
	const { push } = useRouter();

	return (
		<Page>
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
						{cardData.map((card, index) => (
							<Card
								key={index}
								imageSrc={card.imageSrc}
								imageAlt={card.imageAlt}
								title={card.title}
								id={card.title}
							/>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default BrowseCredits;
