import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { Button, Input, Label, Typography } from '../../../../components';
import { useCreateCredit, useFetchCredit } from '../../../../hooks/credits';
import Page from '../../../../layout/Page';
import { toastError, toastSuccess } from '../../../../utils/toast';
import { createCreditValidationSchema } from '../../../../validations/createCreditValidationSchema';

interface Credit {
	name: string;
	discipline: string;
	description?: string;
	rubric_version?: string;
	stake_text?: string;
	pitch_text?: string;
	mint_text?: string;
	logo: File;
}

const Credit = () => {
	const { push, query } = useRouter();
	const { data } = useFetchCredit(query.id as string);

	const {
		handleSubmit,
		getFieldState,
		setValue,
		register,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(createCreditValidationSchema),
		mode: 'all',
	});

	const onSuccessMutation = (message?: string) => {
		toastSuccess(message);
		push('/dashboard/creditowner');
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};

	const { mutate, isPending } = useCreateCredit(onSuccessMutation, onErrorMutation);
	const fileInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (data) {
			setValue('name', data.name);
			setValue('discipline', data.discipline);
		}
	}, [data, setValue]);

	const onSubmit = async (values: Credit) => {
		const formData = new FormData();

		formData.append('name', values.name);
		formData.append('discipline', values.discipline);
		formData.append('description', values.description || '');
		formData.append('rubric_version', values.rubric_version || '');
		formData.append('stake_text', values.stake_text || '');
		formData.append('pitch_text', values.pitch_text || '');
		formData.append('mint_text', values.mint_text || '');

		if (fileInputRef.current?.files !== null && fileInputRef.current?.files[0]) {
			formData.append('logo', fileInputRef.current?.files[0]);
		}

		mutate(formData);
	};

	const handleUploadClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const img = new Image();
			const objectUrl = URL.createObjectURL(file);

			img.onload = () => {
				if (img.width > 200 || img.height > 200) {
					toastError('Image size should not exceed 200x200 pixels');
				} else {
					setValue('logo', file); // Proceed if size is valid
				}
				URL.revokeObjectURL(objectUrl); // Clean up memory
			};

			img.src = objectUrl; // Trigger the image load to get dimensions
		}
	};

	const getCommonProps = (name: keyof Credit) => {
		const { name: inputName, onBlur, onChange, ref } = register(name);
		const { isDirty, isTouched } = getFieldState(name);

		return {
			name: inputName,
			message: errors[name]?.message,
			onBlur,
			onChange,
			forwardRef: ref,
			isDirty,
			isTouched,
		};
	};

	const admins = [
		{
			email: 'user@example.com',
			first_name: 'string',
			last_name: 'string',
		},
		{
			email: 'user@example.com',
			first_name: 'string',
			last_name: 'string',
		},
	];

	return (
		<Page>
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
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex justify-between items-end mb-12'>
							<div className='flex flex-col space-y-2 w-full sm:w-auto'>
								<Label htmlFor='discipline' className='text-black'>
									Discipline
								</Label>
								<Input
									{...getCommonProps('discipline')}
									placeholder='Enter discipline'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
								/>
							</div>
							<div>
								<Button
									type='submit'
									disabled={!isValid || isPending}
									className='bg-[#1DCC00] w-[203px] h-[52px] disabled:bg-[#8bdd7d] rounded-full text-white'
								>
									Publish
								</Button>
							</div>
						</div>
						<div className='mb-10 flex items-end'>
							<div className='flex flex-col space-y-2 w-full sm:w-auto'>
								<Label htmlFor='name' className='text-black'>
									Credit name
								</Label>
								<Input
									{...getCommonProps('name')}
									placeholder='Enter discipline'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
								/>
							</div>
							<Button
								type='button'
								onClick={handleUploadClick}
								className='bg-[#805DBE] w-[203px] h-[52px] rounded-full text-white ml-8'
							>
								Click here to upload
							</Button>
							<input
								ref={fileInputRef}
								type='file'
								accept='image/*'
								className='hidden'
								onChange={handleFileChange}
							/>
						</div>
						<div className=''>
							<Typography className='text-black mb-6'>Add Admins</Typography>
							<div className='mb-8'>
								{admins.map((admin, index) => (
									<div
										key={index}
										className='shadow-md bg-white box-border py-[21px] px-20 flex justify-between mb-4'
									>
										<Typography>
											{admin.first_name} {admin.last_name}
										</Typography>
										<Typography>{admin.email}</Typography>
										<Button>
											<svg
												className='stroke-[#ef4444] w-[30px] h-[30px]'
												data-name='Layer 3'
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 128 128'
											>
												<path d='M64 21.433A42.567 42.567 0 1 0 106.567 64 42.615 42.615 0 0 0 64 21.433zm0 80.912A38.345 38.345 0 1 1 102.345 64 38.389 38.389 0 0 1 64 102.345z' />
												<path d='M79.459 48.3a2.11 2.11 0 0 0-2.985 0L64 60.778 51.523 48.3a2.111 2.111 0 1 0-2.985 2.985l12.476 12.478-12.473 12.474a2.111 2.111 0 1 0 2.985 2.985L64 66.748l12.474 12.474a2.111 2.111 0 0 0 2.985-2.985L66.984 63.763l12.475-12.477a2.11 2.11 0 0 0 0-2.986z' />
											</svg>
										</Button>
									</div>
								))}
								<Button className='flex mx-auto'>
									<svg
										className='stroke-[#000] w-[30px] h-[30px]'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 32 32'
									>
										<g data-name='57-Add'>
											<path d='M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z' />
											<path d='M17 15V6h-2v9H6v2h9v9h2v-9h9v-2h-9z' />
										</g>
									</svg>
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Page>
	);
};

export default Credit;
