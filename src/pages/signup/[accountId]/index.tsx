import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Typography from '../../../components/Typography';
import Page from '../../../layout/Page';

interface RegisterFormValues {
	first_name: string;
	last_name: string;
	middle_initial?: string;
	ceeb_code: string;
	school_name: string;
	bio: string;
	ageConfirmation: boolean;
	password: string;
	confirmPassword: string;
	dob: string;
}

const schema: yup.ObjectSchema<RegisterFormValues> = yup.object({
	first_name: yup.string().required('First name is required'),
	last_name: yup.string().required('Last name is required'),
	middle_initial: yup.string().max(1, 'M.I. must be one character').optional(),
	ceeb_code: yup.string().required('CEEB code is required'),
	school_name: yup.string().required('School name is required'),
	bio: yup.string().required('Bio is required'),
	ageConfirmation: yup
		.boolean()
		.oneOf([true], 'You must confirm that you are at least 13 years old')
		.required(),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	dob: yup.string().required('Date of birth is required'),
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

	const { query } = useRouter();
	console.log('qe', query);
	const isAgeConfirmed = watch('ageConfirmation', false);

	const fetchAccount = async () => {
		try {
			const { data } = await axios.get(
				`http://localhost:8000/api/signup/${query.accountId}`,
			);
			console.log('data', data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (query.accountId) {
			fetchAccount();
		}
	}, []);

	const onSubmit = async (values: RegisterFormValues) => {
		console.log('Form data:', values);
		try {
			const { data } = await axios.patch(
				`http://localhost:8000/api/signup/${query.accountId}/`,
				{
					...values,
				},
			);
			console.log(data);
		} catch (e) {
			console.log('e');
		}
	};

	return (
		<Page>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col space-y-6 mt-8 px-4 sm:px-8 lg:px-[170px] w-full'
			>
				<div className='flex flex-col sm:flex-row sm:space-x-6'>
					<div className='flex flex-col space-y-2'>
						<Label htmlFor='first_name' className='text-black'>
							First Name
						</Label>
						<Controller
							name='first_name'
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
						{errors.first_name && (
							<Typography className='text-red-500 text-xs'>
								{errors.first_name.message}
							</Typography>
						)}
					</div>

					<div className='flex flex-col space-y-2'>
						<Label htmlFor='middle_initial' className='text-black'>
							M.I.
						</Label>
						<Controller
							name='middle_initial'
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
						{errors.middle_initial && (
							<Typography className='text-red-500 text-xs'>
								{errors.middle_initial.message}
							</Typography>
						)}
					</div>

					<div className='flex flex-col space-y-2 w-full'>
						<Label htmlFor='last_name' className='text-black'>
							Last Name
						</Label>
						<Controller
							name='last_name'
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
						{errors.last_name && (
							<Typography className='text-red-500 text-xs'>
								{errors.last_name.message}
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
							name='ceeb_code'
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
						{errors.ceeb_code && (
							<Typography className='text-red-500 text-xs'>
								{errors.ceeb_code.message}
							</Typography>
						)}
					</div>

					<div className='flex flex-col space-y-2 w-full sm:w-auto'>
						<Label htmlFor='school_name' className='text-black'>
							School Name
						</Label>
						<Controller
							name='school_name'
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
						{errors.school_name && (
							<Typography className='text-red-500 text-xs'>
								{errors.school_name.message}
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
				<div className='flex flex-col space-y-2 w-full sm:w-auto'>
					<Label htmlFor='dob' className='text-black'>
						DOB MM/DD/YYYY
					</Label>
					<Controller
						name='dob'
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type='date'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[160px] h-10 md:h-[35px]'
							/>
						)}
					/>
					{errors.dob && (
						<Typography variant='p' className='text-red-500 text-xs'>
							{errors.dob.message}
						</Typography>
					)}
				</div>
				<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto'>
					<div className='flex flex-col space-y-2 w-full sm:w-auto'>
						<Label htmlFor='password' className='text-black'>
							Password
						</Label>
						<Controller
							name='password'
							control={control}
							render={({ field }) => (
								<Input
									{...field}
									type='password'
									placeholder='Enter your password'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
								/>
							)}
						/>
						{errors.password && (
							<Typography variant='p' className='text-red-500 text-xs'>
								{errors.password.message}
							</Typography>
						)}
					</div>
					<div className='flex flex-col space-y-2 w-full sm:w-auto'>
						<Label htmlFor='confirmPassword' className='text-black'>
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
							<Typography variant='p' className='text-red-500 text-xs'>
								{errors.confirmPassword.message}
							</Typography>
						)}
					</div>
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
		</Page>
	);
};

export default RegisterPersonalInfo;
