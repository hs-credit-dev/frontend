import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../../components';
import { usePitch } from '../../../../../hooks/projects';
import Page from '../../../../../layout/Page';
import { toastError, toastSuccess } from '../../../../../utils/toast';
import { addStudentPitchValidationSchema } from '../../../../../validations/addStudentPitchValidationSchema';

type MediaAsset = File;

type FormValues = {
	media_asset: MediaAsset;
};

const ProjectPitch = () => {
	const { push, query } = useRouter();
	const { projectId } = query;

	const onSuccessMutation = (message?: string) => {
		toastSuccess(message);
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};

	const {
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(addStudentPitchValidationSchema),
		mode: 'all',
	});

	const { mutate } = usePitch(projectId as string, onSuccessMutation, onErrorMutation);

	const handleBack = () => {
		push({
			pathname: '/dashboard/student/project',
			query: {
				projectId,
			},
		});
	};

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setValue('media_asset', file, { shouldValidate: true });
		}
	};

	const handlePitch = (values: FormValues) => {
		console.log('values', values);
		mutate(values);
	};

	return (
		<Page isProtected>
			<div className='bg-white rounded-[20px] box-border p-14'>
				<div className='flex justify-between mb-20'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Pitch
					</Typography>
					<Button onClick={handleBack}>Back</Button>
				</div>
				<form onSubmit={handleSubmit(handlePitch)} className=''>
					<div>
						<p>
							You invested your attention to STAKE this credit. Next you upload a plan for
							110+ hours of research, revision, reflection to produce your 10-minutes of
							polished audio or video. Remember to let the rubric guide your planning as
							it will determine your success as you MINT the final product.
						</p>
					</div>
					<div className=''>
						<div className=' mt-4'>
							<p className='text-black'>Credit</p>
							<div className='p-5 rounded-lg shadow-custom bg-[#E0E0E0]'>
								<p>BrandeisMedia: Podcast episode about foster care</p>
							</div>
						</div>
						<div className='space-y-2 mt-4'>
							<p className='text-black'>Task</p>
							<input
								type='file'
								accept='application/pdf'
								onChange={handleFileUpload}
								className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100'
							/>
							{errors.media_asset && (
								<p className='text-red-500 text-sm'>{errors.media_asset.message}</p>
							)}
						</div>
						<div className='space-y-2 mt-4'>
							<p className='text-black'>Checkpoints (Optional)</p>
							<Button className='bg-transparent !py-2 text-[black] border-[#805DBE] border-2'>
								Add/Edit
							</Button>
						</div>
						<div className='space-y-2 mt-4'>
							<Button type='submit'>Submit</Button>
						</div>
					</div>
				</form>
			</div>
		</Page>
	);
};

export default ProjectPitch;
