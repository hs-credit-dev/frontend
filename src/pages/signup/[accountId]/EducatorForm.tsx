import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { Button, Input, Label } from '../../../components';
import { useCompleteSignup } from '../../../hooks/auth';
import { toastError, toastSuccess } from '../../../utils/toast';
import { completeEducatorSignupValidationSchema } from '../../../validations/completeEducatorValidationSchema';

interface EducatorForm {
	first_name: string;
	last_name: string;
	password: string;
	confirm_password: string;
	age_confirmation: boolean;
	organization: string;
}

const EducatorForm = () => {
	const { push, query } = useRouter();
	const {
		handleSubmit,
		getFieldState,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(completeEducatorSignupValidationSchema),
		mode: 'all',
	});

	const getCommonProps = (name: keyof EducatorForm) => {
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

	const onSuccessMutation = () => {
		toastSuccess('Signup was successful');
		push('/login');
	};

	const onErrorMutation = () => {
		toastError('Account already completed!');
	};

	const { mutate, isPending } = useCompleteSignup(
		query.accountId as string,
		onSuccessMutation,
		onErrorMutation,
	);

	const handleEducatorSignup = (values: EducatorForm) => {
		mutate(values);
	};

	return (
		<form onSubmit={handleSubmit(handleEducatorSignup)}>
			<div className='flex flex-col md:flex-row md:space-x-[42px] space-y-6 md:space-y-0 mb-8'>
				<div className='flex flex-col space-y-[10px]'>
					<Label
						htmlFor='first_name'
						className='font-montserrat text-[14px] font-semibold leading-[17.07px] text-left'
					>
						Organization
					</Label>
					<Input
						{...getCommonProps('organization')}
						placeholder='Enter organization name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[35px]'
					/>
				</div>
			</div>
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
			<div className='mt-4'>
				<Button type='submit' disabled={isPending}>
					Create Account
				</Button>
			</div>
		</form>
	);
};

export default EducatorForm;
