import { ReactNode } from 'react';
import { TableState } from '@tanstack/react-table';

import { Button } from '../../components';

interface DashboardProps {
	title: string;
	children: ReactNode;
	previousPage: () => void;
	nextPage: () => void;
	getCanPreviousPage: () => boolean;
	getCanNextPage: () => boolean;
	getState: () => TableState;
}

const Dashboard = ({
	title,
	children,
	previousPage,
	getCanPreviousPage,
	getCanNextPage,
	nextPage,
	getState,
}: DashboardProps) => (
	<section>
		<div className='rounded-t-[20px] bg-white box-border pl-[71px] pt-[32px] pb-[65px]'>
			<h1 className='text-[32px] font-bold'>{title}</h1>
		</div>
		<section>{children}</section>
		<section className='flex justify-between pt-4'>
			<Button
				className='rounded p-1'
				onClick={() => previousPage()}
				disabled={!getCanPreviousPage()}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					className='w-6 h-6 stroke-[#000] stroke-[2] fill-none'
				>
					<path d='M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z' />
				</svg>
			</Button>
			<strong className='text-lg'>{getState().pagination.pageIndex + 1}</strong>
			<Button
				className='rounded p-1'
				onClick={() => nextPage()}
				disabled={!getCanNextPage()}
			>
				<svg
					className='w-6 h-6 stroke-[#000] stroke-[2] fill-none'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
				>
					<path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
				</svg>
			</Button>
		</section>
	</section>
);

export default Dashboard;
