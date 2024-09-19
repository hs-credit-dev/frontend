import Link from 'next/link';

import DeleteButton from './DeleteButton';
import StatusCircles from './StatusCircles';
import TakeActionButton from './TakeActionButton';

const creditData: CreditData[] = [
	{
		credit: 'Credit 1',
		discipline: 'Discipline 1',
		status: 'Staked',
		date: '3/2/23',
		id: 1,
	},
	{
		credit: 'Credit 2',
		discipline: 'Discipline 2',
		status: 'Pitched',
		date: '2/2/23',
		id: 2,
	},
	{
		credit: 'Credit 3',
		discipline: 'Discipline 3',
		status: 'Minted',
		date: '1/22/23',
		id: 3,
	},
	{
		credit: 'Credit 4',
		discipline: 'Discipline 3',
		status: 'Minted',
		date: '1/17/23',
		id: 4,
	},
];

type CreditData = {
	credit: string;
	discipline: string;
	status: string;
	date: string;
	id: number;
};

export default function DashboardPage() {
	return (
		<section className='pt-[1.6875rem] pb-[3.75rem] pl-0 pr-0'>
			<h1 className='pl-[4.3125rem]'>My Dashboard</h1>
			<div className='flex px-12'>
				{/* Row number - one-column table */}
				<table className='text-center mt-[2.8125rem] mr-4'>
					<thead className='bg-[#EDEDED]'>
						<tr></tr>
					</thead>
					<tbody className='text-[0.875rem] font-bold'>
						{creditData.map((item, index) => (
							<tr key={item.id}>
								<td>{index + 1}</td>
							</tr>
						))}
						<tr></tr>
					</tbody>
				</table>

				{/* Credit detail four-column table */}
				<table className='flex-1 text-center mt-[2.8125rem]'>
					<thead className='bg-[#EDEDED]'>
						<tr className='text-[0.875rem]'>
							<th className='w-1/5'>Credit</th>
							<th className='w-1/5'>Discipline</th>
							<th>Status</th>
							<th></th>
						</tr>
					</thead>
					<tbody className='text-[0.875rem] font-light'>
						{creditData.map((data) => (
							<tr key={data.id} className='odd:bg-white even:bg-[#EDEDED]'>
								<td>{data.credit}</td>
								<td>{data.discipline}</td>
								<td className='flex justify-center gap-4'>
									<StatusCircles status={data.status} />
									<span className='pt-3 text-center'>
										{data.status} on {data.date}
									</span>
								</td>
								<td>
									<span className='flex flex-row gap-4 justify-center'>
										<TakeActionButton />
										<DeleteButton />
									</span>
								</td>
							</tr>
						))}
						<tr className='border-b border-[#EDEDED]'>
							<td></td>
							<td></td>
							<td className='text-left'>
								<Link href='' className='text-sm text-gray-400'>
									+ Click to Browse Credits +
								</Link>
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}
