import BackButton from "./BackButton";
import InfoIcon from "./InfoIcon";

export default function PitchPage() {
	return (
		<section className="pt-[1.6875rem] pb-[3.75rem] pl-[4.3125rem] pr-[4.3125rem]">
			<div className="flex justify-between">
				<h1 className="">Pitch</h1>
				<BackButton />
			</div>

			<section className="pr-[5rem]">
				<p className="text-sm py-[4rem]">
					You invested your attention to STAKE this credit. Next you upload a
					plan for 110+ hours of research, revision, reflection to produce your
					10-minutes of polished audio or video. Remember to let the rubric
					guide your planning as it will determine your success as you MINT the
					final product.
				</p>
				<form>
					<div className="flex flex-col gap-2">
						<div className="inline-flex mb-[.4rem]">
							<label>Credit in Progress</label>
							<InfoIcon message="This the current credit you are working on." />
						</div>
						<textarea
							className="bg-[#E0E0E0] py-[1.25rem] w-[28.125rem] text-center justify-center rounded-md shadow-md resize-none focus:outline-none"
							readOnly
							rows={1}
						>
							BrandeisMedia: Podcast episode about foster care
						</textarea>

						<div className="inline-flex mt-[2.5rem] mb-[.4rem]">
							<label>Task</label>
							<InfoIcon message="No sentence provided." />
						</div>
						<button
							className="h-[2.4375rem] 
                  w-[10.125rem] 
                  rounded-full 
                  bg-[#805DBE] 
                  text-white 
                  text-xs 
                  font-bold 
                  hover:bg-violet-700"
						>
							Click here to upload
						</button>
						<p className="text-xs">
							Please make sure your attachment doesn’t exceed 25 MB.
						</p>

						<div className="inline-flex mt-[2.5rem] mb-[.4rem]">
							<label className="text-sm">
								Checkpoints <span className="text-sm">(Optional)</span>
							</label>
							<InfoIcon message="Add/Edit key milestones to keep you and your teacher on the same page." />
						</div>
						<button
							className="h-[2.4375rem] 
                  w-[10.125rem] 
                  rounded-full
                  border-[#805DBE]
                  border-2
                  text-black 
                  text-xs 
                  font-bold"
						>
							Add/Edit
						</button>

						<button
							className="mt-[2rem] h-[2.4375rem] 
                  w-[10.125rem] 
                  rounded-full 
                  bg-[#805DBE] 
                  text-white 
                  text-xs 
                  font-bold 
                  hover:bg-violet-700"
						>
							Submit
						</button>
					</div>
				</form>
			</section>
		</section>
	);
}
