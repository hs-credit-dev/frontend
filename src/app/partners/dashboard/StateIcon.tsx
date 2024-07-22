type StateIcon = {
	state: string;
};

const StateIcon = ({ state }: StateIcon) => {
	return (
		<button className="relative flex items-center group">
			<figure className="m-[0.125rem] ml-2 w-5 cursor-default rounded-full bg-black text-center text-white text-sm">
				{state === "Deactivated" ? "D" : "P"}
			</figure>
			<div className="absolute bottom-full right-0 items-center hidden mt-2 group-hover:flex">
				<span className="relative z-10 p-2 w-[6rem] text-xs leading-none text-white whitespace-no-wrap bg-black rounded-md">
					{`This credit is ${state}`}
				</span>
			</div>
		</button>
	);
};

export default StateIcon;
