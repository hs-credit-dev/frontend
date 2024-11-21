import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../components';
import { useGetProject } from '../../../../hooks/projects';
import Page from '../../../../layout/Page';

const ProjectDetails = () => {
	const { push, query } = useRouter();
	const { projectId } = query;
	console.log('project', projectId);
	const { data } = useGetProject(projectId as string);
	console.log('data --->', data);
	const statusMap = {
		staked: 'Stake pending',
		'stake-approved': 'Pitch Pending',
		pitched: 'Mint pending',
	};

	const disciplineMap = {
		AR: 'Arts',
		TE: 'Technology',
		MA: 'Mathematics',
		SC: 'Science',
		SS: 'Social Studies',
		HU: 'Humanities',
		JN: 'Journalism',
		EL: 'English',
		FL: 'Foreign Language',
		HE: 'Health',
	};

	const handleStart = (status: string) => {
		push({
			pathname: '/dashboard/student/project/' + status,
			query: {
				projectId,
			},
		});
	};

	return (
		<Page isProtected>
			<div className='flex justify-between mb-20'>
				<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
					Credit Details
				</Typography>
				<Button onClick={() => push('/dashboard/student')}>Back</Button>
			</div>
			<div>
				<div className='flex items-center justify-center'>
					<div className='text-center'>
						<Image
							src={data?.credit.logo || ''}
							alt='Credit Logo'
							width={135}
							height={135}
							className='mb-6 mt-8 ml-auto mr-auto'
						/>
						<p>
							<span className='font-semibold'>Credit</span>:{' '}
							{disciplineMap[data?.credit.discipline as keyof typeof disciplineMap]}
							<span className='font-semibold ml-4'>Status:</span>
							{statusMap[data?.status as keyof typeof statusMap]}
							<span className='font-semibold ml-4'>Teachers Email:</span>
						</p>
					</div>
				</div>
				<div className='flex items-center flex-col'>
					<div className='flex w-full justify-between mt-10'>
						<div className='w-full text-center'>
							<div>
								<h2 className='font-semibold text-xl mb-4'>Stake</h2>
								<p>{data?.credit.stake_text}</p>
							</div>
							<Button
								onClick={() => handleStart('stake')}
								className='mt-2 bg-transparent border-[#805DBE] border-2 !py-2 text-[#000000]'
							>
								Start
							</Button>
						</div>
						<div className='flex w-full justify-between'>
							<div className='w-[3px] h-[200px] bg-black' />
							<div className='text-center'>
								<div>
									<h2 className='font-semibold text-xl mb-4'>Pitch</h2>
									<p>{data?.credit.pitch_text}</p>
								</div>
								<Button
									onClick={() => handleStart('pitch')}
									className='mt-2 bg-transparent border-[#805DBE] border-2 !py-2 text-[#000000]'
								>
									Start
								</Button>
							</div>
							<div className='w-[3px] h-[200px] bg-black' />
						</div>
						<div className='w-full text-center'>
							<div>
								<h2 className='font-semibold text-xl mb-4'>Mint</h2>
								<p>{data?.credit.mint_text}</p>
							</div>
							<Button
								onClick={() => handleStart('mint')}
								className='mt-2 bg-transparent border-[#805DBE] border-2 !py-2 text-[#000000]'
							>
								Start
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default ProjectDetails;
