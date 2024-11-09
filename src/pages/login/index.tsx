import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Input, Typography } from '../../components';
import { LoginFormInputs } from '../../types';
import { loginValidationSchema } from '../../validations/login';

import { useLogin } from './hooks';

const Login = () => {
	const { push } = useRouter();

	const redirectToSignup = () => {
		push('/signup');
	};

	const {
		handleSubmit,
		getFieldState,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginValidationSchema),
		mode: 'all',
	});

	const { mutate, isPending } = useLogin();

	const onSubmit = async (values: LoginFormInputs) => {
		mutate(values);
	};

	const getCommonProps = (name: keyof LoginFormInputs) => {
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

	const commonClasses =
		'w-full font-montserrat focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-center text-black shadow-sm rounded-md border border-gray-300 p-4 mb-10';

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
					className='flex flex-col items-center w-full md:max-w-[690px]'
				>
					<Input
						{...getCommonProps('email')}
						type='text'
						placeholder='Username'
						className={commonClasses}
						message={errors?.email?.message}
					/>
					<Input
						{...getCommonProps('password')}
						type='password'
						placeholder='Password'
						className={commonClasses}
						message={errors?.password?.message}
					/>
					<div className='flex'>
						<div className='w-48 text-center'>
							<Button type='submit' disabled={isPending} className='w-full mb-5'>
								Log In
							</Button>
							<Link
								href='#'
								className='text-sm text-[#0077ff] hover:text-blue-600 transition-colors duration-300 ease-in-out'
							>
								Forgot password
							</Link>
							<Button className='w-full mt-10' onClick={redirectToSignup}>
								Create Account
							</Button>
						</div>
					</div>
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
