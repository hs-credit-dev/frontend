import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import * as yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Typography from '../../../components/Typography';
import { useCompleteUserSignup } from '../../../hooks/auth';
import { RegisterFormValues } from '../../../types';
import { toastError, toastSuccess } from '../../../utils/toast';

const validationSchema = Yup.object().shape({
	first_name: Yup.string()
		.required('First Name is required')
		.min(2, 'First Name must be at least 2 characters'),
	middleInitial: Yup.string().max(1, 'Middle Initial can only be 1 character'),
	last_name: Yup.string()
		.required('Last Name is required')
		.min(2, 'Last Name must be at least 2 characters'),
	organization: Yup.string().required('Organization Name is required'),
	password: yup
		.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters'),
	confirm_password: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Passwords must match')
		.required('Please confirm your password'),
	ceeb_code: yup.string().required('CEEB code is required'),
	ageConfirmation: Yup.boolean()
		.required('You must confirm your age')
		.oneOf([true], 'You must agree to be at least 13 years old to continue'),
});

type FormValues = Yup.InferType<typeof validationSchema>;

const CreditOwnerForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			first_name: '',
			middleInitial: '',
			last_name: '',
			organization: '',
			ceeb_code: '',
			ageConfirmation: false,
		},
	});

	const { query, push } = useRouter();

	const onSuccessMutation = () => {
		toastSuccess('Signup was successful, please check your inbox!');
		push('/login'); // Redirect to login on success
	};

	const onErrorMutation = () => {
		toastError('Account already completed!');
	};

	// Initialize the useCompleteUserSignup hook with query.accountId and callbacks
	const { mutate, isPending } = useCompleteUserSignup(
		query.accountId as string, // Pass accountId from URL query parameters
		onSuccessMutation,
		onErrorMutation,
	);

	const onSubmit = (values: RegisterFormValues) => {
		mutate(values);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col mt-[96px] px-4 sm:px-6 md:px-8 lg:px-16'
		>
			<div className='flex flex-col md:flex-row md:space-x-[42px] space-y-6 md:space-y-0'>
				{/* First Name Field */}
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='first_name'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
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
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
							/>
						)}
					/>
					{errors.first_name && <Typography>{errors.first_name.message}</Typography>}
				</div>

				{/* Middle Initial Field */}
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='middleInitial'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
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
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[45px] h-10 md:h-[35px]'
							/>
						)}
					/>
					{errors.middleInitial && (
						<Typography className='text-red-500 text-[12px]'>
							{errors.middleInitial.message}
						</Typography>
					)}
				</div>

				{/* Last Name Field */}
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='last_name'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
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
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
							/>
						)}
					/>
					{errors.last_name && (
						<Typography className='text-red-500 text-[12px]'>
							{errors.last_name.message}
						</Typography>
					)}
				</div>
			</div>

			{/* Organization Name and Button Fields */}
			<div className='flex flex-col md:flex-row md:space-x-[42px] space-y-6 md:space-y-0 mt-[28px]'>
				{/* Organization Name Field */}
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='organization'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						Organization Name
					</Label>
					<Controller
						name='organization'
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type='text'
								placeholder='Enter your organization name'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
							/>
						)}
					/>
					{errors.organization && (
						<Typography className='text-red-500 text-[12px]'>
							{errors.organization.message}
						</Typography>
					)}
				</div>

				{/* Credit Image Field */}
				<div className='flex flex-col'>
					<Typography className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left mb-[10px]'>
						Credit Image
					</Typography>
					<div className='w-full md:w-[203px] h-[52px] mb-[6px]'>
						<Button className='w-full h-full bg-[#805DBE] rounded-full text-white font-montserrat text-[14px] font-bold leading-[17.07px] text-center'>
							Click here to upload
						</Button>
					</div>
					<Typography className='font-montserrat text-[10px] italic font-medium leading-[12.19px] text-left'>
						For best results, use 200 x 200 px image.
					</Typography>
				</div>
			</div>

			{/* Code Field */}
			<div className='flex flex-col space-y-[17px] mt-[28px]'>
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='ceeb_code'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						Code
					</Label>
					<Controller
						name='ceeb_code'
						control={control}
						render={({ field }) => (
							<Input
								{...field}
								type='number'
								placeholder='Code'
								className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[83px] h-10 md:h-[35px]'
							/>
						)}
					/>
					{errors.ceeb_code && (
						<Typography className='text-red-500 text-[12px]'>
							{errors.ceeb_code.message}
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
							name='confirm_password'
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
						{errors.confirm_password && (
							<Typography variant='p' className='text-red-500 text-xs'>
								{errors.confirm_password.message}
							</Typography>
						)}
					</div>
				</div>

				{/* Checkbox Field */}
				<div className='flex flex-col md:flex-row md:items-center md:space-x-[7px] space-y-4 md:space-y-0'>
					<Input type='checkbox' className='w-[15px] h-[15px]' />
					<Label
						htmlFor='ageConfirmation'
						className='font-montserrat text-[10px] italic font-medium leading-[12.19px] text-left'
					>
						By checking this box, you are confirming that you are at least 13 years of age
						or older. You are also consenting to our terms/services and Data Use Policy.
					</Label>
				</div>
			</div>

			{/* Create Account Button */}
			<div className='w-full md:w-[203px] h-[52px] self-center md:self-start mt-[14px]'>
				<Button
					type='submit'
					disabled={isPending}
					className='w-full h-full bg-[#805DBE] rounded-full text-white font-montserrat text-[14px] font-bold leading-[17.07px] text-center'
				>
					Create Account
				</Button>
			</div>
		</form>
	);
};

export default CreditOwnerForm;
