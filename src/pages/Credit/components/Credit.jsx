import CreditIcon from '../assets/credit.svg';
import TransparentButton from './TransparentButton';
import { Typography } from '@material-tailwind/react';

// Dark gray bold
const B = ({ children }) => {
    return <b className='text-gray-700'>{children}</b>;
}

const Credit = ({ credit }) => {
    return <div className='flex flex-col items-center gap-8'>
        <img src={CreditIcon} alt="icon" />
        <div className='flex flex-col md:flex-row flex-wrap gap-4 text-gray-600'>
            <span><B>Title:</B> {credit.title}</span>
            <span className='hidden md:block'>•</span>
            <span><B>Discipline:</B> {credit.discipline}</span>
            <span className='hidden md:block'>•</span>
            <span><B>Rubric:</B> {credit.rubric}</span>
            <span className='hidden md:block'>•</span>
            <span><B>Status:</B> {credit.status}</span>
            <span className='hidden md:block'>•</span>
            <span><B>Teacher's Email:</B> {credit.teacherEmail}</span>
        </div>
        <div className='flex flex-col xl:flex-row gap-8'>
            <div className='flex flex-col items-center w-64 text-center gap-8'>
                <Typography variant={"h5"}>Stake</Typography>
                <p>
                    At hs.credit, high stakes work starts with you, the student, putting something at stake.
                </p>
                <div className='mt-auto flex flex-col gap-2'>
                    <TransparentButton>View</TransparentButton>
                    <TransparentButton>Edit</TransparentButton>
                    <Typography className='italic text-gray-700' variant="small">Submitted {new Date(credit.dateStaked).toLocaleDateString("en-US")}</Typography>
                </div>
            </div>
            <div className='border-l-2 border-l-black hidden lg:block' />
            <div className='flex flex-col items-center w-64 text-center gap-8'>
                <Typography variant={"h5"}>Pitch</Typography>
                <p>
                    This is where you plan your work by uploading an audio/video task representing at least 110 hours of project-based work. You select the rubric we will use to evaluate your final upload.
                </p>
                <div className='mt-auto flex flex-col gap-2'>
                    <TransparentButton>View</TransparentButton>
                    <TransparentButton>Edit</TransparentButton>
                    <Typography className='italic text-gray-700' variant="small">Submitted {new Date(credit.datePitched).toLocaleDateString("en-US")}</Typography>
                </div>
            </div>
            <div className='border-l-2 border-l-black hidden lg:block' />
            <div className='flex flex-col items-center w-64 text-center gap-8'>
                <Typography variant={"h5"}>Mint</Typography>
                <p>
                    Upload your polished 10 minutes of audio or video and once your teacher signs off, three credit experts will evaluate the asset before an NFT is minted onto your transcript.
                </p>
                <div className='mt-auto flex flex-col gap-2'>
                    <TransparentButton>Start</TransparentButton>
                    <TransparentButton className='invisible'>Edit</TransparentButton>
                    <Typography className='italic text-gray-700 invisible' variant="small">Submitted {new Date(credit.dateMinted).toLocaleDateString("en-US")}</Typography>
                </div>
            </div>
        </div>
    </div>
};

export default Credit;