import Image from "next/image";

export default function Page() {
	const titleArray: string[] = [
		"Filmmaking",
		"African American Studies",
		"Cognitive Science",
		"Music Theory",
		"Data Science",
		"Digital Animation",
		"Business Administration",
		"Clinical Psychology",
		"Data Science",
		"Digital Animation",
		"Business Administration",
		"Clinical Psychology",
	];

	return (
		<section className="mx-auto py-14 px-10 max-w-screen-lg md:max-w-screen-md lg:max-w-screen-lg">
			<nav className="sticky grid gap-6 content-center md:grid-cols-3 md:gap-8">
				<section>
					<h1 className="flex justify-center items-center text-2xl pt-1 font-bold md:text-xl md:justify-start lg:text-3xl">
						Browse Credits
					</h1>
				</section>
				<section className="flex justify-center items-center md:justify-end">
					<input
						className="px-4 py-2 border text-sm bg-none border-gray-400 rounded-full appearance-none focus:outline-none focus:shadow-md focus:border-hsPurple"
						type="text"
						placeholder="Search..."
					/>
					<figure>
						<svg
							className="-ml-10"
							role="graphic-content"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
							fill="#9ca3af"
							width="24px"
							height="24px"
						>
							<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
						</svg>
					</figure>
				</section>
				<section className="flex justify-center items-center md:justify-end">
					<button className="h-8 w-20 rounded-full bg-hsPurple text-white text-xs hover:shadow-md hover:bg-violet-800">
						Back
					</button>
				</section>
			</nav>
			<section className="mx-0 mt-10 h-96 overflow-y-scroll grid justify-items-center md:pr-6 md:mt-10 md:grid-cols-4 gap-6 md:justify-items-start">
				<>
					{titleArray.map((title, index) => (
						<figure key={index}>
							<Image
								src="/dummyimage.webp"
								width={200}
								height={200}
								alt="Picture of the credit"
							/>
							<p className="text-sm font-semibold mt-2">{title}</p>
						</figure>
					))}
				</>
			</section>
			<section className="fixed right-4 bottom-0 -mb-1 md:right-0 md:top-1/2 md:-mr-12">
				<button className="bg-black px-2 text-white text-xs pb-2 pt-1 rounded md:pb-4 md:-rotate-90 ">
					Leave Feedback
				</button>
			</section>
		</section>
	);
}
