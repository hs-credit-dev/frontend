import { Fragment, useMemo, useState } from 'react';
import {
	ColumnDef,
	getCoreRowModel,
	getPaginationRowModel,
	PaginationState,
	useReactTable,
} from '@tanstack/react-table';
import Image from 'next/image';

import { Button } from '../../../../components';
import { useFetchCreditOwners } from '../../../../hooks/staff'; // Step 1: Import the hook
import Dashboard from '../../../../layout/Dashboard';
import Page from '../../../../layout/Page';

type CreditData = {
	id: number;
	name: string;
	organization: string;
	status: string;
	notes: string;
	approved_by: string;
};

type CreditOwner = CreditData;

const CreditOwnersDashboard = () => {
	const { data: creditOwners, isLoading, error } = useFetchCreditOwners();

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const data = creditOwners ?? [];

	const COLUMNS: ColumnDef<CreditOwner>[] = [
		{
			header: '',
			id: 'index',
			accessorFn: (_, index) => index + 1,
		},
		{
			header: 'Name',
			accessorKey: 'name',
		},
		{
			header: 'Organization',
			accessorKey: 'organization',
		},
		{
			header: 'Status',
			accessorKey: 'status',
		},
		{
			header: 'Notes',
			accessorKey: 'notes',
		},
		{
			header: 'Approved by',
			accessorKey: 'approved_by',
		},
	];

	const columns = useMemo(() => COLUMNS, [COLUMNS]);

	const table = useReactTable<CreditOwner>({
		columns,
		data,
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

	const handleDelete = (id: number) => {
		console.log(`Deleted row with id: ${id}`);
	};

	const numOfElementsToAdd = useMemo(() => {
		return 20 - data?.length - 1;
	}, [data?.length]);

	const elementsToAdd = useMemo(() => {
		if (numOfElementsToAdd) {
			return Array(Math.max(numOfElementsToAdd, 0)).fill({
				isEmpty: true,
				cells: Array(7).fill(''),
			});
		}
		return [];
	}, [numOfElementsToAdd]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error loading credit owners. Please try again later.</div>;
	}

	return (
		<Page>
			<section className='relative flex py-[3rem] bg-[#805DBE] rounded-xl mb-6'>
				<div className='flex flex-col'>
					<div className='flex items-center justify-between space-x-4 pl-[4.3125rem] w-[570px]'>
						<h2 className='text-[2rem] font-bold text-white'>Welcome back, User</h2>
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
										<td key={cell.id}>{row.original.status}</td>
									) : cell.id.includes('notes') ? (
										<td key={cell.id} className='py-2'>
											Notes
										</td>
									) : cell.id.includes('approved_by') ? (
										<td key={cell.id} className='py-2'>
											{row.original.approved_by}
										</td>
									) : (
										<td key={cell.id} className={`${index === 0 && 'pl-4'} py-2`}>
											{String(cell.getValue())}
										</td>
									),
								)}

								<td className='text-right flex items-center justify-end py-2'>
									<Button
										className='mr-[25px] ml-[31px]'
										onClick={() => handleDelete(row.original.id)}
									>
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
						{elementsToAdd.map((row, index) => (
							<tr
								className='border-b bg-white text-[14px] even:bg-[#EDEDED] h-[41px]'
								key={index}
							>
								<td colSpan={row.cells.length} className='h-full'>
									<div className='flex justify-center items-center h-full'>
										{index === 0 && (
											<Button className='font-montserrat text-[14px] font-medium leading-[17.07px] text-[#00000038] text-center'>
												+ click to invite +
											</Button>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				{numOfElementsToAdd === 0 && (
					<div>
						<Button>Click to invite + </Button>
					</div>
				)}
			</Dashboard>
		</Page>
	);
};

export default CreditOwnersDashboard;
