"use client";

import Image from "next/image";
import Link from "next/link";
import StateIcon from "./StateIcon";

type OwnerCredit = {
	id: string;
	url: string;
	creditname: string;
	state: StateOptions;
};

type StateOptions = "Published" | "Pending" | "Deactivated";

type OwnerCredits = OwnerCredit[];

const OwnerCreditList = () => {
	// Dummy data until backend is resolved
	const creditsData: OwnerCredits = [
		{
			id: "1",
			url: "https://s39613.pcdn.co/wp-content/uploads/2017/08/iStock-157735020-170828.jpg",
			creditname: "Filmmaking",
			state: "Pending",
		},
		{
			id: "2",
			url: "https://www.fastweb.com/uploads/article_photo/photo/2036778/crop635w_five-tips-for-freshmen-to-find-a-study-buddy-in-class-without-knowing-anyone.jpg",
			creditname: "African American Studies",
			state: "Published",
		},
		{
			id: "3",
			url: "https://s39613.pcdn.co/wp-content/uploads/2021/06/positive-excited-multiethnic-students-in-casual-clothing-lying-on-in-picture-id1185581975.jpg",
			creditname: "Cognitive Science",
			state: "Deactivated",
		},
		{
			id: "4",
			url: "https://as2.ftcdn.net/v2/jpg/06/22/36/87/1000_F_622368744_1Se3p1utvpwaiidqpix4GfPC4nSfcVos.jpg",
			creditname: "Music Theory",
			state: "Pending",
		},
	];

	return (
		<>
			<div className="flex flex-col items-center mt-10 ml-12 ">
				<Link href="/">
					<Image
						src="/add-credit-icon.png"
						alt="Add Credit"
						width={100}
						height={100}
					/>
				</Link>
				<p className="font-bold">New Credit</p>
			</div>
			{creditsData && (
				<>
					{creditsData.map((credit) => (
						<div key={credit.id} className="mb-8">
							<Link href="/">
								<Image
									src={credit.url}
									width={200}
									height={200}
									sizes="100vw"
									alt="Picture of the credit"
									className="w-full h-full object-cover transition-opacity opacity-0 duration-300 border-2 border-transparent hover:border-[#805DBE]"
									onLoadingComplete={(image) =>
										image.classList.remove("opacity-0")
									}
								/>
							</Link>
							<div className="flex items-center justify-between">
								<Link href="/">
									<p className="text-sm font-semibold mt-2">
										{credit.creditname}
									</p>
								</Link>
								<StateIcon state={credit.state} />
							</div>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default OwnerCreditList;
