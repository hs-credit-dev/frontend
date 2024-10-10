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
	console.log('isCreditOwner', isCreditOwner);

	console.log('data', data);

	// const onSuccessMutation = (message?: string) => {
	// 	toastSuccess(message);
	// 	// push('/dashboard/creditowner');
	// };
	//
	// const onErrorMutation = (message?: string) => {
	// 	toastError(message);
	// };

	// const { mutate: updateCredit, isPending: isUpdatePending } = useUpdateCredit(
	// 	onSuccessMutation,
	// 	onErrorMutation,
	// );
	//
	// const { mutate: publishCredit, isPending: isPublishPending } = usePublishCredit(
	// 	query.id as string,
	// 	onSuccessMutation,
	// 	onErrorMutation,
	// );

	console.log('daa', data);

	// useEffect(() => {
	// 	if (data) {
	// 		setValue('name', data.name);
	// 		setValue('discipline', data.discipline);
	// 		setValue('description', data.description);
	// 		setValue('stake_text', data.stake_text);
	// 		setValue('pitch_text', data.pitch_text);
	// 		setValue('mint_text', data.mint_text);
	// 		setValue('rubric_version', data.rubric_version);
	// 	}
	// }, [data, setValue]);

	// const onSubmit = async (values: Credit) => {
	// 	const formData = new FormData();
	//
	// 	formData.append('name', values.name);
	// 	formData.append('discipline', values.discipline);
	// 	formData.append('description', values.description);
	// 	formData.append('rubric_version', values.rubric_version);
	// 	formData.append('stake_text', values.stake_text);
	// 	formData.append('pitch_text', values.pitch_text);
	// 	formData.append('mint_text', values.mint_text);
	// 	formData.append(
	// 		'credit_admins',
	// 		JSON.stringify([
	// 			{
	// 				email: 'fijah87918@rowplant.com',
	// 				first_name: 'somename',
	// 				last_name: 'somename',
	// 			},
	// 		]),
	// 	);
	// 	if (fileInputRef.current?.files !== null && fileInputRef.current?.files[0]) {
	// 		formData.append('logo', fileInputRef.current?.files[0]);
	// 	}
	//
	// 	if (query.id) {
	// 		updateCredit({ creditId: query.id as string, values: formData });
	// 	} else {
	// 		createCredit(formData);
	// 	}
	// };
	console.log('------', isFetchCreditPending);

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
						<AddCreditDetails />
						<AddAdmins creditId={query.id as string} creditAdmins={data?.credit_admins} />
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Credit;
