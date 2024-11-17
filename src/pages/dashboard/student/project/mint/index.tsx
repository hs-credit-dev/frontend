import { useRouter } from 'next/router';

import { Button, Input, Label, TextArea, Typography } from '../../../../../components';
import Page from '../../../../../layout/Page';

const ProjectMint = () => {
	const { push } = useRouter();
	return (
		<Page isProtected>
			<div className='bg-white rounded-[20px] box-border p-14'>
				<div className='flex justify-between mb-20'>
					<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
						Mint
					</Typography>
					<Button onClick={() => push('/dashboard/student')}>Back</Button>
				</div>
				<div>
					<p>
						You did it! Upload your final work product (10-minutes of audio or video)
						here. Your teacher will receive an email to verify that they approve the work
						for submission. It will then be routed to our credit expert team for final
						evaluation which takes place at the end of each calendar month with results
						available by the 15th of the following month. You will receive email
						confirmation during each step of the process.
					</p>
				</div>
				<div className='flex flex-col space-y-2 w-full mt-10'>
					<Label htmlFor='first_name' className='text-black'>
						Title
					</Label>
					<Input
						// {...getCommonProps('first_name')}
						placeholder='Enter your first name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full'
					/>
				</div>
				<div className='flex flex-col space-y-2 w-full mt-10'>
					<Label htmlFor='first_name' className='text-black'>
						Abstract
					</Label>
					<TextArea
						// {...getCommonProps('first_name')}
						placeholder='Enter your first name'
						className='border border-gray-400 p-2 rounded-md shadow-lg focus:shadow-2xl focus:outline-none w-full'
					/>
				</div>
				<div>
					<div className='flex gap-2 mt-4 mb-2'>
						<Button>Click here to upload</Button> <Button>Submit</Button>
					</div>
					<p className='text-[10px] italic text-[#333333]'>
						Please make sure your attachment doesn’t exceed 25 MB.
					</p>
				</div>
			</div>
		</Page>
	);
};

export default ProjectMint;
