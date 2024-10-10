import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, Label, TextArea } from '../../../../components';
import { addCreditDetailsValidationSchema } from '../../../../validations/addCreditDetailsValidationSchema';

interface AddCreditDetails {
	description: string;
	rubric_version: string;
	stake_text: string;
	pitch_text: string;
	mint_text: string;
}

const AddCreditDetails = () => {
	const {
		handleSubmit,
		getFieldState,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(addCreditDetailsValidationSchema),
		mode: 'all',
	});

	const getCommonProps = (name: keyof AddCreditDetails) => {
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

	const handleAddCreditDetails = (values: AddCreditDetails) => {
		console.log('values', values);
	};

	return (
		<form onSubmit={handleSubmit(handleAddCreditDetails)}>
			<div>
				<div className='flex flex-col space-y-2 w-full sm:w-auto mb-4'>
					<Label htmlFor='name' className='text-black'>
						Rubric version
					</Label>
					<Input
						{...getCommonProps('rubric_version')}
						placeholder='Enter discipline'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
					/>
				</div>
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
