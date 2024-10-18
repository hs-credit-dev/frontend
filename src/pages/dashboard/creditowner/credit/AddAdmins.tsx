import React, { useState } from 'react';

import { Button, Typography } from '../../../../components';
import { Admin } from '../../../../types';

import AddAdminModal from './AddAdminModal';

interface AddAdminsProps {
	creditAdmins: Admin[];
	creditId: string;
}

const AddAdmins = ({ creditAdmins, creditId }: AddAdminsProps) => {
	const [showAddModal, setShowAddModal] = useState(false);

	const invitedAdmins = creditAdmins?.filter((admin) => admin.status === 'invited');
	const joinedAdmins = creditAdmins?.filter((admin) => admin.status === 'confirmed');

	return (
		<div className=''>
			<Typography className='text-black mb-6'>Add Admins</Typography>
			<div className='mb-8'>
				{invitedAdmins?.map((admin, index) => (
					<div
						key={index}
						className='shadow-md bg-white box-border py-[21px] px-20 flex justify-between mb-4'
					>
						<Typography>
							{admin.first_name} {admin.last_name}
						</Typography>
						<Typography>{admin.email}</Typography>
						<Button>
							<svg
								className='stroke-[#ef4444] w-[30px] h-[30px]'
								data-name='Layer 3'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 128 128'
							>
								<path d='M64 21.433A42.567 42.567 0 1 0 106.567 64 42.615 42.615 0 0 0 64 21.433zm0 80.912A38.345 38.345 0 1 1 102.345 64 38.389 38.389 0 0 1 64 102.345z' />
								<path d='M79.459 48.3a2.11 2.11 0 0 0-2.985 0L64 60.778 51.523 48.3a2.111 2.111 0 1 0-2.985 2.985l12.476 12.478-12.473 12.474a2.111 2.111 0 1 0 2.985 2.985L64 66.748l12.474 12.474a2.111 2.111 0 0 0 2.985-2.985L66.984 63.763l12.475-12.477a2.11 2.11 0 0 0 0-2.986z' />
							</svg>
						</Button>
					</div>
				))}
				<Button className='flex mx-auto' onClick={() => setShowAddModal(!showAddModal)}>
					<svg
						className='stroke-[#000] w-[30px] h-[30px]'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 32 32'
					>
						<g data-name='57-Add'>
							<path d='M16 0a16 16 0 1 0 16 16A16 16 0 0 0 16 0zm0 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14z' />
							<path d='M17 15V6h-2v9H6v2h9v9h2v-9h9v-2h-9z' />
						</g>
					</svg>
				</Button>
			</div>
			<Typography className='text-black mb-6'>Invited</Typography>
			{joinedAdmins?.map((admin, index) => (
				<div
					key={index}
					className='shadow-md bg-white box-border py-[21px] px-20 flex justify-between mb-4'
				>
					<Typography>
						{admin.first_name} {admin.last_name}
					</Typography>
					<Typography>{admin.email}</Typography>
					<Button className='flex items-center'>
						<div className='w-2 h-2 rounded-full bg-[#1DCC00] mr-2' />
						<p className='text-lg italic'>Confirmed</p>
					</Button>
				</div>
			))}
			{showAddModal && (
				<AddAdminModal
					creditAdmins={creditAdmins}
					creditId={creditId}
					onBack={() => setShowAddModal(false)}
				/>
			)}
		</div>
	);
};

export default AddAdmins;
