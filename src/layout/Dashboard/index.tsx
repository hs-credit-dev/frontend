import { ReactNode } from 'react';
import { TableState } from '@tanstack/react-table';

interface DashboardProps {
	title: string;
	children: ReactNode;
	previousPage: () => void;
	nextPage: () => void;
	getCanPreviousPage: () => boolean;
	getCanNextPage: () => boolean;
	getState: () => TableState;
}

const Dashboard = ({ title, children }: DashboardProps) => {
	return (
		<section>
			<div className='rounded-t-[20px] bg-white box-border pl-[71px] pt-[32px] pb-[65px]'>
				<h1 className='text-[32px] font-bold'>{title}</h1>
			</div>
			<section>{children}</section>
		</section>
	);
};

export default Dashboard;
