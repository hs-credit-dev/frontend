import { Fragment, useMemo } from 'react';
import {
	ColumnDef,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '../../../components';
import { useGetProjects } from '../../../hooks/projects';
import Dashboard from '../../../layout/Dashboard';
import Page from '../../../layout/Page';
import useUserStoreHook from '../../../store';
import { CreditResponse } from '../../../types';
import StatusCircle from '../student/StatusCircle';

type Student = {
	first_name: string;
	last_name: string;
};

interface Result {
	id: string;
	created_at: string;
	credit: CreditResponse;
	title: string;
	status: string;
	student: Student;
}

type EmptyRow = {
	isEmpty: boolean;
	cells: number[];
};

const Educator = () => {
	const { push } = useRouter();
	const { data } = useGetProjects(1);
	const { firstName } = useUserStoreHook();

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

	const COLUMNS: ColumnDef<Result>[] = [
		{
			header: '',
			id: 'index',
			accessorFn: (_, index) => index + 1,
		},
		{
			header: 'Student name',
			id: 'first_name',
			accessorFn: (row) => row?.student?.first_name,
		},
		{
			header: 'Rubric',
			id: 'discipline',
			accessorFn: (row) =>
				disciplineMap[row?.credit?.discipline as keyof typeof disciplineMap],
		},
		{
			header: 'Status',
			id: 'status',
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

	const table = useReactTable({
		columns: COLUMNS,
		data: data?.results ? data.results : [],
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
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

	const handleTakeAction = (id: string) => {
		push({
			pathname: '/dashboard/educator/project',
			query: { id },
		});
	};

	console.log('data', data);
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
				title='Teacher Dashboard'
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
									cell.column.id === 'status' ? (
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
										className={'hover:bg-violet-700 !px-2 !py-1 !rounded-none mr-10'}
									>
										Take Action
									</Button>
								</td>
							</tr>
						))}
						{elementsToAdd.map((row, index) => {
							const rowNumber = getRowModel().rows.length + index + 1 + 1;
							return (
								<tr
									className='border-b bg-white text-[14px] even:bg-[#EDEDED]'
									key={index}
								>
									{row.cells.map((_, cIndex: number) => (
										<td className={`h-[41px] ${cIndex === 0 && 'pl-4'}`} key={cIndex}>
											{cIndex === 0 && rowNumber}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</Dashboard>
		</Page>
	);
};

export default Educator;
