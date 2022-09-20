import { Typography } from '@material-tailwind/react';
import StripedTable from './../../../components/StripedTable';
import Button from './../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { credits, students } from '../../../api_fake';
import { useAtom } from 'jotai';
import { userInSession } from './../../../App';

const Page3 = ({ credit }) => {
    const [user] = useAtom(userInSession);
    const navigate = useNavigate();

    return (
        <>
            <Typography
                variant="h3">
                Checkpoints
            </Typography>
            <StripedTable headers={[
                'Due Date',
                'Point Description',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
            ]} data={
                [
                    ...credit.checkpoints.map(c => [c.dueDate, c.description]),
                    [<></>, <p className="text-hsblue">Click to Initiate Credit</p>]
                ]
            }
                className='w-full'
            />
            <Button onClick={async () => {
                if (students.isStudent(user)) {
                    await credits.pitch(user.studentId, credit.id);
                }

                navigate('/dashboard');
            }
            }>Submit</Button>
        </>
    );
};

export default Page3;