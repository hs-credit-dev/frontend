import { Fragment, useMemo, useState } from 'react';
import {
	ColumnDef,
	getCoreRowModel,
	getPaginationRowModel,
	PaginationState,
	useReactTable,
} from '@tanstack/react-table';
import Image from 'next/image';

import { useFetchStudents } from '../../../hooks/student';
import Dashboard from '../../../layout/Dashboard';
import Page from '../../../layout/Page';
import useUserStoreHook from '../../../store';

type EmptyRow = {
	isEmpty: boolean;
	cells: number[];
};

type CreditData = {
	created_at: string;
	updated_at: string;
	email: string;
	first_name: string;
	last_name: string;
};

const StaffDashboard = () => {
	const { firstName } = useUserStoreHook();

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});
	const { data, isLoading, error } = useFetchStudents(pagination.pageIndex + 1);

	const columns = useMemo(() => {
		const COLUMNS: ColumnDef<CreditData>[] = [
			{
				header: '',
				id: 'index',
				accessorFn: (_, index) => index + 1,
			},
			{
				header: 'Name',
				id: 'first_name',
				accessorFn: (row) => `${row.first_name} ${row.last_name}`,
			},
			{
				header: 'Date Submitted',
				id: 'created_at',
				accessorFn: (row) => new Date(row.created_at).toDateString(),
			},
			{
				header: 'Email',
				accessorKey: 'email',
			},
			{
				header: '',
				id: 'empty_one',
				accessorFn: () => '',
			},
			{
				header: '',
				id: 'empty_two',
				accessorFn: () => '',
			},
		];

		return COLUMNS;
	}, []);

	const table = useReactTable({
		columns,
		data: data?.results,
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
		return 10 - data?.count;
	}, [data?.count]);

	const elementsToAdd = useMemo(() => {
		if (numOfElementsToAdd) {
			return Array(Math.max(numOfElementsToAdd, 0)).fill({
				isEmpty: true,
				cells: Array(6).fill(''),
			});
		}
		return [];
	}, [numOfElementsToAdd]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		console.error('Error fetching data:', error); // Log the error details
		return <div>Error fetching data. Please try again later.</div>;
	}

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
								{row.getVisibleCells().map((cell, index) => (
									<td key={cell.id} className={`${index === 0 && 'pl-4'} py-2`}>
										{String(cell.getValue())}
									</td>
								))}
							</tr>
						))}
						{elementsToAdd.map((row: EmptyRow, index: number) => {
							const rowNumber = data.count + index + 1;
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

export default StaffDashboard;
