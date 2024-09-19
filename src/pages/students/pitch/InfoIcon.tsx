export type InfoIcon = {
	message: string;
};

const InfoIcon = ({ message }: InfoIcon) => {
	return (
		<button className='relative flex items-center group'>
			<figure className='m-[0.125rem] ml-2 w-5 cursor-default rounded-full bg-black text-center text-white text-sm'>
				?
			</figure>
			<div className='absolute left-0 items-center hidden ml-6 group-hover:flex'>
				<div className='mr-4'></div>
				<span className='relative z-10 p-2 w-[12rem] text-xs leading-none text-white whitespace-no-wrap bg-black rounded-md'>
					{message}
				</span>
			</div>
		</button>
	);
};

export default InfoIcon;
