import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { Button, Input, Label, Typography } from '../../../components';
import { useCompleteSignup } from '../../../hooks/auth';
import { CompleteSignupFormCreditOwnerValues } from '../../../types';
import { toastError, toastSuccess } from '../../../utils/toast';
import { completeCreditOwnerSignupValidationSchema } from '../../../validations/completeCreditOwnerSignup';

const CreditOwnerForm = () => {
	const {
		handleSubmit,
		setValue,
		getFieldState,
		register,
		formState: { errors },
	} = useForm<CompleteSignupFormCreditOwnerValues>({
		resolver: yupResolver(completeCreditOwnerSignupValidationSchema),
		mode: 'all',
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

	const { mutate, isPending } = useCompleteSignup(
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
			const img = new Image();
			const objectUrl = URL.createObjectURL(file);

			img.onload = () => {
				if (img.width > 200 || img.height > 200) {
					toastError('Image size should not exceed 200x200 pixels');
				} else {
					setValue('logo', file); // Proceed if size is valid
				}
				URL.revokeObjectURL(objectUrl); // Clean up memory
			};

			img.src = objectUrl; // Trigger the image load to get dimensions
		}
	};

	const getCommonProps = (name: keyof CompleteSignupFormCreditOwnerValues) => {
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
						placeholder='Enter your first name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
					/>
				</div>
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='middle_initial'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						M.I.
					</Label>
					<Input
						{...getCommonProps('middle_initial')}
						placeholder='M.I.'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[45px] h-10 md:h-[35px]'
					/>
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
						placeholder='Enter your last name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
					/>
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
						placeholder='Enter your organization name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
					/>
				</div>

				{/* Credit Image Field */}
				<div className='flex flex-col'>
					<Typography className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left mb-[10px]'>
						Credit Image
					</Typography>
					<div className='mb-2'>
						<Button onClick={handleUploadClick} className='font-bold'>
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
					</div>
				</div>

				{/* Checkbox Field */}
				<div className='flex flex-col md:flex-row md:items-center md:space-x-[7px] space-y-4 md:space-y-0'>
					<Input
						{...getCommonProps('age_confirmation')}
						type='checkbox'
						className='w-[15px] h-[15px]'
					/>
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
			<div className='mt-4'>
				<Button type='submit' disabled={isPending}>
					Create Account
				</Button>
			</div>
		</form>
	);
};

export default CreditOwnerForm;
