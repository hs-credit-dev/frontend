import BackButton from "./BackButton";
import DropDown from "./DropDown";
import FileUpload from "./FileUpload";

export default function ManageCreditStatus() {
	return (
		<section className="pt-[1.6875rem] pb-[3.75rem] pl-[4.3125rem] pr-[4.3125rem]">
			<div className="flex justify-between">
				<h1 className="">Manage Credit</h1>
				<BackButton />
			</div>
			<p className="text-md mt-6 mb-2 text-gray-800">Discipline</p>
			<DropDown />
			<button className="btn bg-green-600 text-[0.75rem] px-[3.6875rem] py-3">
				Publish
			</button>
			<div>
				<p className="text-md mt-6 mb-2 text-gray-800">Credit Name</p>
				<input className="z-0 resize-none w-full runded drop-shadow-sm hover:drop-shadow focus:outline-none" />
			</div>
			<FileUpload />
			<div>
				<p className="text-md mt-6 mb-2 text-gray-800">Add Admins</p>
				<input
					value="Elizabeth Simmons - elizabeth@hs.credit"
					className="z-0 resize-none w-full runded drop-shadow-sm hover:drop-shadow focus:outline-none"
				/>
			</div>
		</section>
	);
}
