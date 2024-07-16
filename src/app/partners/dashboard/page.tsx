"use client";

import FeedbackModal from "../../components/Modal/FeedbackModal";
import { useState } from "react";
import OwnerCreditList from "./OwnerCreditList";

export default function Page() {
	const [showModal, setShowModal] = useState<boolean>(false);

	const title = "Owner Credits";

	return (
		<>
			<section className="mx-auto py-14 px-10 max-w-screen-lg md:max-w-screen-md lg:max-w-screen-lg">
				<nav className="sticky grid gap-6 content-center md:grid-cols-3 md:gap-8">
					<section>
						<h1 className="flex justify-center items-center text-2xl pt-1 font-bold md:text-xl md:justify-start lg:text-3xl">
							Credits
						</h1>
					</section>
				</nav>
				<section className="mx-0 mt-10 max-h-full overflow-y-scroll grid justify-items-center md:pr-6 md:mt-10 md:grid-cols-4 gap-6 md:justify-items-start">
					<OwnerCreditList />
				</section>
				<section className="fixed right-4 bottom-0 -mb-1 md:right-0 md:top-1/2 md:-mr-12">
					<button
						className="bg-black px-2 text-white text-xs pb-2 pt-1 rounded hover:bg-[#805DBE] md:pb-4 md:-rotate-90"
						onClick={() => setShowModal(true)}
					>
						Leave Feedback
					</button>
				</section>
			</section>
			<FeedbackModal
				isVisible={showModal}
				onClose={() => setShowModal(false)}
				pageTitle={title}
			/>
		</>
	);
}
