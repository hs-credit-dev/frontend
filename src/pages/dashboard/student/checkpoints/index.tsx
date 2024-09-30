import Link from 'next/link';

import BackButton from './BackButton';

const checkpointsData: CheckpointsData[] = [
	{
		dueDate: '11/22/22',
		pointDescription: 'First draft due. Attach references.',
		id: 1,
	},
	{
		dueDate: '11/22/22',
		pointDescription: 'First draft due. Attach references.',
		id: 2,
	},
	{
		dueDate: '11/22/22',
		pointDescription: 'First draft due. Attach references.',
		id: 3,
	},
	{
		dueDate: '11/22/22',
		pointDescription: 'First draft due. Attach references.',
		id: 4,
	},
];

type CheckpointsData = {
	dueDate: string;
	pointDescription: string;
	id: number;
};

const Checkpoints = () => {
	return (
		<section className='pt-[1.6875rem] pb-[3.75rem] pl-0 pr-0'>
			<div className='flex justify-between pl-[4.3125rem] pr-[4.3125rem]'>
				<h1>Pitch (Checkpoints)</h1>
				<BackButton />
			</div>
			<div className='flex px-12'>
				{/* Row number - one-column table */}
				<table className='text-center mt-[2.8125rem] mr-4'>
					<thead className='bg-[#EDEDED]'>
						<tr></tr>
					</thead>
					<tbody className='text-[0.875rem] font-bold'>
						{checkpointsData.map((item, index) => (
							<tr key={item.id}>
								<td>{index + 1}</td>
							</tr>
						))}
						<tr></tr>
					</tbody>
				</table>

				{/* Credit detail four-column table */}
				<table className='flex-1 text-left mt-[2.8125rem]'>
					<thead className='bg-[#EDEDED]'>
						<tr className='text-[0.875rem]'>
							<th className='w-1/6 pl-4'>Due Date</th>
							<th className='w-1/2'>Point Description</th>
						</tr>
					</thead>
					<tbody className='text-[0.875rem] font-light'>
						{checkpointsData.map((data) => (
							<tr key={data.id} className='odd:bg-white even:bg-[#EDEDED]'>
								<td className='pl-4'>{data.dueDate}</td>
								<td>{data.pointDescription}</td>
							</tr>
						))}
						<tr className='border-b border-[#EDEDED]'>
							<td></td>
							<td className='text-left pl-40'>
								<Link href='' className='text-sm text-gray-400'>
									+ Click to Browse Credits +
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default Checkpoints;
