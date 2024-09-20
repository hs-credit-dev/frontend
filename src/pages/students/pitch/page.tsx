import BackButton from './BackButton';
import InfoIcon from './InfoIcon';
import PitchUploadForm from './PitchUploadForm';

export default function PitchPage() {
	return (
		<section className='pt-[1.6875rem] pb-[3.75rem] pl-[4.3125rem] pr-[4.3125rem]'>
			<div className='flex justify-between'>
				<h1 className=''>Pitch</h1>
				<BackButton />
			</div>

			<p className='text-sm py-[4rem] pr-10'>
				You invested your attention to STAKE this credit. Next you upload a plan for 110+
				hours of research, revision, reflection to produce your 10-minutes of polished
				audio or video. Remember to let the rubric guide your planning as it will
				determine your success as you MINT the final product.
			</p>

			<div className='gap-2'>
				<div className='flex flex-row mb-[.4rem]'>
					<label>Credit in Progress</label>
					<InfoIcon message='This the current credit you are working on.' />
				</div>
				<textarea
					className='bg-[#E0E0E0] py-4 px-4 text-center justify-center rounded-md shadow-md resize-none focus:outline-none'
					readOnly
					rows={1}
					cols={45}
				>
					BrandeisMedia: Podcast episode about foster care
				</textarea>
			</div>
			<PitchUploadForm />
		</section>
	);
}
