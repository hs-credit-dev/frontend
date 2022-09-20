import { useNavigate } from 'react-router-dom';
import { IconButton } from '@material-tailwind/react';

const CloseButton = ({ to, className }) => {
    const navigate = useNavigate();

    return (
        <>
            <IconButton
                className={`bg-transparent shadow-none hover:shadow-none ${className}`}
                onClick={() => {
                    navigate(to);
                }}>
                <span className='text-red-600 text-3xl font-semibold'>
                    X
                </span>
            </IconButton>
        </>
    );
};

export default CloseButton;