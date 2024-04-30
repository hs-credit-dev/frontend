"use client";

import Modal from "../components/Modal/Modal";
import { useState } from "react";
import Button from "../components/Button/Button";
import CreditList from "./CreditList";
import Search from "../components/Search/Search";

export default function Page() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [searchInputValue, setSearchInputValue] = useState<string>(""); // Value from Search component

	// Receives and updates state of user search input value
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInputValue(e.target.value);
	};

	return (
		<>
			<section className="mx-auto py-14 px-10 max-w-screen-lg md:max-w-screen-md lg:max-w-screen-lg">
				<nav className="sticky grid gap-6 content-center md:grid-cols-3 md:gap-8">
					<section>
						<h1 className="flex justify-center items-center text-2xl pt-1 font-bold md:text-xl md:justify-start lg:text-3xl">
							Browse Credits
						</h1>
					</section>
					<section className="flex justify-center items-center md:justify-end">
						<Search
							handleInputChange={handleInputChange}
							searchInputValue={searchInputValue}
						/>
					</section>
					<section className="flex justify-center items-center md:justify-end">
						<Button text="Back" width="82px" />
					</section>
				</nav>
				<section className="mx-0 mt-10 max-h-72 md:max-h-96 overflow-y-scroll grid justify-items-center md:pr-6 md:mt-10 md:grid-cols-4 gap-6 md:justify-items-start">
					<CreditList search={searchInputValue} />
				</section>
				<section className="fixed right-4 bottom-0 -mb-1 md:right-0 md:top-1/2 md:-mr-12">
					<button
						className="bg-black px-2 text-white text-xs pb-2 pt-1 rounded hover:bg-hsPurple md:pb-4 md:-rotate-90"
						onClick={() => setShowModal(true)}
					>
						Leave Feedback
					</button>
				</section>
			</section>
			<Modal isVisible={showModal} onClose={() => setShowModal(false)} />
		</>
	);
}
