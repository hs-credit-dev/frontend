import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../components';
// import { usePublishCredit, useUpdateCredit } from '../../../../hooks/credits';
import { useFetchCredit } from '../../../../hooks/credits';
import Page from '../../../../layout/Page';
import useUserStoreHook from '../../../../store';

// import { toastError, toastSuccess } from '../../../../utils/toast';
import AddAdmins from './AddAdmins';
import AddCreditDetails from './AddCreditDetails';
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
	const { isCreditOwner } = useUserStoreHook();

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
						<CreditCore
							creditId={query.id as string}
							isCreditOwner={isCreditOwner}
							logo={data?.logo}
							name={data?.name}
							discipline={data?.discipline}
						/>
						{isCreditOwner && query.id && <AddCreditDetails />}
						{isCreditOwner && query.id && (
							<AddAdmins
								creditId={query.id as string}
								creditAdmins={data?.credit_admins}
							/>
						)}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Credit;
