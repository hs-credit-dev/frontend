import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import NextImage from 'next/image';

import { Button, FileUpload, Input, Label } from '../../../../components';
import { useCreateCredit } from '../../../../hooks/credits';
import { toastError, toastSuccess } from '../../../../utils/toast';
import { creditCoreFormValidationSchema } from '../../../../validations/creditCoreFormValidationSchema';

interface CreateCoreForm {
	name: string;
	discipline: string;
	logo: File;
}

interface CreditCoreProps {
	creditId?: string;
	isCreditOwner?: boolean;
	logo?: string;
	name?: string;
	discipline?: string;
}

const CreditCore = ({ creditId, logo, name, discipline }: CreditCoreProps) => {
	console.log('creditId', creditId);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const onSuccessMutation = (message?: string) => {
		toastSuccess(message);
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};

	const { mutate: createCredit, isPending: isCreatePending } = useCreateCredit(
		onSuccessMutation,
		onErrorMutation,
	);

	const {
		handleSubmit,
		getFieldState,
		setValue,
		register,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(creditCoreFormValidationSchema),
		mode: 'all',
	});

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

	const getCommonProps = (name: keyof CreateCoreForm) => {
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

	const onSubmit = (values: CreateCoreForm) => {
		const formData = new FormData();

		formData.append('name', values.name);
		formData.append('discipline', values.discipline);

		if (fileInputRef.current?.files !== null && fileInputRef.current?.files[0]) {
			formData.append('logo', fileInputRef.current?.files[0]);
		}

		createCredit(formData);
	};

	useEffect(() => {
		if (name && discipline) {
			setValue('name', name);
			setValue('discipline', discipline);
		}
	}, [discipline, name, setValue]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex justify-between items-end mb-12'>
				<div className='flex flex-col space-y-2 w-full sm:w-auto'>
					<Label htmlFor='discipline' className='text-black'>
						Discipline
					</Label>
					<Input
						{...getCommonProps('discipline')}
						placeholder='Enter discipline'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
					/>
				</div>
				<div>
					<Button
						disabled={!isValid || isCreatePending}
						type='submit'
						className={
							'w-[203px] h-[52px] disabled:bg-[#9f85cc] rounded-full text-white bg-[#805DBE]'
						}
					>
						{creditId ? 'Update' : 'Create'} Credit
					</Button>
				</div>
			</div>
			<div className='mb-10 flex items-end'>
				<div className='flex flex-col space-y-2 w-full sm:w-auto'>
					<Label htmlFor='name' className='text-black'>
						Credit name
					</Label>
					<Input
						{...getCommonProps('name')}
						placeholder='Enter discipline'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full md:w-[350px] h-10 md:h-[58px]'
					/>
				</div>
				<div className='flex items-center'>
					<FileUpload
						fileInputRef={fileInputRef}
						handleUploadClick={handleUploadClick}
						handleFileChange={handleFileChange}
						message={errors['logo']?.message}
						className='bg-[#805DBE] w-[203px] h-[52px] rounded-full text-white'
					/>
					{logo && (
						<div className='relative w-[70px] h-[70px] ml-4'>
							<NextImage
								src={logo}
								alt='Credit image'
								fill
								className='w-[100px] h-[100px]'
							/>
						</div>
					)}
				</div>
			</div>
		</form>
	);
};

export default CreditCore;
