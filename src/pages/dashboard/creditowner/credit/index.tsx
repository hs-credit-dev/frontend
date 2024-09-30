import React, { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import * as yup from 'yup';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Label from '../../../../components/Label';
import Typography from '../../../../components/Typography';
import { useCreateCredit } from '../../../../hooks/credits';
import Page from '../../../../layout/Page';

interface Credit {
	name: string;
	discipline: string;
	description: string;
	rubric_version: string;
	stake_text: string;
	pitch_text: string;
	mint_text: string;
	logo: File;
}

const schema = yup.object().shape({
	name: yup.string().required('Credit name is required'),
	discipline: yup.string().required('Discipline is required'),
	description: yup.string().required('Description is required'),
	rubric_version: yup.string().required(),
	stake_text: yup.string().required(),
	pitch_text: yup.string().required(),
	mint_text: yup.string().required(),
	logo: yup
		.mixed<File>()
		.required('Logo is required')
		.test('fileSize', 'The file is too large', (value) => {
			return value instanceof File && value.size <= 2 * 1024 * 1024;
		})
		.test('fileType', 'Unsupported file format', (value) => {
			return value instanceof File && ['image/jpeg', 'image/png'].includes(value.type);
		})
		.required('Logo is required'),
});

const Credit = () => {
	const {
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			mint_text: '',
			pitch_text: '',
			stake_text: '',
			rubric_version: '',
		},
	});
	const { push } = useRouter();
	const { mutate } = useCreateCredit();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const onSubmit = async (values: Credit) => {
		const formData = new FormData();

		formData.append('name', values.name);
		formData.append('discipline', values.discipline);
		formData.append('description', values.description);
		formData.append('rubric_version', values.rubric_version);
		formData.append('stake_text', values.stake_text);
		formData.append('pitch_text', values.pitch_text);
		formData.append('mint_text', values.mint_text);

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
			setValue('logo', file);
		}
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
								<Controller
									name='discipline'
									control={control}
									render={({ field }) => (
										<Input
											{...field}
											placeholder='Enter discipline'
											className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
										/>
									)}
								/>
								{errors.name && (
									<Typography variant='p' className='text-red-500 text-xs'>
										{errors.name.message}
									</Typography>
								)}
							</div>
							<div>
								<Button
									type='submit'
									className='bg-[#1DCC00] w-[203px] h-[52px] rounded-full text-white'
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
								<Controller
									name='name'
									control={control}
									render={({ field }) => (
										<Input
											{...field}
											placeholder='Enter credit name'
											className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
										/>
									)}
								/>
								{errors.name && (
									<Typography variant='p' className='text-red-500 text-xs'>
										{errors.name.message}
									</Typography>
								)}
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
