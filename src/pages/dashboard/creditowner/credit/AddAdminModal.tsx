import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Label } from '../../../../components';
import { useAddCreditAdmin } from '../../../../hooks/credits';
import { Admin } from '../../../../types';
import { addAdminValidationSchema } from '../../../../validations/addAddminValidationSchema';

interface AdminForm {
	first_name: string;
	last_name: string;
	email: string;
}

interface AddAdminModalProps {
	onBack: () => void;
	creditId: string;
	creditAdmins: Admin[];
}

const AddAdminModal = ({ onBack, creditId, creditAdmins }: AddAdminModalProps) => {
	const {
		handleSubmit,
		getFieldState,
		register,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(addAdminValidationSchema),
		mode: 'all',
	});

	const { mutate } = useAddCreditAdmin(creditId);

	const getCommonProps = (name: keyof AdminForm) => {
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

	console.log('errors', errors);

	const handleAddAdmin = (values: AdminForm) => {
		console.log('admin', values);
		mutate({ credit_admins: [...creditAdmins, values] });
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40'></div>
			<div className='flex flex-col items-center justify-center w-[90%] max-w-[758px] h-auto p-4 md:p-6 bg-white shadow-lg shadow-gray-500/50 rounded-lg z-50'>
				<form className='w-full' onSubmit={handleSubmit(handleAddAdmin)}>
					<div className='flex justify-end'>
						<Button
							onClick={onBack}
							className='bg-[#805DBE] w-[82px] h-[39px] rounded-full text-white'
						>
							Back
						</Button>
					</div>
					<div className=''>
						<div className='flex justify-between'>
							<div className='flex flex-col space-y-2 w-full sm:w-auto mb-4'>
								<Label htmlFor='first_name' className='text-black'>
									First Name
								</Label>
								<Input
									{...getCommonProps('first_name')}
									placeholder='Enter first name'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
								/>
							</div>
							<div className='flex flex-col space-y-2 w-full sm:w-auto mb-4'>
								<Label htmlFor='last_name' className='text-black'>
									Last Name
								</Label>
								<Input
									{...getCommonProps('last_name')}
									placeholder='Enter last name'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
								/>
							</div>
						</div>
						<div>
							<div className='flex flex-col space-y-2 w-full sm:w-auto mb-4'>
								<Label htmlFor='email' className='text-black'>
									Email
								</Label>
								<Input
									{...getCommonProps('email')}
									placeholder='Enter email'
									className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
								/>
								<p className='text-xs italic text-[#333333]'>
									An invite link will be sent to this email.
								</p>
							</div>
							<Button
								type='submit'
								disabled={!isValid}
								className='bg-[#805DBE] disabled:bg-[#9f85cc] mt-[72px] text-white py-4 px-14 rounded-full'
							>
								Submit
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddAdminModal;
