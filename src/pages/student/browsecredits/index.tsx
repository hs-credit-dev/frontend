import React from 'react';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Page from '../../../layout/Page';

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
];

const BrowseCredits = () => {
	return (
		<Page>
			<div className='bg-white rounded-[20px] flex flex-col'>
				<div className='flex justify-between box-border p-10'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Browse Credits
					</Typography>
					<Button className='bg-[#805DBE] w-[82px] h-[39px] rounded-full text-white'>
						Back
					</Button>
				</div>
				<div className='overflow-y-auto max-h-[600px] pr-4 custom-scrollbar'>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 pl-10 pt-5 pb-5 w-[1100px]'>
						{cardData.map((card, index) => (
							<Card
								key={index}
								imageSrc={card.imageSrc}
								imageAlt={card.imageAlt}
								title={card.title}
							/>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default BrowseCredits;
