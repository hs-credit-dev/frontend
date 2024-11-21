import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input, Typography } from '../../../../components';
import { useAddCreditRubric } from '../../../../hooks/credits';
import { toastError, toastSuccess } from '../../../../utils/toast';
import { addRubricValidationSchema } from '../../../../validations/addRubricValidationSchema';

interface AddRubricsModalProps {
	onBack: () => void;
	creditId: string;
}

type Rubric = {
	title: string;
	points: number;
	blurb: string;
	notes: string;
	is_active: boolean;
};

const AddRubricsModal = ({ onBack, creditId }: AddRubricsModalProps) => {
	const [rubrics, setRubrics] = useState<Rubric[]>([
		{ title: '', points: 0, blurb: '', notes: '', is_active: true },
	]);
	const [canSubmit, setCanSubmit] = useState(false);

	const { handleSubmit } = useForm({
		resolver: yupResolver(addRubricValidationSchema),
		mode: 'all',
	});

	const onSuccessMutation = (message?: string) => {
		toastSuccess(message);
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};
	const { mutate } = useAddCreditRubric(creditId, onSuccessMutation, onErrorMutation);

	const handleAddRow = () => {
		setRubrics([
			...rubrics,
			{ title: '', points: 0, blurb: '', notes: '', is_active: true },
		]);
	};

	const handleInputChange = (
		index: number,
		field: keyof Rubric,
		value: string | number,
	) => {
		const updatedRubrics = [...rubrics];
		updatedRubrics[index] = { ...updatedRubrics[index], [field]: value };
		setRubrics(updatedRubrics);
	};

	const handleSubmitRubric = () => {
		mutate({
			rubric: rubrics,
		});
	};

	useEffect(() => {
		const allFieldsFilled = rubrics.every(
			(rubric) =>
				rubric.title.trim() !== '' &&
				rubric.points > 0 &&
				rubric.blurb.trim() !== '' &&
				rubric.notes.trim() !== '',
		);
		setCanSubmit(allFieldsFilled);
	}, [rubrics]);

	const handleRemoveRow = (index: number) => {
		const updatedRubrics = rubrics.filter((_, i) => i !== index);
		setRubrics(updatedRubrics);
	};

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50'>
			<div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40'></div>
			<div className='flex flex-col items-center justify-center w-[90%] max-w-[900px] h-auto p-4 md:p-6 bg-white shadow-lg shadow-gray-500/50 rounded-lg z-50'>
				<form className='w-full' onSubmit={handleSubmit(handleSubmitRubric)}>
					<div className='flex justify-between'>
						<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
							Rubrics
						</Typography>
						<Button onClick={onBack}>Back</Button>
					</div>
					<div>
						<Typography className='font-montserrat text-[24px] my-[40px] text-center font-bold leading-[39.01px]'>
							Add Indicator
						</Typography>
						<div className='border box-border'>
							<div className='flex py-4 box-border gap-4'>
								<div className='w-full text-center'>Indicator</div>
								<div className='w-full text-center'>Points</div>
								<div className='w-full text-center'>Blurb</div>
								<div className='w-full text-center'>Notes</div>
							</div>
							{rubrics.map((rubric, i) => (
								<div key={i} className='flex bg-[#F6F4FA] box-border p-4 gap-4'>
									<div className='w-full'>
										<Input
											value={rubric.title}
											onChange={(e) => handleInputChange(i, 'title', e.target.value)}
											placeholder='Title'
										/>
									</div>
									<div className='w-full'>
										<Input
											value={rubric.points}
											onChange={(e) =>
												handleInputChange(i, 'points', Number(e.target.value))
											}
											type='number'
											placeholder='Points'
										/>
									</div>
									<div className='w-full'>
										<Input
											value={rubric.blurb}
											onChange={(e) => handleInputChange(i, 'blurb', e.target.value)}
											placeholder='Blurb'
										/>
									</div>
									<div className='w-full'>
										<Input
											value={rubric.notes}
											onChange={(e) => handleInputChange(i, 'notes', e.target.value)}
											placeholder='Notes'
										/>
									</div>
									<div onClick={() => handleRemoveRow(i)}>X</div>
								</div>
							))}
						</div>
						<Button onClick={handleAddRow} className='mt-10'>
							Add Row
						</Button>
					</div>
					<Button
						disabled={!canSubmit || !rubrics.length}
						type='submit'
						className='mt-10'
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
};

export default AddRubricsModal;
