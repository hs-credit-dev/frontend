import Image from 'next/image';
import Link from 'next/link';

import Page from '../../layout/Page';
import useUserStore from '../../store';

import StatusCircle from './StatusCircle';

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
		discipline: 'Discipline 4',
		status: 'Minted',
		date: '1/17/23',
		id: 4,
	},
	{
		credit: 'Credit 5',
		discipline: 'Discipline 5',
		status: 'Staked',
		date: '4/10/23',
		id: 5,
	},
	{
		credit: 'Credit 6',
		discipline: 'Discipline 6',
		status: 'Pitched',
		date: '4/12/23',
		id: 6,
	},
	{
		credit: 'Credit 7',
		discipline: 'Discipline 7',
		status: 'Minted',
		date: '4/15/23',
		id: 7,
	},
	{
		credit: 'Credit 8',
		discipline: 'Discipline 8',
		status: 'Minted',
		date: '5/5/23',
		id: 8,
	},
	{
		credit: 'Credit 9',
		discipline: 'Discipline 9',
		status: 'Pitched',
		date: '5/10/23',
		id: 9,
	},
	{
		credit: 'Credit 10',
		discipline: 'Discipline 10',
		status: 'Minted',
		date: '5/15/23',
		id: 10,
	},
];

type CreditData = {
	credit: string;
	discipline: string;
	status: string;
	date: string;
	id: number;
};

const Student = () => {
	const firstName = useUserStore((state) => state.user?.first_name);
	return (
		<Page>
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

			<section className='pt-[1.6875rem] pb-[3.75rem] pl-0 pr-0 bg-white rounded-t-[20px]'>
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
										<StatusCircle status={data.status} />
										<span className='pt-3 text-center'>
											{data.status} on {data.date}
										</span>
									</td>
									<td>
										<span className='flex flex-row gap-4 justify-center'>
											<button
												className={
													'py-[1 rem] px-4 bg-[#805DBE] text-white text-[.75rem] font-normal hover:bg-violet-700'
												}
											>
												Take Action
											</button>
											<button>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='w-6 h-6 stroke-[#D40000] stroke-[3] fill-none'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M6 18 18 6M6 6l12 12'
													/>
												</svg>
											</button>
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
		</Page>
	);
};

export default Student;
