import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Typography from '../../../components/Typography';
import { useCompleteUserSignup, useFetchSignupUser } from '../../../hooks/auth';
import Page from '../../../layout/Page';
import { RegisterFormValues } from '../../../types';
import { toastError, toastSuccess } from '../../../utils/toast';

import { validationSchema } from './validationSchema';

const RegisterPersonalInfo = () => {
	const {
		handleSubmit,
		formState: { errors, isValid },
		watch,
		register,
		getFieldState,
	} = useForm<RegisterFormValues>({
		resolver: yupResolver(validationSchema),
	});

	const { query, push } = useRouter();

	const onSuccessMutation = () => {
		toastSuccess('Signup was successfully, please check your inbox!');
		push('/login');
	};

	const onErrorMutation = () => {
		toastError('Account already completed!');
	};

	const { mutate, isPending } = useCompleteUserSignup(
		query.accountId as string,
		onSuccessMutation,
		onErrorMutation,
	);

	const { isSuccess: isEmailConfirmSuccess, isError: isEmailConfirmError } =
		useFetchSignupUser(query?.accountId as string);

	if (isEmailConfirmSuccess) {
		toastSuccess('Email confirmed successfully, please complete signup');
	}

	if (isEmailConfirmError) {
		toastError('We have problem with confirming your email, please try again');
	}
	const isAgeConfirmed = watch('ageConfirmation', false);

	const onSubmit = async (values: RegisterFormValues) => {
		mutate(values);
	};

	const getCommonProps = (name: keyof RegisterFormValues) => {
		const { name: inputName, onBlur, onChange, ref } = register(name);
		const { isDirty } = getFieldState(name);

		return {
			name: inputName,
			message: errors[name]?.message,
			onBlur,
			onChange,
			forwardRef: ref,
			isDirty,
		};
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
						<Input
							{...getCommonProps('first_name')}
							type='text'
							placeholder='Enter your first name'
							className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
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
						<Input
							{...getCommonProps('middle_initial')}
							type='text'
							placeholder='M.I.'
							className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-[50px] h-10'
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
						<Input
							{...getCommonProps('last_name')}
							type='text'
							placeholder='Enter your last name'
							className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
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
						<Input
							{...getCommonProps('ceeb_code')}
							type='text'
							placeholder='Enter CEEB'
							className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
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
						<Input
							{...getCommonProps('school_name')}
							type='text'
							placeholder='Enter your school name'
							className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
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
					<textarea
						{...getCommonProps('bio')}
						id='bio'
						placeholder='Tell us about yourself'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full h-[100px] resize-none'
					/>
					{errors.bio && (
						<Typography className='text-red-500 text-xs'>{errors.bio.message}</Typography>
					)}
				</div>
				<div className='flex flex-col space-y-2 w-full sm:w-auto'>
					<Label htmlFor='dob' className='text-black'>
						DOB MM/DD/YYYY
					</Label>
					<Input
						{...getCommonProps('dob')}
						type='date'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[160px] h-10 md:h-[35px]'
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
						<Input
							{...getCommonProps('password')}
							type='password'
							placeholder='Enter your password'
							className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
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
						<Input
							{...getCommonProps('confirmPassword')}
							type='password'
							placeholder='Confirm your password'
							className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
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
						<Input
							{...getCommonProps('ageConfirmation')}
							type='checkbox'
							id='terms'
							className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
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
								!isAgeConfirmed || !isValid || isPending
									? 'opacity-50 cursor-not-allowed'
									: ''
							}`}
							disabled={!isAgeConfirmed || !isValid || isPending}
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
