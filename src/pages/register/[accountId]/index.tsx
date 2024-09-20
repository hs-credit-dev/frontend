import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Typography from '../../../components/Typography';

interface RegisterFormValues {
	firstName: string;
	middleInitial?: string;
	lastName: string;
	ceeb: string;
	schoolName: string;
	bio: string;
	ageConfirmation: boolean;
}

const schema: yup.ObjectSchema<RegisterFormValues> = yup.object({
	firstName: yup.string().required('First name is required'),
	middleInitial: yup.string().max(1, 'M.I. must be one character').optional(),
	lastName: yup.string().required('Last name is required'),
	ceeb: yup.string().required('CEEB code is required'),
	schoolName: yup.string().required('School name is required'),
	bio: yup.string().required('Bio is required'),
	ageConfirmation: yup
		.boolean()
		.oneOf([true], 'You must confirm that you are at least 13 years old')
		.required(),
});

const RegisterPersonalInfo = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<RegisterFormValues>({
		resolver: yupResolver(schema),
	});

	const isAgeConfirmed = watch('ageConfirmation', false);

	const onSubmit = (data: RegisterFormValues) => {
		console.log('Form data:', data);
	};

	return (
		<div className='min-h-screen w-full bg-gray-100 flex flex-col'>
			<div className='flex flex-col sm:flex-row justify-between w-full pt-5'>
				<div className='flex items-center space-x-4 lg:pl-[170px]'>
					<Image
						src='/images/icons/hscreditlogonowords3.png'
						alt='logo'
						width={65}
						height={65}
					/>
					<Typography className='text-black text-base'>hs.credit</Typography>
				</div>
				<Typography className='text-black text-3xl font-bold pr-4 sm:pr-8 lg:pr-[170px] pt-4 sm:pt-8 text-center sm:text-right'>
					Account Creation
				</Typography>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-6 mt-8 px-4 sm:px-8 lg:px-[170px] w-full'
			>
				<div className='flex flex-col sm:flex-row sm:space-x-6'>
					<div className='flex flex-col space-y-2'>
						<Label htmlFor='firstName' className='text-black'>
							First Name
						</Label>
						<Controller
							name='firstName'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='text'
									placeholder='Enter your first name'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
								/>
							)}
						/>
						{errors.firstName && (
							<Typography className='text-red-500 text-xs'>
								{errors.firstName.message}
							</Typography>
						)}
					</div>

					<div className='flex flex-col space-y-2'>
						<Label htmlFor='middleInitial' className='text-black'>
							M.I.
						</Label>
						<Controller
							name='middleInitial'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='text'
									placeholder='M.I.'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-[50px] h-10'
								/>
							)}
						/>
						{errors.middleInitial && (
							<Typography className='text-red-500 text-xs'>
								{errors.middleInitial.message}
							</Typography>
						)}
					</div>

					<div className='flex flex-col space-y-2 w-full'>
						<Label htmlFor='lastName' className='text-black'>
							Last Name
						</Label>
						<Controller
							name='lastName'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='text'
									placeholder='Enter your last name'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
								/>
							)}
						/>
						{errors.lastName && (
							<Typography className='text-red-500 text-xs'>
								{errors.lastName.message}
							</Typography>
						)}
					</div>
				</div>
				<div className='flex flex-col sm:flex-row sm:space-x-6'>
					<div className='flex flex-col space-y-2 w-full sm:w-auto'>
						<div className='flex items-center space-x-2 justify-between'>
							<Label htmlFor='ceeb' className='text-black'>
								CEEB
							</Label>
							<Link
								href='/find-ceeb'
								className='text-blue-600 text-sm no-underline hover:text-blue-800'
							>
								Find your code
							</Link>
						</div>
						<Controller
							name='ceeb'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='text'
									placeholder='Enter CEEB'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
								/>
							)}
						/>
						{errors.ceeb && (
							<Typography className='text-red-500 text-xs'>
								{errors.ceeb.message}
							</Typography>
						)}
					</div>

					<div className='flex flex-col space-y-2 w-full sm:w-auto'>
						<Label htmlFor='schoolName' className='text-black'>
							School Name
						</Label>
						<Controller
							name='schoolName'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='text'
									placeholder='Enter your school name'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
								/>
							)}
						/>
						{errors.schoolName && (
							<Typography className='text-red-500 text-xs'>
								{errors.schoolName.message}
							</Typography>
						)}
					</div>
				</div>
				<div className='flex flex-col space-y-2 w-full'>
					<Label htmlFor='bio' className='text-black'>
						Bio
					</Label>
					<Controller
						name='bio'
						control={control}
						render={({ field }) => (
							<textarea
								{...field}
								id='bio'
								placeholder='Tell us about yourself'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full h-[100px] resize-none'
							/>
						)}
					/>
					{errors.bio && (
						<Typography className='text-red-500 text-xs'>{errors.bio.message}</Typography>
					)}
				</div>
				<div className='flex flex-col space-y-4'>
					<div className='flex items-center space-x-2'>
						<Controller
							name='ageConfirmation'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='checkbox'
									id='terms'
									className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
								/>
							)}
						/>
						{errors.ageConfirmation && (
							<Typography className='text-red-500 text-xs'>
								{errors.ageConfirmation.message}
							</Typography>
						)}
						<Label htmlFor='terms' className='text-black text-[10px] italic'>
							By checking this box, you are confirming that you are at least 13 years of
							age or older. You are also consenting to our terms/services and Data Use
							Policy.
						</Label>
					</div>

					<div className='flex'>
						<Button
							type='submit'
							className={`bg-[#805DBE] text-white font-bold py-2 px-4 rounded-full hover:bg-[#6b4aa6] focus:outline-none focus:shadow-outline w-[205px] h-[52px] ${
								!isAgeConfirmed ? 'opacity-50 cursor-not-allowed' : ''
							}`}
							disabled={!isAgeConfirmed}
						>
							Create Account
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterPersonalInfo;
