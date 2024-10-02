import React from 'react';
import Image from 'next/image';

import Button from '../../../components/Button';

type NoteCellProps = {
	notes: string;
};

const NoteCell = ({ notes }: NoteCellProps) => {
	if (!notes || notes.trim() === '') return null;

	const handleClick = () => {
		alert(`Notes: ${notes}`);
	};

	return (
		<div className='flex items-center space-x-2'>
			<Button onClick={handleClick} className='focus:outline-none'>
				<Image src='/images/icons/note.png' alt='note-icon' width={25} height={25} />
			</Button>
		</div>
	);
};

export default NoteCell;
