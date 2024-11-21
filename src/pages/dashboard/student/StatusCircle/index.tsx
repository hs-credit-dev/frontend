export type StatusCircles = {
	status: string;
	createdAt?: string;
};

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
	const day = date.getDate();
	const year = date.getFullYear() % 100; // get last two digits of the year

	return `${month}/${day}/${year}`;
}

const StatusCircle = ({ status, createdAt = '' }: StatusCircles) => {
	console.log('status', status);
	switch (status) {
		case 'staked':
			return (
				<span className=' flex gap-1 items-center'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<span className='ml-1'>Staked on {formatDate(createdAt)}</span>
				</span>
			);
		case 'stake-approved':
			return (
				<span className=' flex gap-1 items-center'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<span className='ml-1'>Stake approved on {formatDate(createdAt)}</span>
				</span>
			);
		case 'pitched':
			return (
				<span className='flex gap-1 items-center'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-60'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-0'></div>
					<span className='ml-1'>Pitched on {formatDate(createdAt)}</span>
				</span>
			);
		case 'minted':
			return (
				<span className=' flex gap-1 items-center'>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-30'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-60'></div>
					<div className='w-2 h-2 rounded-full bg-[#805DBE] opacity-90'></div>
					<span className='ml-1'>Minted on {formatDate(createdAt)}</span>
				</span>
			);
	}
};

export default StatusCircle;
