"use client";
import { useState } from "react";

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Select");

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div>
			<button
				onClick={toggleDropdown}
				className="text-sm w-36 h-8 p-2 flex items-center justify-between rounded drop-shadow-sm bg-white hover:drop-shadow"
			>
				{selectedOption}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-3 h-3 stroke-slate-500 stroke-[2] fill-none"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m19.5 8.25-7.5 7.5-7.5-7.5"
					/>
				</svg>
			</button>
			{isOpen && (
				<ul className="absolute z-10 w-36 mt-1 bg-white drop-shadow-md cursor-pointer">
					<li
						onClick={() => handleOptionClick("Discipline 1")}
						className="p-2 text-xs hover:bg-[#805DBE] hover:text-white"
					>
						Discipline 1
					</li>
					<li
						onClick={() => handleOptionClick("Discipline 2")}
						className="p-2 text-xs hover:bg-[#805DBE] hover:text-white"
					>
						Discipline 2
					</li>
					<li
						onClick={() => handleOptionClick("Discipline 3")}
						className="p-2 text-xs hover:bg-[#805DBE] hover:text-white"
					>
						Discipline 3
					</li>
				</ul>
			)}
		</div>
	);
}
