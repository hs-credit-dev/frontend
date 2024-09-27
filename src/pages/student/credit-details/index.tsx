import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import Page from '../../../layout/Page';

const CreditDetails = () => {
	const router = useRouter();
	const { title, imageSrc, imageAlt } = router.query;

	return (
		<Page>
			<div className='bg-white rounded-[20px] flex flex-col p-4 md:p-8 lg:p-10'>
				<section className='flex flex-col md:flex-row justify-between items-center md:items-start box-border'>
					<Typography className='font-montserrat text-[24px] md:text-[32px] font-bold leading-[29px] md:leading-[39.01px] text-left'>
						Credit Detail
					</Typography>
					<Button className='bg-[#805DBE] w-[82px] h-[39px] md:w-[82px] md:h-[39px] rounded-full text-white mt-4 md:mt-0'>
						Back
					</Button>
				</section>
				<section className='w-full flex flex-col items-center justify-center pt-10 px-4 md:px-0'>
					{imageSrc && imageAlt && (
						<Image
							src={imageSrc as string}
							alt={imageAlt as string}
							width={185}
							height={185}
							className='rounded-lg w-[150px] h-[150px] md:w-[185px] md:h-[185px]'
						/>
					)}
					<div className='mt-5 text-left pb-5'>
						<Typography className='text-lg md:text-xl'>
							<span className='font-bold'>Credit:</span> {title}
						</Typography>
						<Typography className='mt-2 text-md md:text-lg'>
							<span className='font-bold'>Credit Partner:</span> smth
						</Typography>
					</div>
				</section>
				<section className='flex flex-col md:flex-row justify-between px-4 md:px-0 pb-10 space-y-5 md:space-y-0'>
					<div className='w-full md:w-[300px] ml-10'>
						<div className='flex flex-row py-2 items-center justify-center'>
							<Typography className='font-montserrat text-[16px] md:text-[20px] font-bold leading-[20px] md:leading-[24.38px] text-center'>
								Stake
							</Typography>
							<Image
								src='/images/icons/help.png'
								alt='help icon'
								width={20}
								height={20}
								className='ml-2 w-[20px] h-[20px] md:w-[24px] md:h-[24px]'
							/>
						</div>
						<p className='font-montserrat text-[12px] md:text-[14px] italic font-normal leading-[15px] md:leading-[17.07px] text-center pt-5 max-w-[250px] md:max-w-[300px]'>
							Visit this Google Doc and select three articles, two video topics, and one
							nonfiction text from those listed. Read your selections and take notes or
							annotate to present to your teacher for them to certify that you are
							prepared to produce youth media on this topic.
						</p>
					</div>
					<div className='hidden md:block bg-black h-[200px] w-[2px]'></div>
					<div className='w-full md:w-[300px]'>
						<div className='flex flex-row py-2 items-center justify-center'>
							<Typography className='font-montserrat text-[16px] md:text-[20px] font-bold leading-[20px] md:leading-[24.38px] text-center'>
								Pitch
							</Typography>
							<Image
								src='/images/icons/help.png'
								alt='help icon'
								width={20}
								height={20}
								className='ml-2 w-[20px] h-[20px] md:w-[24px] md:h-[24px]'
							/>
						</div>
						<p className='font-montserrat text-[12px] md:text-[14px] italic font-normal leading-[15px] md:leading-[17.07px] text-center pt-5'>
							Here is what would be required for Pitch phase.
						</p>
					</div>
					<div className='hidden md:block bg-black h-[200px] w-[2px]'></div>
					<div className='w-full md:w-[300px] mr-10'>
						<div className='flex flex-row py-2 items-center justify-center'>
							<Typography className='font-montserrat text-[16px] md:text-[20px] font-bold leading-[20px] md:leading-[24.38px] text-center'>
								Mint
							</Typography>
							<Image
								src='/images/icons/help.png'
								alt='help icon'
								width={20}
								height={20}
								className='ml-2 w-[20px] h-[20px] md:w-[24px] md:h-[24px]'
							/>
						</div>
						<p className='font-montserrat text-[12px] md:text-[14px] italic font-normal leading-[15px] md:leading-[17.07px] text-center pt-5'>
							Here is what would be required for Mint phase.
						</p>
					</div>
				</section>
				<section className='w-full flex items-center justify-center pt-5	'>
					<Button className='bg-[#805DBE] w-[180px] md:w-[203px] h-[45px] md:h-[52px] rounded-full text-white'>
						Start Credit
					</Button>
				</section>
			</div>
		</Page>
	);
};

export default CreditDetails;
