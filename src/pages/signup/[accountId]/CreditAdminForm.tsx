import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import { useCompleteUserSignup } from '../../../hooks/auth';
import { toastError, toastSuccess } from '../../../utils/toast';
import { completeCreditAdminSignupValidationSchema } from '../../../validations/completeCreditAdminSignupValidationSchema';

interface CreditAdminForm {
	first_name: string;
	last_name: string;
	password: string;
	confirm_password: string;
	age_confirmation: boolean;
}

const CreditAdminForm = () => {
	const { push, query } = useRouter();
	const {
		handleSubmit,
		getFieldState,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(completeCreditAdminSignupValidationSchema),
		mode: 'all',
	});

	const onSuccessMutation = () => {
		toastSuccess('Signup was successful, please check your inbox!');
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

	const handleCompleteCreditAdminSignup = (values: CreditAdminForm) => {
		console.log('values', values);
		mutate(values);
	};

	const getCommonProps = (name: keyof CreditAdminForm) => {
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
		<form onSubmit={handleSubmit(handleCompleteCreditAdminSignup)}>
			<div className='flex flex-col md:flex-row md:space-x-[42px] space-y-6 md:space-y-0 mb-8'>
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
			<div className='flex flex-col md:flex-row md:items-center md:space-x-[7px] space-y-4 md:space-y-0 my-8'>
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
			<div className='w-full md:w-[203px] h-[52px] self-center md:self-start mt-[14px]'>
				<Button
					type='submit'
					disabled={isPending}
					className='w-full h-full bg-[#805DBE] disabled:bg-[#b49cdf] rounded-full text-white font-montserrat text-[14px] font-bold leading-[17.07px] text-center'
				>
					Create Account
				</Button>
			</div>
		</form>
	);
};

export default CreditAdminForm;
