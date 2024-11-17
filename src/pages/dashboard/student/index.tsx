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
import { useRouter } from 'next/router';

import { Button } from '../../../components';
import { useGetProjects } from '../../../hooks/projects';
import Dashboard from '../../../layout/Dashboard';
import Page from '../../../layout/Page';
import useUserStoreHook from '../../../store';
import { CreditResponse } from '../../../types';

import StatusCircle from './StatusCircle';

type Student = {
	first_name: string;
	last_name: string;
};

type CreditData = {
	discipline: string;
	status: string;
	date: string;
	id: string;
	credit: CreditResponse;
	created_at: string;
	student: Student;
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
	const { data } = useGetProjects(1);
	const { push } = useRouter();
	// 006e0ecf-6abd-4dbb-bd91-b85a16083e2b
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

	const COLUMNS: ColumnDef<CreditData>[] = [
		{
			header: '',
			id: 'index',
			accessorFn: (_, index) => index + 1,
		},
		{
			header: 'Credit',
			accessorKey: 'title',
		},
		{
			header: 'Discipline',
			id: 'discipline',
			accessorFn: (row) =>
				disciplineMap[row?.credit?.discipline as keyof typeof disciplineMap],
		},
		{
			header: 'Status',
			accessorKey: 'status',
			cell: ({ row }) => (
				<div className='flex items-center justify-between'>
					<StatusCircle
						status={row.original.status}
						createdAt={row.original.created_at}
					/>
					<Button className='hover:bg-violet-700 !p-0'>Action</Button>
				</div>
			),
		},
	];

	console.log('data', data?.results);

	const table = useReactTable({
		columns: COLUMNS,
		data: data?.results ? data.results : [],
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
		return 20 - data?.results.length - 1;
	}, [data?.results.length]);

	const elementsToAdd: EmptyRow[] = useMemo(() => {
		if (numOfElementsToAdd) {
			return Array(Math.max(numOfElementsToAdd, 0)).fill({
				isEmpty: true,
				cells: Array(5).fill(''),
			});
		}
		return [];
	}, [numOfElementsToAdd]);

	const handleTakeAction = (projectId: string) => {
		push({
			pathname: '/dashboard/student/project/',
			query: {
				projectId,
			},
		});
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
			<Dashboard
				title='My Dashboard'
				previousPage={previousPage}
				getCanNextPage={getCanNextPage}
				getCanPreviousPage={getCanPreviousPage}
				nextPage={nextPage}
				getState={getState}
			>
				<table className='bg-[#ededed] w-full table-fixed'>
					<thead>
						<tr>
							{getHeaderGroups().map((headerGroup) => (
								<Fragment key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<th
											key={header.id}
											className='bg-[#ededed] text-[14px] text-left leading-4 py-3'
										>
											{String(header.column.columnDef.header)}
										</th>
									))}
								</Fragment>
							))}
						</tr>
					</thead>
					<tbody className='bg-red-500 h-[300px]'>
						{getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className='border-b bg-white text-[14px] even:bg-[#EDEDED]'
							>
								{row.getVisibleCells().map((cell, index) =>
									cell.id.includes('status') ? (
										<td key={cell.id}>
											<StatusCircle
												status={row.original.status}
												createdAt={row.original.created_at}
											/>
										</td>
									) : (
										<td key={cell.id} className={`${index === 0 && 'pl-4'} py-2`}>
											{String(cell.getValue())}
										</td>
									),
								)}
								<td className='text-right flex items-center justify-end py-2'>
									<Button
										onClick={() => handleTakeAction(row.original.id)}
										className={'hover:bg-violet-700 !px-2 !py-1 !rounded-none'}
									>
										Take Action
									</Button>
									<Button className='!p-0 bg-transparent mx-2'>
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
						{data?.results.length < 20 && (
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
				{data?.results.length === 20 && (
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
