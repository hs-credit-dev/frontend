import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Label, TextArea } from '../../../../components';
import { useUpdateCredit } from '../../../../hooks/credits';
import { toastError, toastSuccess } from '../../../../utils/toast';
import { addCreditDetailsValidationSchema } from '../../../../validations/addCreditDetailsValidationSchema';

interface AddCreditDetails {
	description: string;
	stake_text: string;
	pitch_text: string;
	mint_text: string;
}

interface AddCreditDetailsProps {
	creditId: string;
	rubric: number;
}

const AddCreditDetails = ({ creditId, rubric }: AddCreditDetailsProps) => {
	const {
		handleSubmit,
		getFieldState,
		register,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(addCreditDetailsValidationSchema),
		mode: 'onSubmit',
	});

	const onSuccessMutation = (message?: string) => {
		toastSuccess(message);
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};

	const { mutate } = useUpdateCredit(onSuccessMutation, onErrorMutation);

	const getCommonProps = (name: keyof AddCreditDetails) => {
		const { name: inputName, onBlur, onChange, ref } = register(name);
		const { isDirty } = getFieldState(name);

		return {
			name: inputName,
			message: errors[name]?.message,
			onBlur,
			onChange,
			forwardRef: ref,
			isDirty,
			isTouched: true,
		};
	};

	const handleAddCreditDetails = (values: AddCreditDetails) => {
		mutate({ creditId, values });
	};

	return (
		<form onSubmit={handleSubmit(handleAddCreditDetails)}>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col space-y-2 w-full sm:w-auto mb-4'>
					<Label htmlFor='name' className='text-black'>
						Rubric version
					</Label>
					<Input
						value={rubric}
						placeholder='Enter discipline'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
					/>
				</div>
				<Button
					disabled={isSubmitting}
					type='submit'
					className={
						'w-[203px] h-[52px] disabled:bg-[#9f85cc] rounded-full text-white bg-[#805DBE]'
					}
				>
					Update Credit
				</Button>
			</div>
			<div className='flex flex-col space-y-2 w-full mb-4'>
				<Label htmlFor='name' className='text-black'>
					Description
				</Label>
				<TextArea
					{...getCommonProps('description')}
					placeholder='Enter discipline'
					className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full'
				/>
			</div>
			<div className='flex flex-col space-y-2 w-full mb-4'>
				<Label htmlFor='name' className='text-black'>
					Stake
				</Label>
				<TextArea
					{...getCommonProps('stake_text')}
					placeholder='Enter discipline'
					className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full'
				/>
			</div>
			<div className='flex flex-col space-y-2 w-full mb-4'>
				<Label htmlFor='name' className='text-black'>
					Pitch
				</Label>
				<TextArea
					{...getCommonProps('pitch_text')}
					placeholder='Enter discipline'
					className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full'
				/>
			</div>
			<div className='flex flex-col space-y-2 w-full mb-4'>
				<Label htmlFor='name' className='text-black'>
					Mint
				</Label>
				<TextArea
					{...getCommonProps('mint_text')}
					placeholder='Enter discipline'
					className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full'
				/>
			</div>
		</form>
	);
};

export default AddCreditDetails;
