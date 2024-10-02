import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Dropdown, Input, Label, Typography } from '../../components';
import { useSignup } from '../../hooks/auth';
import Page from '../../layout/Page';
import { SignupFormValues, UserType } from '../../types';
import { toastError, toastSuccess } from '../../utils/toast';

const validationSchema: yup.ObjectSchema<SignupFormValues> = yup.object().shape({
	email: yup.string().required('Email is required').email('Enter a valid email'),
	confirmEmail: yup
		.string()
		.oneOf([yup.ref('email'), undefined], 'Emails must match')
		.required('Please confirm your email'),
	first_name: yup
		.string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 characters'),
	last_name: yup
		.string()
		.required('Last name is required')
		.min(6, 'Last name must be at least 6 characters'),
	user_type: yup
		.mixed<UserType>()
		.oneOf(['student', 'credit-owner'], 'Invalid user type')
		.required(),
});

const Signup = () => {
	const {
		getFieldState,
		register,
		handleSubmit,
		setValue,
		formState: { errors, isValid },
	} = useForm<SignupFormValues>({
		resolver: yupResolver(validationSchema),
	});

	const [actionType, setActionType] = useState('');

	const onSuccessMutation = () => {
		toastSuccess('Signup was successfully, please check your inbox!');
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};

	const { mutate, isPending } = useSignup(onSuccessMutation, onErrorMutation);

	const onSubmit = async (values: SignupFormValues) => {
		mutate(values);
	};

	const getCommonProps = (name: keyof SignupFormValues) => {
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

	const handleSelectOption = (option: string) => {
		setValue('user_type', option as UserType);
		setActionType(option);
	};

	return (
		<Page>
			<form onSubmit={handleSubmit(onSubmit)} className='flex bg-gray-100'>
				<div className='p-4 sm:p-8 sm:ml-8 mt-4 sm:mt-8 space-y-6 sm:space-y-8 w-full sm:w-auto'>
					<div className='flex flex-col space-y-2 w-full sm:w-auto'>
						<Label htmlFor='accountType' className='text-black'>
							Account Type
						</Label>
						<Dropdown
							options={['student', 'credit-owner']}
							label={'Select Account Type'}
							selectedOption={actionType}
							handleSelectedOption={handleSelectOption}
						/>
					</div>
					<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto'>
						<div className='flex flex-col space-y-2 w-full sm:w-auto'>
							<Label htmlFor='first_name' className='text-black'>
								First name
							</Label>
							<Input
								{...getCommonProps('first_name')}
								placeholder='Enter your first name'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
							/>
							{errors.first_name && (
								<Typography variant='p' className='text-red-500 text-xs'>
									{errors.first_name.message}
								</Typography>
							)}
						</div>
						<div className='flex flex-col space-y-2 w-full sm:w-auto'>
							<Label htmlFor='last_name' className='text-black'>
								Last name
							</Label>
							<Input
								{...getCommonProps('last_name')}
								placeholder='Enter your lastName'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
							/>
							{errors.last_name && (
								<Typography variant='p' className='text-red-500 text-xs'>
									{errors.last_name.message}
								</Typography>
							)}
						</div>
					</div>
					<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto'>
						<div className='flex flex-col space-y-2 w-full sm:w-auto'>
							<Label htmlFor='email' className='text-black'>
								Email Address
							</Label>
							<Input
								{...getCommonProps('email')}
								type='email'
								placeholder='Enter your email'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
							/>
							{errors.email && (
								<Typography variant='p' className='text-red-500 text-xs'>
									{errors.email.message}
								</Typography>
							)}
						</div>
						<div className='flex flex-col space-y-2 w-full sm:w-auto'>
							<Label htmlFor='confirmEmail' className='text-black'>
								Confirm Email Address
							</Label>
							<Input
								{...getCommonProps('confirmEmail')}
								type='email'
								placeholder='Confirm your email'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
							/>
							{errors.confirmEmail && (
								<Typography variant='p' className='text-red-500 text-xs'>
									{errors.confirmEmail.message}
								</Typography>
							)}
						</div>
					</div>
					<div className='flex flex-col space-y-2'>
						<Button
							type='submit'
							className={`bg-[#805DBE] text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none w-full sm:w-auto md:w-[250px] h-12 md:h-[50px] ${
								!isValid ? 'opacity-50 cursor-not-allowed' : ''
							}`}
							disabled={!isValid || isPending}
						>
							Create Account
						</Button>
					</div>
				</div>
			</form>
		</Page>
	);
};

export default Signup;
