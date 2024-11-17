import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../../components';
import Page from '../../../../../layout/Page';

const ProjectPitch = () => {
	const { push, query } = useRouter();
	const { projectId } = query;

	const handleBack = () => {
		push({
			pathname: '/dashboard/student/project',
			query: {
				projectId,
			},
		});
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
				<div className=''>
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
							<Button>Click here to upload</Button>
						</div>
						<div className='space-y-2 mt-4'>
							<p className='text-black'>Checkpoints (Optional)</p>
							<Button className='bg-transparent !py-2 text-[black] border-[#805DBE] border-2'>
								Add/Edit
							</Button>
						</div>
						<div className='space-y-2 mt-4'>
							<Button>Submit</Button>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default ProjectPitch;
