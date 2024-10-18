import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '../../../components';
// import { useFetchCredits } from '../../../hooks/credits';
import Page from '../../../layout/Page';
import useUserStoreHook from '../../../store';

// import { CreditResponse } from '../../../types';
import CreditBox from './CreditBox';

const CreditAdmin = () => {
	const { creditAdmins } = useUserStoreHook();
	console.log('creditAdmins', creditAdmins);
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
						<Link
							href={{
								pathname: '/dashboard/creditadmin',
							}}
							passHref
							className='flex items-center w-[191px] justify-center'
						>
							<div className='cursor-pointer flex flex-col w-10 items-center justify-center'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
									<g data-name='21-Add'>
										<path d='M25 0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7a7 7 0 0 0-7-7zm5 25a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5z' />
										<path d='M17 6h-2v9H6v2h9v9h2v-9h9v-2h-9V6z' />
									</g>
								</svg>
								<Typography className='font-bold mt-4 text-[14px]'>New Credit</Typography>
							</div>
						</Link>
						{creditAdmins?.map((card) => <CreditBox key={card.link} link={card.link} />)}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default CreditAdmin;
