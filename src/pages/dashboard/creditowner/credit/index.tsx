import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../components';
import { useFetchCredit } from '../../../../hooks/credits';
import Page from '../../../../layout/Page';
import useUserStoreHook from '../../../../store';

import AddAdmins from './AddAdmins';
import AddCreditDetails from './AddCreditDetails';
import AddExperts from './AddExperts';
import AddRubricsModal from './AddRubricsModal';
import CreditCore from './CreditCore';

interface Credit {
	name: string;
	discipline: string;
	description: string;
	rubric_version: string;
	stake_text: string;
	pitch_text: string;
	mint_text: string;
	logo?: File;
}

const Credit = () => {
	const { push, query } = useRouter();
	const { data, isPending: isFetchCreditPending } = useFetchCredit(query.id as string);
	console.log('data', data);
	const { isCreditOwner, creditAdmins } = useUserStoreHook();
	const isCreditAdmin = !!creditAdmins?.length;
	const [showRubrics, setShowRubrics] = React.useState(false);

	return (
		<Page isLoading={isFetchCreditPending && !!query.id}>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20 bg-white'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Manage Credit
					</Typography>
					<Button
						onClick={() => push('/dashboard/creditowner')}
						className='bg-[#805DBE] w-[82px] h-[39px] rounded-full text-white'
					>
						Back
					</Button>
				</div>
				<div className='overflow-y-auto max-h-[calc(100vh-130px-140px-120px-56px)] pr-4 custom-scrollbar'>
					<div>
						{isCreditOwner && (
							<CreditCore
								creditId={query.id as string}
								isCreditOwner={isCreditOwner}
								logo={data?.logo}
								name={data?.name}
								discipline={data?.discipline}
							/>
						)}
						{isCreditAdmin && query.id && (
							<AddCreditDetails creditId={query.id as string} />
						)}
						{isCreditOwner && query.id && (
							<AddAdmins
								creditId={query.id as string}
								creditAdmins={data?.credit_admins}
							/>
						)}
						{isCreditOwner && query.id && (
							<AddExperts creditId={query.id as string} creditExperts={data?.experts} />
						)}
						{isCreditAdmin && query.id && (
							<div>
								<Button
									onClick={() => setShowRubrics(true)}
									// disabled={isPublishPending}
									type='submit'
									className={
										'w-[203px] h-[52px] disabled:bg-[#9f85cc] rounded-full text-white bg-[#805DBE]'
									}
								>
									Edit Rubrics
								</Button>
								<Button
									// onClick={handlePublish}
									// disabled={isPublishPending}
									type='submit'
									className={
										'ml-4 w-[203px] h-[52px] disabled:bg-[#9f85cc] rounded-full text-white bg-[#805DBE]'
									}
								>
									Next
								</Button>
								{showRubrics && (
									<AddRubricsModal
										creditId={query.id as string}
										onBack={() => setShowRubrics(false)}
									/>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Credit;
