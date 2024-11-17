import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../../components';
import { useGetCredits } from '../../../../../hooks/credits';
import { useGetProject } from '../../../../../hooks/projects';
import Page from '../../../../../layout/Page';
import { CreditResponse } from '../../../../../types';
import { toastError } from '../../../../../utils/toast';

import AddEducatorModal from './AddEducatorModal';

const BrowseCreditDetails = () => {
	const { query, push } = useRouter();
	const { data } = useGetCredits(1);
	const { creditId } = query;
	const [loading, setLoading] = useState(true);
	const [credit, setCredit] = useState<CreditResponse | null>(null);
	const [open, setOpen] = useState(false);
	console.log('dddd -->', data);
	const { data: project } = useGetProject(creditId as string);
	console.log('project', project);
	useEffect(() => {
		if (data?.results) {
			const match = data?.results.find(
				(credit: CreditResponse) => credit.id === creditId,
			);
			if (match) {
				setCredit(match);
			} else {
				toastError('Credit not found');
			}
		}
		setLoading(false);
	}, [creditId, data?.results]);

	if (loading) {
		return 'Loading...';
	}

	return (
		<Page isProtected>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Credit Details
					</Typography>
					<Button onClick={() => push('/dashboard/student/browsecredits')}>Back</Button>
				</div>
				{credit ? (
					<div>
						<div className='flex items-center justify-center'>
							<div className='text-center'>
								<Image
									src={credit.logo || ''}
									alt='Credit Logo'
									width={135}
									height={135}
									className='mb-6 mt-8 ml-auto mr-auto'
								/>
								<p>
									<span className='font-semibold'>Credit</span>: {credit.name}
								</p>
							</div>
						</div>
						<div className='flex items-center flex-col'>
							<div className='flex w-full justify-between mt-10'>
								<div className='w-full text-center'>
									<h2 className='font-semibold text-xl mb-4'>Stake</h2>
									<p>{credit.stake_text}</p>
								</div>
								<div className='flex w-full justify-between'>
									<div className='w-[3px] h-[200px] bg-black' />
									<div className='text-center'>
										<h2 className='font-semibold text-xl mb-4'>Pitch</h2>
										<p>{credit.pitch_text}</p>
									</div>
									<div className='w-[3px] h-[200px] bg-black' />
								</div>
								<div className='w-full text-center'>
									<h2 className='font-semibold text-xl mb-4'>Mint</h2>
									<p>{credit.mint_text}</p>
								</div>
							</div>
							<Button onClick={() => setOpen(true)} className={'mt-8 py-2 !px-16'}>
								Start Credit
							</Button>
						</div>
					</div>
				) : (
					'No credit found'
				)}
			</div>
			{open && credit && (
				<AddEducatorModal
					creditId={creditId as string}
					title={credit.name}
					onBack={() => setOpen(false)}
				/>
			)}
		</Page>
	);
};

export default BrowseCreditDetails;
