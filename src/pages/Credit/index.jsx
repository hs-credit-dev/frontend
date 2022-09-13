import { useNavigate } from 'react-router-dom';
import { Typography, IconButton } from '@material-tailwind/react';

import Header from './../../components/Header/index';
import Credit from './components/Credit';
import CreditIcon from './assets/credit.svg';

import { ReactComponent as BackArrow } from "./assets/back_arrow.svg";


const CreditPage = ({ credit }) => {
    const navigate = useNavigate();

    return <>
        <Header className="mb-auto" />
        <div className="bg-white rounded-3xl px-8 lg:px-16 py-8 m-8 flex flex-col items-center gap-4">
            <div className='flex items-center w-full'>
                <Typography
                    variant="h3">
                    Credit Detail
                </Typography>
                <IconButton
                    className='ml-auto bg-transparent shadow-none hover:shadow-none'
                    onClick={() => {
                        navigate('/dashboard');
                    }}><BackArrow /></IconButton>
            </div>
            <Credit credit={{
                icon: CreditIcon,
                title: 'Climate Change',
                discipline: 'Life Science',
                rubric: 'hs.credit',
                Status: 'Pitch - Pending',
                teacherEmail: 'nzeimer@hs.credit',
                dateStaked: new Date(),
                datePitched: new Date(),
                dateMinted: undefined,
            }} />
        </div>
    </>
};

export default CreditPage;