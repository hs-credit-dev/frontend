export type StatusCircles = {
	status: string;
};

const StatusCircle = ({ status }: StatusCircles) => {
	switch (status) {
		case 'Staked':
			return (
				<span className='pt-4 flex gap-1'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
				</span>
			);
		case 'Pitched':
			return (
				<span className='pt-4 flex gap-1'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-60'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
				</span>
			);
		case 'Minted':
			return (
				<span className='pt-4 flex gap-1'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-60'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-90'></div>
				</span>
			);
	}
};

export default StatusCircle;
