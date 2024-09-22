import Link from 'next/link';

const Button = () => {
	return (
		<Link
			href='/src/pages/student/pitch'
			className='btn text-[0.75rem] px-[1.6875rem] py-3'
		>
			Back
		</Link>
	);
};

export default Button;
