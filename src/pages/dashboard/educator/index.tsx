import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '../../../components';
import { useGetProjects } from '../../../hooks/projects';
import Page from '../../../layout/Page';
import { CreditResponse } from '../../../types';

interface Result {
	id: string;
	created_at: string;
	credit: CreditResponse;
	title: string;
}

const Educator = () => {
	const { data } = useGetProjects(1);
	console.log('data', data);
	return (
		<Page isProtected>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Projects
					</Typography>
				</div>
				<div className='overflow-y-auto max-h-[calc(100vh-130px-140px-120px-56px)] pr-4 custom-scrollbar'>
					<div className='flex flex-wrap gap-2 md:gap-4 lg:gap-10'>
						{data?.results.map((result: Result) => (
							<Link
								href={{
									pathname: '/dashboard/educator/project/',
									query: { id: result.id },
								}}
								key={result.id}
								passHref
							>
								<div className='cursor-pointer flex flex-col w-[191px]'>
									<div className='h-[191px] relative'>
										{result.credit.logo && (
											<Image
												src={result.credit.logo}
												alt={result.credit.name}
												width={191}
												height={191}
											/>
										)}
									</div>
									<Typography className='font-bold mt-2 text-[14px]'>
										{result.title}
									</Typography>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Educator;
