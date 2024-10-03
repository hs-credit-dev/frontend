import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Textarea from '../../../components/Textarea';
import { useCompleteUserSignup } from '../../../hooks/auth';
import { CompleteSignupFormStudentValues } from '../../../types';
import { toastError, toastSuccess } from '../../../utils/toast';
import { completeStudentSignupValidationSchema } from '../../../validations/completeStudentSignup';

const StudentForm = () => {
	const { query, push } = useRouter();
	const {
		getFieldState,
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<CompleteSignupFormStudentValues>({
		resolver: yupResolver(completeStudentSignupValidationSchema),
		mode: 'all',
	});

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

	const getCommonProps = (name: keyof CompleteSignupFormStudentValues) => {
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

	const onSubmit = async (values: CompleteSignupFormStudentValues) => {
		mutate(values);
	};

	return (
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
						placeholder='Enter your first name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
					/>
				</div>

				<div className='flex flex-col space-y-2'>
					<Label htmlFor='middle_initial' className='text-black'>
						M.I.
					</Label>
					<Input
						{...getCommonProps('middle_initial')}
						placeholder='M.I.'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-[50px] h-10'
					/>
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
				</div>
			</div>
			<div className='flex flex-col sm:flex-row sm:space-x-6'>
				<div className='flex flex-col space-y-2 w-full sm:w-auto'>
					<div className='flex items-center space-x-2 justify-between'>
						<Label htmlFor='ceeb_code' className='text-black'>
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
						placeholder='Enter CEEB'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
					/>
				</div>

				<div className='flex flex-col space-y-2 w-full sm:w-auto'>
					<Label htmlFor='school_name' className='text-black'>
						School Name
					</Label>
					<Input
						{...getCommonProps('school_name')}
						placeholder='Enter your school name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10'
					/>
				</div>
			</div>
			<div className='flex flex-col space-y-2 w-full'>
				<Label htmlFor='bio' className='text-black'>
					Bio
				</Label>
				<Textarea
					{...getCommonProps('bio')}
					placeholder='Tell us about yourself'
					className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full h-[100px] resize-none'
				/>
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
			<div className='flex flex-col space-y-4'>
				<div className='flex items-center space-x-2'>
					<Input
						{...getCommonProps('age_confirmation')}
						type='checkbox'
						className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
					/>
					<Label htmlFor='terms' className='text-black text-[10px] italic'>
						By checking this box, you are confirming that you are at least 13 years of age
						or older. You are also consenting to our terms/services and Data Use Policy.
					</Label>
				</div>

				<div className='flex'>
					<Button
						type='submit'
						className={
							'bg-[#805DBE] disabled:bg-[#b49cdf] text-white font-bold py-2 px-4 rounded-full hover:bg-[#6b4aa6] focus:outline-none focus:shadow-outline w-[205px] h-[52px]'
						}
						disabled={!isValid || isPending}
					>
						Create Account
					</Button>
				</div>
			</div>
		</form>
	);
};

export default StudentForm;
