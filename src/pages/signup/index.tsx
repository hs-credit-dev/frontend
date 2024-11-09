import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Label } from '../../components';
import Page from '../../layout/Page';
import { SignupFormValues } from '../../types';
import { toastError, toastSuccess } from '../../utils/toast';
import { signupValidationSchema } from '../../validations/signup';

import { useSignup } from './hooks';

const Signup = () => {
	const {
		handleSubmit,
		getFieldState,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(signupValidationSchema),
		mode: 'all',
		defaultValues: {
			user_type: 'student',
		},
	});

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

	return (
		<Page isProtected={false}>
			<form onSubmit={handleSubmit(onSubmit)} className='flex bg-gray-100'>
				<div className='p-4 sm:p-8 sm:ml-8 mt-4 sm:mt-8 space-y-6 sm:space-y-8 w-full sm:w-auto'>
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
						</div>
					</div>
					<div className='space-y-2'>
						<Button type='submit' disabled={isPending}>
							Create Account
						</Button>
					</div>
				</div>
			</form>
		</Page>
	);
};

export default Signup;
