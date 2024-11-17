import { Button, Typography } from '../../../../components';
import { useApprovePitch } from '../../../../hooks/projects';
import { toastError, toastSuccess } from '../../../../utils/toast';

interface PitchProps {
	projectId: string;
	fullName?: string;
}

const Pitch = ({ projectId, fullName }: PitchProps) => {
	const onSuccessMutation = (message?: string) => {
		toastSuccess(message);
	};

	const onErrorMutation = (message?: string) => {
		toastError(message);
	};
	const { mutate } = useApprovePitch(projectId, onSuccessMutation, onErrorMutation);
	return (
		<div className='bg-white rounded-[20px] flex flex-col box-border p-14'>
			<div>
				<Typography className='font-montserrat text-[32px] font-bold leading-[39.01px] text-left'>
					{fullName}
				</Typography>
			</div>
			<div className='bg-white shadow-custom rounded-[8px] mt-12 box-border p-5'>
				<div>
					<p>
						<span className='font-semibold'>Credit in Progress:</span>Hello
					</p>
					<p>
						<span className='font-semibold'>Task:</span> Here is where the media is
					</p>
				</div>
				<div className='mt-10'>
					<Button
						onClick={() => mutate(false)}
						className='mr-4 !rounded-[20px] !bg-[#D40000] !px-12'
					>
						Reject Pitch
					</Button>
					<Button
						onClick={() => mutate(true)}
						className='!rounded-[20px] !bg-[#1DCC00] !px-12'
					>
						Accept Pitch
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Pitch;
