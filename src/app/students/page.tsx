export default function Page() {
	return (
		<div className="py-10 px-10">
			<nav className="grid md:grid-cols-3 gap-4">
				<div>
					<h1 className="flex justify-center text-2xl font-bold md:justify-start lg:text-3xl">
						Browse Credits
					</h1>
				</div>
				<div className="flex justify-center md:ml-20">
					<input
						className="px-3 py-1 border text-sm border-gray-500 rounded-full focus:outline-none focus:border-2"
						type="search"
						placeholder="Search..."
					/>
				</div>
				<div className="flex justify-center md:justify-end">
					<button className="h-8 w-16 rounded-full bg-hsPurple text-white text-xs">
						Back
					</button>
				</div>
			</nav>
		</div>
	);
}
