import { Fragment, useMemo, useState } from 'react';
import {
	ColumnDef,
	getCoreRowModel,
	getPaginationRowModel,
	PaginationState,
	useReactTable,
} from '@tanstack/react-table';
import Image from 'next/image';

import Dashboard from '../../../components/Dashboard';
import { useStudents } from '../../../hooks/student';
import Page from '../../../layout/Page';
import useUserStoreHook from '../../../store';

import AudioCell from './AudioCell';
import ButtonCell from './ButtonCell';
import NoteCell from './NoteCell';

type EmptyRow = {
	isEmpty: boolean;
	cells: number[];
};

type CreditData = {
	dateSubmitted: string;
	email: string;
	username: string;
	audio: string | null;
	notes: string;
};

// const creditData: CreditData[] = [
// 	{
// 		dateSubmitted: '09/15/2023',
// 		email: 'john.doe@example.com',
// 		username: 'johndoe',
// 		audio: 'https://example.com/audio/john-doe.mp3',
// 		notes: 'Submitted assignment on algebra concepts.',
// 	},
// 	{
// 		dateSubmitted: '08/21/2023',
// 		email: '',
// 		username: 'janesmith',
// 		audio: null,
// 		notes: 'Project presentation on chemical reactions. No audio provided.',
// 	},
// 	{
// 		dateSubmitted: '07/10/2023',
// 		email: '',
// 		username: 'alicewonderland',
// 		audio: null,
// 		notes: 'Submitted a podcast-style audio discussing literature themes.',
// 	},
// 	{
// 		dateSubmitted: '06/25/2023',
// 		email: '',
// 		username: 'bobthebuilder',
// 		audio: 'https://example.com/audio/bob-builder.mp3',
// 		notes: 'Submitted a construction project detailing the building process.',
// 	},
// ];

const StaffDashboard = () => {
	const { firstName } = useUserStoreHook();

	const [pagination, setPagination] = useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const { data, isLoading, error } = useStudents(1);

	console.log('Data: ', data);

	const COLUMNS: ColumnDef<CreditData>[] = [
		{
			header: 'No.',
			id: 'index',
			accessorFn: (_, index) => index + 1,
		},
		{
			header: 'Date Submitted',
			accessorKey: 'dateSubmitted',
		},
		{
			header: 'Email',
			accessorKey: 'email',
		},
		{
			header: 'Username',
			accessorKey: 'username',
		},
		{
			header: 'Audio',
			accessorKey: 'audio',
		},
		{
			header: 'Notes',
			accessorKey: 'notes',
		},
	];

	const columns = useMemo(() => COLUMNS, [COLUMNS]);

	const table = useReactTable({
		columns,
		data: [],
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

	const numOfElementsToAdd = 10 - getRowModel().rows.length;
	const elementsToAdd = Array(Math.max(numOfElementsToAdd, 0)).fill({
		isEmpty: true,
		cells: Array(6).fill(''),
	});

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
										{cell.column.id === 'audio' ? (
											cell.getValue<string | null>()?.trim() ? (
												<AudioCell audioUrl={cell.getValue<string>()} />
											) : (
												<span className='font-montserrat text-[14px] font-normal leading-[17.07px]'>
													No Audio
												</span>
											)
										) : cell.column.id === 'notes' ? (
											cell.getValue<string | null>()?.trim() ? (
												<NoteCell notes={cell.getValue<string>()} />
											) : (
												<span className='font-montserrat text-[14px] font-normal leading-[17.07px]'>
													No Notes
												</span>
											)
										) : cell.column.id === 'email' ? (
											cell.getValue<string>()?.trim() === '' ? (
												<span className='font-montserrat text-[14px] font-normal leading-[17.07px]'>
													E-Mail
												</span>
											) : (
												<span className='font-montserrat text-[14px] font-normal leading-[17.07px]'>
													{cell.getValue<string>()}
												</span>
											)
										) : (
											<span className='font-montserrat text-[14px] font-normal leading-[17.07px]'>
												{String(cell.getValue())}
											</span>
										)}
									</td>
								))}
								<td className='flex items-center justify-end py-2'>
									<ButtonCell
										isDisabled={
											!row.getValue<string | null>('audio')?.trim() ||
											!row.getValue<string | null>('notes')?.trim()
										}
									/>
								</td>
							</tr>
						))}
						{elementsToAdd.map((row: EmptyRow, index: number) => {
							const rowNumber = getRowModel().rows.length + index + 1;
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
