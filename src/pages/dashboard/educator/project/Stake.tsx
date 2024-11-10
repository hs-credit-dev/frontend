import { Button, Typography } from '../../../../components';
import { useAproveProject } from '../../../../hooks/projects';
import { toastError, toastSuccess } from '../../../../utils/toast';

interface StakeProps {
	firstName?: string;
	creditName?: string;
	educatorEmail?: string;
	contentToStake?: string;
	projectId: string;
}

const Stake = ({
	firstName,
	creditName,
	educatorEmail,
	contentToStake,
	projectId,
}: StakeProps) => {
	const onSuccessMutation = (message?: string) => {
		toastSuccess(message);
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};
	const { mutate } = useAproveProject(projectId, onSuccessMutation, onErrorMutation);
	return (
		<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
			<div>
				<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
					{firstName}
				</Typography>
			</div>
			<div className='bg-white shadow-custom rounded-[8px] mt-12 box-border p-5'>
				<div>
					<p>
						<span className='font-semibold'>Credit:</span> {creditName}
					</p>
					<p className='mb-8'>
						<span className='font-semibold'>Teacher Email:</span> {educatorEmail}
					</p>
					<p className='mb-10'>
						<span className='font-semibold'>Content to Stake:</span> {contentToStake}
					</p>
					<p>
						<span className='font-semibold'>Staked Content:</span>blablabladddd
					</p>
				</div>
			</div>
			<div className='mt-10'>
				<Button className='mr-4 !rounded-[20px] !bg-[#D40000] !px-12'>
					Reject Stake
				</Button>
				<Button onClick={() => mutate()} className='!rounded-[20px] !bg-[#1DCC00] !px-12'>
					Accept Stake
				</Button>
			</div>
		</div>
	);
};

export default Stake;
