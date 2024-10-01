import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Typography from '../../../components/Typography';
import Page from '../../../layout/Page';

const CreditOwner = () => {
	const validationSchema = Yup.object().shape({
		username: Yup.string()
			.required('Username is required')
			.min(3, 'Username must be at least 3 characters'),
		email: Yup.string().required('Email is required').email('Email is not valid'),
		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password')], 'Passwords do not match')
			.required('Confirm Password is required'),
		ageConfirmation: Yup.boolean().oneOf([true], 'You must confirm your age'),
	});

	type CreditOwnerFormValues = Yup.InferType<typeof validationSchema>;

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<CreditOwnerFormValues>({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			ageConfirmation: false,
		},
	});

	const onSubmit: SubmitHandler<CreditOwnerFormValues> = (data) => {
		console.log(data);
	};

	return (
		<Page>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-[22px] mt-[119px] px-4 sm:px-6 md:px-8 lg:px-16'
			>
				{/* account type field*/}
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='accountType'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						Account Type
					</Label>
					<Input
						type='text'
						placeholder='Account Type'
						disabled={true}
						className='border border-gray-400 p-2 rounded-md bg-gray-300 placeholder-black placeholder-font-bold cursor-not-allowed shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[230px] h-10 md:h-[35px]'
					/>
				</div>
				{/* username field */}
				<div className='flex flex-col'>
					<Label
						htmlFor='username'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left mb-[10px]'
					>
						Username
					</Label>
					<Controller
						name='username'
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								placeholder='Enter your username'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px] mb-[7px]'
							/>
						)}
					/>
					{errors.username && (
						<Typography className='font-montserrat text-[12px] text-red-500'>
							{errors.username.message}
						</Typography>
					)}
					<Typography className='font-montserrat text-[10px] italic font-medium leading-[12.19px] text-left'>
						Please do not use your real name.
					</Typography>
				</div>
				{/* email field */}
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='email'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						Email Address
					</Label>
					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								placeholder='Enter your email address'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
							/>
						)}
					/>
					{errors.email && (
						<Typography className='font-montserrat text-[12px] text-red-500'>
							{errors.email.message}
						</Typography>
					)}
				</div>
				{/* password and confirm password fields */}
				<div className='flex flex-col md:flex-row md:space-x-[42px] space-y-4 md:space-y-0'>
					{/* password field */}
					<div className='flex flex-col space-y-[10px]'>
						<Label
							htmlFor='password'
							className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
						>
							Password
						</Label>
						<Controller
							name='password'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									placeholder='Enter your password'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
								/>
							)}
						/>
						{errors.password && (
							<Typography className='font-montserrat text-[12px] text-red-500'>
								{errors.password.message}
							</Typography>
						)}
					</div>
					{/* confirm password field */}
					<div className='flex flex-col space-y-[10px]'>
						<Label
							htmlFor='confirmPassword'
							className='font-montserrat text-[14px] font-semibold leading-[17.07px]'
						>
							Confirm Password
						</Label>
						<Controller
							name='confirmPassword'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='password'
									placeholder='Confirm your password'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
								/>
							)}
						/>
						{errors.confirmPassword && (
							<Typography className='font-montserrat text-[12px] text-red-500'>
								{errors.confirmPassword.message}
							</Typography>
						)}
					</div>
				</div>
				{/* age confirmation field */}
				<div className='flex flex-col space-y-[14px]'>
					<div className='flex flex-row items-center space-x-[7px] mt-[57px]'>
						<Controller
							name='ageConfirmation'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='checkbox'
									id='ageConfirmation'
									className='w-[15px] h-[15px]'
								/>
							)}
						/>
						<Label
							htmlFor='ageConfirmation'
							className='font-montserrat text-[10px] italic font-medium leading-[12.19px] text-left'
						>
							By checking this box, you are confirming that you are at least 13 years of
							age or older.
						</Label>
						{errors.ageConfirmation && (
							<Typography className='font-montserrat text-[12px] text-red-500'>
								{errors.ageConfirmation.message}
							</Typography>
						)}
					</div>
					{/* button field */}
					<div className='w-full md:w-[203px] h-[52px] self-center md:self-start'>
						<Button
							type='submit'
							className='w-full h-full bg-[#805DBE] rounded-full text-white font-montserrat text-[14px] font-bold leading-[17.07px] text-center'
						>
							Next
						</Button>
					</div>
				</div>
			</form>
		</Page>
	);
};

export default CreditOwner;
