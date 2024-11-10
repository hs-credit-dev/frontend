import { useRouter } from 'next/router';

import { Button, Typography } from '../../../../components';
import { useGetProject } from '../../../../hooks/projects';
import Page from '../../../../layout/Page';

const Project = () => {
	const { push, query } = useRouter();
	const { data } = useGetProject(query.id as string);
	console.log('data', data);
	return (
		<Page isProtected>
			<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
				<div className='flex justify-between mb-20 bg-white'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						{data?.title}
					</Typography>
					<Button onClick={() => push('/dashboard/educator')}>Back</Button>
				</div>
			</div>
		</Page>
	);
};

export default Project;
