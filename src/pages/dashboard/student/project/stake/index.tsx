import { useRouter } from 'next/router';

import { Button, Label, TextArea, Typography } from '../../../../../components';
import { useGetProject } from '../../../../../hooks/projects';
import Page from '../../../../../layout/Page';

const ProjectStake = () => {
	const { push, query } = useRouter();
	const { projectId } = query;
	const { data } = useGetProject(projectId as string);

	return (
		<Page isProtected>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Stake
					</Typography>
					<Button onClick={() => push('/dashboard/student')}>Back</Button>
				</div>
				<div>
					<p>
						Here you show evidence that you invested your attention to “geek out” on a
						topic. List the discipline from the available options and then share a list of
						sources from which you have notes that will inform your podcast or video
						project.
					</p>
				</div>
				<div className='flex mt-10 gap-6'>
					<div className='flex flex-col space-y-2 w-full'>
						<p className='text-black'>Credit</p>
						<div className='p-5 rounded-lg shadow-custom bg-[#E0E0E0]'>
							<p>{data?.credit.name}</p>
						</div>
					</div>
					<div className='flex flex-col space-y-2 w-full'>
						<p className='text-black'>Teacher’s Email</p>
						<div className='h-[60px] rounded-sm shadow-custom'>
							<p>{data?.educator?.email}</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col space-y-2 w-full mt-10'>
					<p className='text-black'>Content to Stake</p>
					<div className='rounded-lg shadow-custom bg-[#E0E0E0] box-sizing p-5'>
						<p className='text-[#333333C4]'>{data?.credit.stake_text}</p>
					</div>
				</div>
				<div className='flex flex-col space-y-2 w-full mt-10'>
					<Label htmlFor='first_name' className='text-black'>
						Staked Content
					</Label>
					<TextArea
						// {...getCommonProps('first_name')}
						placeholder='Enter your first name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full'
					/>
				</div>
				<div className='mt-4'>
					<Button className='!px-20'>Submit</Button>
				</div>
			</div>
		</Page>
	);
};

export default ProjectStake;
