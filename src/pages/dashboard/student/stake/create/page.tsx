// 'use client';
//
// import React, { useMemo, useRef, useState } from 'react';
// import JoditEditor from 'jodit-react';
// import Link from 'next/link';
//
// import InfoIcon from '../../pitch/InfoIcon';
//
// export default function Page() {
// 	const contentEditor = useRef(null);
// 	const stakeEditor = useRef(null);
// 	const [content, setContent] = useState('');
// 	const [stake, setStake] = useState('');
// 	const config = {
// 		showCharsCounter: false,
// 		showWordsCounter: false,
// 		showXPathInStatusbar: false,
// 		editorClassName: 'textarea',
// 		disablePlugins: 'add-new-line',
// 		minHeight: '13rem',
// 		minWidth: 'none',
// 		buttons:
// 			'bold,italic,underline,strikethrough,ul,ol,paragraph,superscript,subscript,cut,copy,paste,selectall,copyformat,link,undo,redo,find,source',
// 	};
//
// 	const darkConfig = JSON.parse(JSON.stringify(config));
// 	darkConfig.editorClassName = `${darkConfig.editorClassName} bg-[#E0E0E0]`;
// 	darkConfig.minHeight = '8.1875rem';
// 	return (
// 		<div className="pt-[1.75rem] pb-[2.125rem] pl-[4.3125rem] pr-14">
// 			<div className="flex justify-between items-center">
// 				<h1>Stake</h1>
// 				<div>
// 					<Link
// 						href="/students/credit-details"
// 						className="btn text-[0.75rem] px-[1.6875rem] py-3"
// 					>
// 						Back
// 					</Link>
// 				</div>
// 			</div>
// 			<div>
// 				<section className="font-medium pt-[2.0625rem] pb-[2.1875rem]">
// 					<p>
// 						Here you show evidence that you invested your attention to “geek out” on a
// 						topic. List the discipline from the available options and then share a list of
// 						sources from which you have notes that will inform your podcast or video
// 						project.
// 					</p>
// 				</section>
// 				<section className="px-[0.3125rem]">
// 					<form>
// 						<fieldset className="flex flex-col gap-y-[1.9375rem]">
// 							<div className="flex gap-x-6">
// 								<div className="flex flex-col gap-y-[0.625rem] w-[37.427386%]">
// 									<div className="flex gap-x-[0.4375rem]">
// 										<label htmlFor="credit">Credit</label>
// 										<InfoIcon message="Here is the selected credit." />
// 									</div>
// 									<input
// 										type="text"
// 										id="credit"
// 										name="credit"
// 										className="w-full bg-[#E0E0E0]"
// 									/>
// 								</div>
// 								<div className="flex flex-col gap-y-[0.625rem] w-[53.360996%]">
// 									<div className="flex gap-x-[0.4375rem]">
// 										<label htmlFor="email">Teacher's Email</label>
// 										<InfoIcon message="Here is the teacher's email" />
// 									</div>
// 									<input type="email" id="email" name="email" className="w-full" />
// 								</div>
// 							</div>
// 							<div className="flex flex-col  gap-y-[0.625rem]">
// 								<div className="flex gap-x-[0.4375rem]">
// 									<label htmlFor="content">Content to Stake</label>
// 									<InfoIcon message="Provided content to stake from studio" />
// 								</div>
// 								<JoditEditor
// 									ref={contentEditor}
// 									value={content}
// 									className="content"
// 									onBlur={(newContent) => setContent(newContent)}
// 									config={darkConfig}
// 								/>
// 							</div>
// 							<div className="flex flex-col gap-y-[1.0625rem]">
// 								<div className="flex flex-col gap-y-[0.625rem]">
// 									<div className="flex gap-x-[0.4375rem]">
// 										<label htmlFor="stakeContent">Staked Content</label>
// 										<InfoIcon message="Write all of your staked content here." />
// 									</div>
// 									<JoditEditor
// 										ref={stakeEditor}
// 										value={stake}
// 										className="stake"
// 										onBlur={(newContent) => setStake(newContent)}
// 										config={config}
// 									/>
// 								</div>
// 								<div className="flex">
// 									<button type="submit" className="btn py-4 px-[4.625rem]">
// 										Submit
// 									</button>
// 								</div>
// 							</div>
// 						</fieldset>
// 					</form>
// 				</section>
// 			</div>
// 		</div>
// 	);
// }

const StakePage = () => <div>Hello</div>;

export default StakePage;
