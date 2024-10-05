import React, { useRef } from 'react';
import Image from 'next/image';

import Button from '../../../components/Button';

type AudioCellProps = {
	audioUrl: string;
};

const AudioCell = ({ audioUrl }: AudioCellProps) => {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const handlePlay = () => {
		if (audioRef.current) {
			audioRef.current.play().catch((error) => {
				console.error('Failed to play audio:', error);
			});
		}
	};

	return (
		<div className='flex items-center space-x-2'>
			<audio ref={audioRef} src={audioUrl} className='hidden' />
			<Button onClick={handlePlay} className='focus:outline-none'>
				<Image src='/images/icons/audio.png' alt='audio icon' width={25} height={25} />
			</Button>
		</div>
	);
};

export default AudioCell;
