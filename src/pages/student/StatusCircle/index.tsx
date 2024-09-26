export type StatusCircles = {
	status: string;
};

const StatusCircle = ({ status }: StatusCircles) => {
	switch (status) {
		case 'Staked':
			return (
				<span className=' flex gap-1 items-center'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<span className='ml-1'>{status}</span>
				</span>
			);
		case 'Pitched':
			return (
				<span className='flex gap-1 items-center'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-60'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<span className='ml-1'>{status}</span>
				</span>
			);
		case 'Minted':
			return (
				<span className=' flex gap-1 items-center'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-60'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-90'></div>
					<span className='ml-1'>{status}</span>
				</span>
			);
	}
};

export default StatusCircle;
