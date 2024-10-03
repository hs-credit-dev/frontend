import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Typography from '../../../components/Typography';
import { useCompleteUserSignup } from '../../../hooks/auth';
import { CompleteSignupFormCreditOwnerValues } from '../../../types';
import { toastError, toastSuccess } from '../../../utils/toast';
import { completeCreditOwnerSignupValidationSchema } from '../../../validations/completeCreditOwnerSignup';

const CreditOwnerForm = () => {
	const {
		handleSubmit,
		setValue,
		getFieldState,
		register,
		formState: { errors, isValid },
	} = useForm<CompleteSignupFormCreditOwnerValues>({
		resolver: yupResolver(completeCreditOwnerSignupValidationSchema),
	});

	const { query, push } = useRouter();

	const fileInputRef = useRef<HTMLInputElement>(null);

	const onSuccessMutation = () => {
		toastSuccess('Signup was successful, please check your inbox!');
		push('/login');
	};

	const onErrorMutation = () => {
		toastError('Account already completed!');
	};

	const { mutate, isPending } = useCompleteUserSignup(
		query.accountId as string, // Pass accountId from URL query parameters
		onSuccessMutation,
		onErrorMutation,
	);

	const onSubmit = (values: CompleteSignupFormCreditOwnerValues) => {
		const formData = new FormData();

		if (fileInputRef.current?.files !== null && fileInputRef.current?.files[0]) {
			formData.append('logo', fileInputRef.current?.files[0]);
			formData.append('first_name', values.first_name);
		}

		console.log('ffff', formData);
		mutate(formData);
	};

	const handleUploadClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setValue('logo', file);
		}
	};

	const getCommonProps = (name: keyof CompleteSignupFormCreditOwnerValues) => {
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
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col mt-[96px] px-4 sm:px-6 md:px-8 lg:px-16'
		>
			<div className='flex flex-col md:flex-row md:space-x-[42px] space-y-6 md:space-y-0'>
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='first_name'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						First Name
					</Label>
					<Input
						{...getCommonProps('first_name')}
						type='text'
						placeholder='Enter your first name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
					/>
					{errors.first_name && (
						<Typography className='text-red-500 text-[12px]'>
							{errors.first_name.message}
						</Typography>
					)}
				</div>
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='middle_initial'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						M.I.
					</Label>
					<Input
						{...getCommonProps('password')}
						type='text'
						placeholder='M.I.'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[45px] h-10 md:h-[35px]'
					/>
					{errors.middle_initial && (
						<Typography className='text-red-500 text-[12px]'>
							{errors.middle_initial.message}
						</Typography>
					)}
				</div>

				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='last_name'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						Last Name
					</Label>
					<Input
						{...getCommonProps('last_name')}
						type='text'
						placeholder='Enter your last name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
					/>
					{errors.last_name && (
						<Typography className='text-red-500 text-[12px]'>
							{errors.last_name.message}
						</Typography>
					)}
				</div>
			</div>
			<div className='flex flex-col md:flex-row md:space-x-[42px] space-y-6 md:space-y-0 mt-[28px]'>
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='organization'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						Organization Name
					</Label>
					<Input
						{...getCommonProps('organization')}
						type='text'
						placeholder='Enter your organization name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
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
						<Button
							onClick={handleUploadClick}
							className='w-full h-full bg-[#805DBE] rounded-full text-white font-montserrat text-[14px] font-bold leading-[17.07px] text-center'
						>
							Click here to upload
						</Button>
						<input
							ref={fileInputRef}
							type='file'
							accept='image/*'
							className='hidden'
							onChange={handleFileChange}
						/>
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
					<Input
						{...getCommonProps('ceeb_code')}
						type='number'
						placeholder='Code'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[83px] h-10 md:h-[35px]'
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
						<Label htmlFor='confirm_password' className='text-black'>
							Confirm Password
						</Label>
						<Input
							{...getCommonProps('confirm_password')}
							type='password'
							placeholder='Confirm your password'
							className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
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
					disabled={isPending || !isValid}
					className='w-full h-full bg-[#805DBE] disabled:bg-[#b49cdf] rounded-full text-white font-montserrat text-[14px] font-bold leading-[17.07px] text-center'
				>
					Create Account
				</Button>
			</div>
		</form>
	);
};

export default CreditOwnerForm;
