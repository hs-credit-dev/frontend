// import React, { useState } from 'react';
//
// import { AdminsProp } from './page';
//
// type Props = {
// 	openModal: boolean;
// 	setOpenModal: (value: boolean) => void;
// 	onSubmit: (value: AdminsProp) => void;
// };
// const AddAdminModal: React.FC<Props> = ({ openModal, setOpenModal, onSubmit }) => {
// 	const [firstName, setFirstName] = useState('');
// 	const [lastName, setLastName] = useState('');
// 	const [email, setEmail] = useState('');
// 	const handleSubmit = (formData: FormData) => {
// 		const firstName = formData.get('firstName')?.toString().trim();
// 		const lastName = formData.get('lastName')?.toString().trim();
// 		const email = formData.get('email')?.toString().trim();
// 		if (firstName && lastName && email) {
// 			onSubmit({
// 				name: `${firstName} ${lastName}`,
// 				email,
// 			});
// 			setOpenModal(false);
// 			setEmail('');
// 			setFirstName('');
// 			setLastName('');
// 		}
// 	};
// 	return (
// 		<>
// 			{openModal && (
// 				<div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center px-4'>
// 					<div className=' flex flex-col rounded-lg shadow bg-[#fff] max-w-[47.375rem] w-full pt-[3.125rem] pb-[4.375rem] pr-[4.8125rem] pl-[4.3125rem] gap-y-[4.375rem]'>
// 						<div className='flex justify-between items-center'>
// 							<h2 className='text-[2rem] font-bold'>Add Admin</h2>
// 							<div>
// 								<button
// 									type='button'
// 									className='btn text-[0.75rem] px-[1.6875rem] py-3'
// 									onClick={() => setOpenModal(false)}
// 								>
// 									Back
// 								</button>
// 							</div>
// 						</div>
// 						<section>
// 							<form action={handleSubmit}>
// 								<fieldset className='flex flex-col gap-y-8'>
// 									<div className='flex gap-x-[1.625rem]'>
// 										<div className='flex flex-col gap-y-[0.625rem] w-[41.177%]'>
// 											<label htmlFor='firstName'>First Name</label>
// 											<input
// 												type='text'
// 												id='firstName'
// 												name='firstName'
// 												value={firstName}
// 												onChange={(evt) => setFirstName(evt.target.value)}
// 												className='py-[1.2229rem]'
// 											/>
// 										</div>
// 										<div className='flex flex-col gap-y-[0.625rem] w-[48.042%]'>
// 											<label htmlFor='lastName'>Last Name</label>
// 											<input
// 												type='text'
// 												id='lastName'
// 												name='lastName'
// 												value={lastName}
// 												onChange={(evt) => setLastName(evt.target.value)}
// 												className='py-[1.2229rem]'
// 											/>
// 										</div>
// 									</div>
// 									<div className='flex flex-col max-w-[22.1875rem] gap-y-[0.8125rem]'>
// 										<div className='flex flex-col gap-y-[0.625rem]'>
// 											<label htmlFor='firstName'>Email</label>
// 											<input
// 												type='text'
// 												id='email'
// 												name='email'
// 												value={email}
// 												onChange={(evt) => setEmail(evt.target.value)}
// 												className='py-[1.2229rem]'
// 											/>
// 										</div>
// 										<span className='pb-[0.1875rem] text-[0.625rem] italic font-medium'>
// 											An invite link will be sent to this email.
// 										</span>
// 									</div>
// 									<div className='flex pt-[2.3125rem]'>
// 										<button className='btn py-[1.036rem] px-[4.615rem]'>Submit</button>
// 									</div>
// 								</fieldset>
// 							</form>
// 						</section>
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// };
//
// export default AddAdminModal;
