import React, { ChangeEvent, LegacyRef } from 'react';

import { Button, Typography } from '../index';

interface FileUploadProps {
	fileInputRef: LegacyRef<HTMLInputElement>;
	handleUploadClick: () => void;
	handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	message?: string;
}

const FileUpload = ({
	handleUploadClick,
	handleFileChange,
	fileInputRef,
	className,
	message,
}: FileUploadProps) => {
	return (
		<div className='ml-4'>
			<Button type='button' onClick={handleUploadClick} className={className}>
				Click here to upload
			</Button>
			<input
				ref={fileInputRef}
				type='file'
				accept='image/*'
				className='hidden'
				onChange={handleFileChange}
			/>
			{message && (
				<Typography variant='p' className='text-red-500 text-xs'>
					{message}
				</Typography>
			)}
		</div>
	);
};

export default FileUpload;
