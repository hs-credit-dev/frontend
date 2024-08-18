import BackButton from "./BackButton";
import DropDown from "./DropDown";

export default function ManageCreditStatus() {
	return (
		<section className="pt-[1.6875rem] pb-[3.75rem] pl-[4.3125rem] pr-[4.3125rem]">
			<div className="flex justify-between">
				<h1 className="">Manage Credit</h1>
				<BackButton />
			</div>
			<p className="text-md mt-6 mb-2 text-gray-800">Discipline</p>
			<DropDown />
		</section>
	);
}
