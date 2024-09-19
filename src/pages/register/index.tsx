import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Typography from '../../components/Typography';

interface RegisterFormValues {
	username: string;
	email: string;
	confirmEmail: string;
	password: string;
	confirmPassword: string;
	dob: string;
	ageConfirmation: boolean;
}

const schema: yup.ObjectSchema<RegisterFormValues> = yup.object().shape({
	username: yup
		.string()
		.required('Username is required')
		.min(3, 'Username must be at least 3 characters'),
	email: yup.string().required('Email is required').email('Enter a valid email'),
	confirmEmail: yup
		.string()
		.oneOf([yup.ref('email'), undefined], 'Emails must match')
		.required('Please confirm your email'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	dob: yup.string().required('Date of birth is required'),
	ageConfirmation: yup
		.boolean()
		.oneOf([true], 'You must confirm that you are at least 13 years old')
		.required(),
});

const Register = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormValues>({
		resolver: yupResolver(schema),
	});

	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	const onSubmit = (data: RegisterFormValues) => {
		console.log(data);
	};

	return (
		<div className='min-h-screen w-full bg-gray-100 flex flex-col justify-between'>
			<div>
				<div className='flex flex-col sm:flex-row justify-between w-full'>
					<Typography className='text-black text-base pl-4 sm:pl-8 lg:pl-[170px] pt-4 sm:pt-8'>
						hs.credit
					</Typography>
					<Typography className='text-black text-3xl font-bold pr-4 sm:pr-8 lg:pr-[170px] pt-4 sm:pt-8 text-center sm:text-right'>
						Account Creation
					</Typography>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className='flex bg-gray-100'>
					<div className='p-4 sm:p-8 ml-4 sm:ml-8 mt-4 sm:mt-8 space-y-6 sm:space-y-8 w-full sm:w-auto'>
						<div className='flex flex-col space-y-2 w-full sm:w-auto'>
							<Label htmlFor='accountType' className='text-black'>
								Account Type
							</Label>
							<Input
								type='text'
								placeholder='Student'
								className='border border-gray-400 p-2 rounded-md bg-gray-300 placeholder-black placeholder-font-bold cursor-not-allowed shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[230px] h-10 md:h-[35px]'
								disabled={true}
							/>
						</div>
						<div className='flex flex-col space-y-2 w-full sm:w-auto'>
							<Label htmlFor='username' className='text-black'>
								Username
							</Label>
							<Controller
								name='username'
								control={control}
								render={({ field }) => (
									<Input
										{...field}
										placeholder='Enter your username'
										className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
									/>
								)}
							/>
							{errors.username && (
								<Typography variant='p' className='text-red-500 text-xs'>
									{errors.username.message}
								</Typography>
							)}
						</div>
						<div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto'>
							<div className='flex flex-col space-y-2 w-full sm:w-auto'>
								<Label htmlFor='email' className='text-black'>
									Email Address
								</Label>
								<Controller
									name='email'
									control={control}
									render={({ field }) => (
										<Input
											{...field}
											type='email'
											placeholder='Enter your email'
											className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
										/>
									)}
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
								<Controller
									name='confirmEmail'
									control={control}
									render={({ field }) => (
										<Input
											{...field}
											type='email'
											placeholder='Confirm your email'
											className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
										/>
									)}
								/>
								{errors.confirmEmail && (
									<Typography variant='p' className='text-red-500 text-xs'>
										{errors.confirmEmail.message}
									</Typography>
								)}
							</div>
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
						<div className='flex flex-col space-y-2'>
							<div className='flex items-start sm:items-center space-x-2'>
								<Controller
									name='ageConfirmation'
									control={control}
									render={({ field }) => (
										<Input
											{...field}
											type='checkbox'
											className='h-4 w-4'
											onChange={handleCheckboxChange}
										/>
									)}
								/>
								<Label
									htmlFor='ageConfirmation'
									className='text-black text-sm sm:text-base'
								>
									By checking this box, you are confirming that you are at least 13 years
									of age or older.
								</Label>
							</div>
							<Button
								type='submit'
								className={`bg-[#805DBE] text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none w-full sm:w-auto md:w-[250px] h-12 md:h-[50px] ${
									!isChecked ? 'opacity-50 cursor-not-allowed' : ''
								}`}
								disabled={!isChecked}
							>
								Create Account
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
