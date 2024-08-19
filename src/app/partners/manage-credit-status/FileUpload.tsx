"use client";

import { useState } from "react";

export default function FileUpload() {
	const [file, setFile] = useState<File | null>(null);

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFile(event.target.files[0]);
		}
	};

	return (
		<div className="mt-7">
			<p className="text-md mt-6 mb-4 text-gray-800">Credit Image</p>
			<label className="py-4 px-6 rounded-full bg-[#805DBE] text-white text-xs font-bold hover:bg-violet-700 cursor-pointer">
				Click here to upload
				<input
					className="hidden"
					type="file"
					accept="image/*"
					onChange={handleFileUpload}
					required
				/>
			</label>
			{file && (
				<span className="text-gray-400 text-xs ml-3">
					You have chosen to upload {file?.name}
				</span>
			)}
			<p className="mt-7 text-xs">For best results, use 200 x 200 px image.</p>
		</div>
	);
}
