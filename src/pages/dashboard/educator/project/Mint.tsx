import { Button, Typography } from '../../../../components';
import { useApproveMint } from '../../../../hooks/projects';
import { toastError, toastSuccess } from '../../../../utils/toast';

interface MintProps {
	projectId: string;
	fullName: string;
}

const Mint = ({ projectId, fullName }: MintProps) => {
	const onSuccessMutation = (message?: string) => {
		toastSuccess(message);
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};
	const { mutate } = useApproveMint(projectId, onSuccessMutation, onErrorMutation);

	const handleMint = (status: boolean) => {
		mutate(status);
	};

	return (
		<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
			<div>
				<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
					{fullName}
				</Typography>
			</div>
			<div className='bg-white shadow-custom rounded-[8px] mt-12 box-border p-5'>
				<p>
					<span className='font-semibold'>Title:</span>Hello
				</p>
				<p>
					<span className='font-semibold'>Rubric:</span> Here is where the media is
				</p>
				<p>
					<span className='font-semibold'>Abstract:</span> Here is where the media is
				</p>
			</div>
			<div className='mt-10'>
				<Button className='mr-4 !rounded-[20px] !bg-[#8A8A8A] !px-12'>View Upload</Button>
				<Button
					onClick={() => handleMint(false)}
					className='mr-4 !rounded-[20px] !bg-[#D40000] !px-12'
				>
					Reject Mint
				</Button>
				<Button
					onClick={() => handleMint(true)}
					className='!rounded-[20px] !bg-[#1DCC00] !px-12'
				>
					Accept Mint
				</Button>
			</div>
		</div>
	);
};

export default Mint;
