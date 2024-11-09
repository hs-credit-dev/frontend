import React from 'react';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../components';
import { useFetchCredit } from '../../../../hooks/credits';
import Page from '../../../../layout/Page';

import AddCreditDetails from './AddCreditDetails';
import AddRubricsModal from './AddRubricsModal';

const CreditPage = () => {
	const { push, query } = useRouter();
	const { data, isPending: isFetchCreditPending } = useFetchCredit(query.id as string);
	const [showRubrics, setShowRubrics] = React.useState(false);
	console.log('data', data);

	return (
		<Page isLoading={isFetchCreditPending && !!query.id}>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20 bg-white'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						{data?.name}
					</Typography>
					<Button
						onClick={() => push('/dashboard/creditadmin')}
						className='bg-[#805DBE] w-[82px] h-[39px] rounded-full text-white'
					>
						Back
					</Button>
				</div>
				<div className='overflow-y-auto max-h-[calc(100vh-130px-140px-120px-56px)] pr-4 custom-scrollbar'>
					<AddCreditDetails creditId={query.id as string} />
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
						{showRubrics && (
							<AddRubricsModal
								creditId={query.id as string}
								onBack={() => setShowRubrics(false)}
							/>
						)}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default CreditPage;
