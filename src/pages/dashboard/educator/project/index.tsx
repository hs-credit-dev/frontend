import Image from 'next/image';
import { useRouter } from 'next/router';

import { useGetProject } from '../../../../hooks/projects';
import Page from '../../../../layout/Page';
import useUserStoreHook from '../../../../store';

import Stake from './Stake';

const Project = () => {
	const { firstName } = useUserStoreHook();
	const { query } = useRouter();
	const { data } = useGetProject(query.id as string);

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
	console.log('data', data);

	const statusMap = {
		staked: (
			<Stake
				projectId={data?.id}
				contentToStake={data?.credit?.stake_text}
				educatorEmail={data?.educator?.email}
				firstName={firstName}
				creditName={disciplineMap[data?.credit?.discipline as keyof typeof disciplineMap]}
			/>
		),
		pitched: <div>Pitch</div>,
		minted: <div>Mint</div>,
	};
	return (
		<Page isProtected>
			<section className='relative flex py-[3rem] bg-[#805DBE] rounded-xl mb-6'>
				<div className='flex flex-col'>
					<div className='flex items-center justify-between space-x-4 pl-[4.3125rem] w-[570px]'>
						<h2 className='text-[2rem] font-bold text-white'>
							Welcome back, {firstName}
						</h2>
						<Image src='/images/icons/handWave.png' alt='logo' width={42} height={35} />
					</div>
					<p className='text-[0.9375rem] font-light text-white pt-[1.5rem] pl-[4.3125rem]'>
						The only purpose of education is <span className='font-bold'>freedom</span>;
						the only method is <span className='font-bold'> experience</span>.
					</p>
				</div>
				<div className='absolute right-0 top-0 z-10'>
					<Image
						src='/images/icons/humansSpace.png'
						alt='banner image'
						width={650}
						height={150}
					/>
				</div>
			</section>
			{statusMap[data?.status as keyof typeof statusMap]}
		</Page>
	);
};

export default Project;
