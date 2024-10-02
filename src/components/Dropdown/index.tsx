import React, { useState } from 'react';

interface DropdownProps {
	options: string[];
	label: string;
	selectedOption: string | null;
	handleSelectedOption: (option: string) => void;
}

const Dropdown = ({
	options,
	selectedOption,
	label,
	handleSelectedOption,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleOptionClick = (option: string) => {
		handleSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className='relative'>
			<button
				className='rounded border-black box-border px-2 py-1 bg-[#805DBE] text-white'
				onClick={toggleDropdown}
			>
				{selectedOption ? selectedOption.toUpperCase() : label}
			</button>
			{isOpen && (
				<ul className='rounded border absolute box-border p-2 top-10 bg-white'>
					{options.map((option, index) => (
						<li className='mb-1' key={index} onClick={() => handleOptionClick(option)}>
							{option.toUpperCase()}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
