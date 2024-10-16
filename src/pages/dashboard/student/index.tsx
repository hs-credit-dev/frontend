import { Fragment, useMemo, useState } from 'react';
import {
	ColumnDef,
	getCoreRowModel,
	getPaginationRowModel,
	PaginationState,
	useReactTable,
} from '@tanstack/react-table';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../../components';
import { useFetchCredits } from '../../../hooks/credits';
import Dashboard from '../../../layout/Dashboard';
import Page from '../../../layout/Page';
import useUserStoreHook from '../../../store';

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
		credit: 'Credit 7',
		discipline: 'Discipline 7',
		status: 'Minted',
		date: '4/15/23',
		id: 7,
	},
	{
		credit: 'Credit 7',
		discipline: 'Discipline 7',
		status: 'Minted',
		date: '4/15/23',
		id: 7,
	},
];

type CreditData = {
	credit: string;
	discipline: string;
	status: string;
	date: string;
	id: number;
};

type EmptyRow = {
	isEmpty: boolean;
	cells: number[];
};

const Student = () => {
	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});
	const { firstName } = useUserStoreHook();
	const { data } = useFetchCredits(1);

	console.log('data', data);

	const COLUMNS: ColumnDef<CreditData>[] = [
		{
			header: '',
			id: 'index',
			accessorFn: (_, index) => index + 1,
		},
		{
			header: 'Credit',
			accessorKey: 'credit',
		},
		{
			header: 'Discipline',
			accessorKey: 'discipline',
		},
		{
			header: 'Status',
			accessorKey: 'status',
			cell: ({ row }) => (
				<div className='flex items-center justify-between'>
					<StatusCircle status={row.original.status} />
					<Button className='bg-[#805DBE] text-white text-[.75rem] font-normal hover:bg-violet-700'>
						Action
					</Button>
				</div>
			),
		},
	];

	const columns = useMemo(() => COLUMNS, [COLUMNS]);

	const table = useReactTable({
		columns,
		// data: data?.results ? data.results : [],
		data: creditData,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		state: {
			pagination,
		},
	});

	const {
		getHeaderGroups,
		getRowModel,
		previousPage,
		getCanPreviousPage,
		nextPage,
		getCanNextPage,
		getState,
	} = table;

	const numOfElementsToAdd = useMemo(() => {
		return 10 - creditData.length - 1;
	}, []);

	const elementsToAdd: EmptyRow[] = useMemo(() => {
		if (numOfElementsToAdd) {
			return Array(Math.max(numOfElementsToAdd, 0)).fill({
				isEmpty: true,
				cells: Array(5).fill(''),
			});
		}
		return [];
	}, [numOfElementsToAdd]);

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
			<Dashboard
				title='My Dashboard'
				previousPage={previousPage}
				getCanNextPage={getCanNextPage}
				getCanPreviousPage={getCanPreviousPage}
				nextPage={nextPage}
				getState={getState}
			>
				<table className='bg-[#805DBE12] w-full table-fixed'>
					<thead>
						<tr>
							{getHeaderGroups().map((headerGroup) => (
								<Fragment key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<th
											key={header.id}
											className='bg-[#EDEDED] text-[14px] text-left leading-4 py-3'
										>
											{String(header.column.columnDef.header)}
										</th>
									))}
								</Fragment>
							))}
						</tr>
					</thead>
					<tbody>
						{getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className='border-b bg-white text-[14px] even:bg-[#EDEDED]'
							>
								{row.getVisibleCells().map((cell, index) =>
									cell.id.includes('status') ? (
										<td key={cell.id}>
											<StatusCircle status={row.original.status} />
										</td>
									) : (
										<td key={cell.id} className={`${index === 0 && 'pl-4'} py-2`}>
											{String(cell.getValue())}
										</td>
									),
								)}
								<td className='text-right flex items-center justify-end py-2'>
									<Button
										className={
											'px-4 bg-[#805DBE] text-white text-[.75rem] font-normal hover:bg-violet-700'
										}
									>
										Take Action
									</Button>
									<Button className='mr-[25px] ml-[31px]'>
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
									</Button>
								</td>
							</tr>
						))}
						{creditData.length < 10 && (
							<tr className='border-b bg-white text-[14px] even:bg-[#EDEDED] w-full relative'>
								<td className='h-[41px] w-full pl-4'>{getRowModel().rows.length + 1}</td>
								<td className='h-[41px] w-full'></td>
								<td className='h-[41px] w-full relative text-center text-[#00000038] cursor-pointer'>
									<Link href='/dashboard/student/browsecredits'>
										+ Click to Browse Credits +
									</Link>
								</td>
								<td className='h-[41px] w-full'></td>
								<td className='h-[41px] w-full'></td>
							</tr>
						)}
						{elementsToAdd.map((row, index) => {
							const rowNumber = getRowModel().rows.length + index + 1 + 1;
							return (
								<tr
									className='border-b bg-white text-[14px] even:bg-[#EDEDED]'
									key={index}
								>
									{row.cells.map((cell, cIndex: number) => (
										<td className={`h-[41px] ${cIndex === 0 && 'pl-4'}`} key={cIndex}>
											{cIndex === 0 && rowNumber}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
				{creditData.length === 10 && (
					<section className='flex justify-center mt-4'>
						<Link href='/dashboard/student/browsecredits'>
							+ Click to Browse Credits +
						</Link>
					</section>
				)}
			</Dashboard>
		</Page>
	);
};

export default Student;
