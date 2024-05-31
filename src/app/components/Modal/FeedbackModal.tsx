"use client";

import { useState } from "react";

type ModalProps = {
	isVisible: boolean;
	onClose: () => void;
	pageTitle: string;
};

const Modal = ({ isVisible, onClose, pageTitle }: ModalProps) => {
	const [isQuestionOneDropdown, setIsQuestionOneDropDown] = useState(false);
	const [isQuestionTwoDropdown, setIsQuestionTwoDropDown] = useState(false);

	const toggleQuestionOneDropdown = () => {
		setIsQuestionOneDropDown(!isQuestionOneDropdown);
		if (isQuestionTwoDropdown) {
			setIsQuestionTwoDropDown(false);
		}
	};
	const toggleQuestionTwoDropdown = () => {
		setIsQuestionTwoDropDown(!isQuestionTwoDropdown);
		if (isQuestionOneDropdown) {
			setIsQuestionOneDropDown(false);
		}
	};

	if (!isVisible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
			<div className="w-[55%] py-[2.5rem] flex flex-col p-8 rounded-lg shadow bg-[#f9f7fc]">
				<h1 className="text-2xl font-bold text-gray-800 mb-8">Your Feedback</h1>

				<div className="font-normal text-xs">
					{/* Display page title*/}
					<h2 className="mb-2 text-[#805DBE] font-bold">
						<span className="font-md text-gray-800">
							You are providing feedback for{" "}
						</span>
						{pageTitle}
					</h2>

					{/* Question One*/}
					<section>
						<h2 className="font-medium mt-6 mb-2 text-gray-800">
							Is this page easy to use?
						</h2>
						<button
							onClick={toggleQuestionOneDropdown}
							className="w-36 h-8 p-2 flex items-center justify-between rounded drop-shadow-sm bg-white hover:drop-shadow"
						>
							Select
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 stroke-slate-500 stroke-[2] fill-none"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</button>
						{isQuestionOneDropdown && (
							<ul className="absolute z-10 w-36 mt-1 bg-white drop-shadow-md">
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Very Easy
								</li>
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Easy
								</li>
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Moderate
								</li>
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Difficult
								</li>
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Very Difficult
								</li>
							</ul>
						)}

						{/* Question Two*/}
						<h2 className="font-medium mt-6 mb-2 text-gray-800">
							How would you rate the design of this page?
						</h2>
						<button
							onClick={toggleQuestionTwoDropdown}
							className="z-0 w-36 h-8 p-2 flex items-center justify-between rounded drop-shadow-sm bg-white hover:drop-shadow"
						>
							Select
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6 stroke-slate-500 stroke-[2] fill-none"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</button>
						{isQuestionTwoDropdown && (
							<ul className="absolute z-10 w-36 mt-1 bg-white drop-shadow-md">
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Excellent
								</li>
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Good
								</li>
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Average
								</li>
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Fair
								</li>
								<li className="p-2 text-xs hover:bg-[#805DBE] hover:text-white">
									Poor
								</li>
							</ul>
						)}

						{/* Rating UI - Do Not Remove Commented Code*/}
						{/* <section>
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
						</section> */}
					</section>

					{/* Feedback textarea*/}
					<section>
						<h2 className="font-medium mt-6 mb-2 text-gray-800">
							Please leave your feedback below:
						</h2>
						<textarea className="z-0 resize-none w-full h-32 rounded p-2 drop-shadow-sm hover:drop-shadow focus:outline-none" />
					</section>

					{/* Buttons */}
					<section className="flex justify-left mt-6 gap-2 font-bold">
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
							Cancel
						</button>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Modal;
