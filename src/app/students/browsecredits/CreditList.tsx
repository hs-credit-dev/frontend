"use client";

import CreditsData from "./credits.json";
import Image from "next/image";
import Link from "next/link";

type Credit = {
	id: string;
	url: string;
	creditname: string;
};

type Credits = Credit[];

type SearchValueProps = {
	search: string;
};

const CreditList = ({ search }: SearchValueProps) => {
	const Credits: Credits = CreditsData;

	return (
		<>
			{Credits && (
				<>
					{Credits.filter((credit) => {
						return search.toLowerCase() === ""
							? credit
							: credit.creditname.toLowerCase().includes(search);
					}).map((credit) => (
						<div key={credit.id}>
							<figure className="h-[12.5rem] w-[12.5rem] md:h-[7.8125rem] md:w-[7.8125rem] lg:h-[12.5rem] lg:w-[12.5rem] ">
								<Link href="/">
									<Image
										src={credit.url}
										width={0}
										height={0}
										sizes="100vw"
										alt="Picture of the credit"
										className="w-full h-full object-cover transition-opacity opacity-0 duration-300 border-2 border-transparent hover:border-[#805DBE]"
										onLoadingComplete={(image) =>
											image.classList.remove("opacity-0")
										}
									/>
								</Link>
							</figure>
							<Link href="/">
								<p className="text-sm font-semibold mt-2">
									{credit.creditname}
								</p>
							</Link>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default CreditList;
