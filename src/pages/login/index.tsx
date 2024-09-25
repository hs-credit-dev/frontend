import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Typography from '../../components/Typography';
import { useLogin } from '../../hooks/auth';
import { LoginFormInputs } from '../../types';
import { toastError, toastSuccess } from '../../utils';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.required('Username is required')
		.min(4, 'Username must be at least 4 characters long'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters long'),
});

const Login = () => {
	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const { push } = useRouter();

	const onSuccessMutation = () => {
		console.log('success');
		toastSuccess('Login successfully!');
		setTimeout(() => {
			push('/student');
		}, 2000);
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};

	const { mutate, isPending } = useLogin(onSuccessMutation, onErrorMutation);

	const onSubmit = async (values: LoginFormInputs) => {
		mutate(values);
	};

	return (
		<div className='min-h-screen flex flex-col justify-between bg-gray-100 px-4 md:px-0'>
			<div className='flex-grow flex flex-col items-center justify-center space-y-8 md:space-y-[50px]'>
				<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-[50px]'>
					<Image
						src='/images/icons/hscreditlogonowords3.png'
						alt='logo'
						width={145}
						height={145}
						loading='lazy'
					/>
					<Typography
						variant='h1'
						className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-montserrat'
					>
						hs.credit
					</Typography>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col items-center space-y-4 md:space-y-[20px] w-full md:max-w-[690px]'
				>
					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type='text'
								placeholder='Username'
								className='
									w-full
									h-[50px] md:h-[60px]
									p-4
									font-montserrat
									border border-gray-300
									rounded-md
									shadow-sm
									focus:outline-none
									focus:ring-2
									focus:ring-blue-400
									placeholder:text-center
									text-black
								'
							/>
						)}
					/>
					{errors.email && (
						<Typography className='text-red-500 text-sm'>
							{errors.email.message}
						</Typography>
					)}
					<Controller
						name='password'
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type='password'
								placeholder='Password'
								className='
									w-[690px]
									h-[60px]
									p-4
									border border-gray-300
									rounded-md
									shadow-sm
									focus:outline-none
									focus:ring-2
									focus:ring-blue-400
									placeholder:text-center
									text-black
								'
							/>
						)}
					/>
					{errors.password && (
						<Typography className='text-red-500 text-sm'>
							{errors.password.message}
						</Typography>
					)}
					<Button
						type='submit'
						disabled={isPending || !isValid}
						className='bg-[#805DBE] w-full md:w-[203px] h-[50px] md:h-[52px] rounded-full'
					>
						Log In
					</Button>
					<Link
						href='#'
						className='text-sm text-[#0077ff] hover:text-blue-600 transition-colors duration-300 ease-in-out no-underline'
					>
						Forgot password
					</Link>
					<Button
						type='button'
						className='bg-[#805DBE] w-full md:w-[203px] h-[50px] md:h-[52px] rounded-full'
					>
						Create Account
					</Button>
				</form>
			</div>
			<footer className='w-full flex items-center text-gray-500 py-4 mt-8 md:mt-0'>
				<div className='ml-[10px] md:ml-[20px] flex flex-col md:flex-row items-center space-y-2 md:space-y-0'>
					<div className='pr-2 border-r-[1px] border-black'>
						<Typography
							variant='p'
							className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
						>
							Powered by hs.credit
						</Typography>
					</div>

					<div className='pr-2 pl-2 border-r-[1px] border-black'>
						<Typography
							variant='p'
							className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
						>
							Terms & Services
						</Typography>
					</div>

					<div className='pr-2 pl-2 border-r-[1px] border-black'>
						<Typography
							variant='p'
							className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
						>
							Privacy Policy
						</Typography>
					</div>

					<div className='pr-2 pl-2 border-r-2'>
						<Typography
							variant='p'
							className='font-montserrat text-[10px] md:text-[8px] font-semibold leading-[9.75px] text-gray-500'
						>
							2022 Academic Capital Foundation, Inc
						</Typography>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Login;
