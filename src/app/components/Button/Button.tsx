type ButtonProps = {
	text: string;
	width: string;
};

const Button = ({ text, width }: ButtonProps) => {
	return (
		<button
			className={`h-[39px] w-[${width}] rounded-full bg-[#805DBE] text-white text-xs font-bold hover:bg-violet-700`}
		>
			{text}
		</button>
	);
};

export default Button;
