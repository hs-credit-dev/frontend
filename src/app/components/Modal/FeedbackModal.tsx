"use client";

import { useState } from "react";

type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
};

const Modal = ({ isVisible, onClose }: ModalProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	if (!isVisible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
			<div className="w-[55%] h-[65%] flex flex-col p-8 rounded-lg shadow bg-[#f9f7fc]">
				<h1 className="text-2xl font-bold text-gray-800 mb-8">Your Feedback</h1>

				<div className="font-normal text-xs">
					{/* Dropdown UI*/}
					<h2 className="font-medium mb-2 text-gray-800">Select Page</h2>
					<div
						onClick={toggleDropdown}
						className="w-36 h-8 p-2 flex items-center justify-between rounded drop-shadow-sm bg-white hover:drop-shadow"
					>
						Select
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-3 h-3"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m19.5 8.25-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</div>
					{isOpen && (
						<ul className="absolute w-36 mt-1 bg-white drop-shadow-sm">
							<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
								Page
							</li>
							<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
								Page
							</li>
							<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
								Page
							</li>
							<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
								Page
							</li>
						</ul>
					)}

					{/* Rating Question 1*/}
					<section>
						<h2 className="font-medium mt-6 mb-2 text-gray-800">
							Is this page easy to use? (5 being easy and 1 being difficult)
						</h2>
						<div className="flex gap-2">
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">1</span>
							</div>
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">2</span>
							</div>
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">3</span>
							</div>
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">4</span>
							</div>
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">5</span>
							</div>
						</div>
					</section>
					<section>
						<h2 className="font-medium mt-6 mb-2 text-gray-800">
							How would you rate the design of this page?? (5 being excellent
							and 1 being poor)
						</h2>
						<div className="flex gap-2">
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">1</span>
							</div>
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">2</span>
							</div>
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">3</span>
							</div>
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">4</span>
							</div>
							<div className="flex items-center justify-center w-7 h-7 border-2 border-black hover:bg-[#805DBE] hover:text-white hover:border-0">
								<span className="text-sm font-semibold">5</span>
							</div>
						</div>
					</section>

					<section>
						<h2 className="font-medium mt-6 mb-2 text-gray-800">
							Please leave your feedback below:
						</h2>
						<textarea className="resize-none w-full h-32 rounded p-2 drop-shadow-sm hover:drop-shadow focus:outline-none" />
					</section>

					{/* Buttons */}
					<section className="flex justify-left mt-6 gap-2">
						<button
							className="h-7 w-16 rounded-full bg-[#805DBE] text-white text-xs hover:bg-violet-800"
							onClick={onClose}
						>
							Submit
						</button>
						<button
							className="h-7 w-16 rounded-full bg-slate-400 text-white text-xs hover:bg-slate-500"
							onClick={onClose}
						>
							Close
						</button>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Modal;
