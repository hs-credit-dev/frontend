import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../components';
import { useFetchCredit } from '../../../../hooks/credits';
import Page from '../../../../layout/Page';

import AddAdmins from './AddAdmins';
import AddExperts from './AddExperts';
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

	return (
		<Page isProtected isLoading={isFetchCreditPending && !!query.id}>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20 bg-white'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Manage Credit
					</Typography>
					<Button onClick={() => push('/dashboard/creditowner')}>Back</Button>
				</div>
				<div className='overflow-y-auto max-h-[calc(100vh-130px-140px-120px-56px)] pr-4 custom-scrollbar'>
					<div>
						<CreditCore
							creditId={query.id as string}
							logo={data?.logo}
							name={data?.name}
							discipline={data?.discipline}
						/>
						<AddAdmins creditId={query.id as string} creditAdmins={data?.credit_admins} />
						<AddExperts creditId={query.id as string} creditExperts={data?.experts} />
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Credit;
