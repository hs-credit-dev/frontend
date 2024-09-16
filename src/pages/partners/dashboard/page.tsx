'use client';

import OwnerCreditList from './OwnerCreditList';

export default function Page() {
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
			</section>
		</>
	);
}
