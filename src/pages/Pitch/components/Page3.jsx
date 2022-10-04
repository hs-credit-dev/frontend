import { useState } from 'react';
import { useAtom } from 'jotai';
import { Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import * as credits from 'api/credits';
import { userInSession } from 'App';
import Button from 'components/Button';
import Input from 'components/Input';
import StripedTable from 'components/StripedTable';
import { isStudent } from 'util/api';

const Page3 = ({ credit }) => {
    const todayFormatted = new Date().toLocaleDateString('en-CA');

    const [user] = useAtom(userInSession);
    const [isAdding, setIsAdding] = useState(false);
    const [dueDate, setDueDate] = useState(todayFormatted);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const resetState = () => {
        setIsAdding(false);
        setDueDate(todayFormatted);
        setDescription('');
    }

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
            ]} data={
                [
                    ...credit.checkpoints.sort((a, b) => a.dueDate - b.dueDate).map(c => [c.dueDate, c.description]),
                    isAdding ?
                        [<Input
                            type="date"
                            name="due-date"
                            value={dueDate}
                            onChange={(e) => {
                                setDueDate(e.target.value);
                            }}
                            min={todayFormatted}
                        />, <Input
                            type="textarea"
                            name="description"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />, <Button className='w-16' onClick={() => {
                            resetState();
                        }}>Add</Button>]
                        :
                        [<></>, <p className="text-hsblue add-checkpoint">Add Checkpoint</p>],
                ]
            }
                className='w-full'
                trParams={{
                    className: "hover:bg-hsblue hover:cursor-pointer transition-colors",
                    onClick: (e) => {
                        if (e.target.closest('tr').querySelector('.add-checkpoint')) {
                            setIsAdding(true);
                        }
                        else {
                            // TODO
                        }
                    },
                }}
            />
            <Button onClick={async () => {
                if (isStudent(user)) {
                    await credits.pitch(credit.id);
                }

                navigate('/dashboard');
            }
            }>Submit</Button>
        </>
    );
};

export default Page3;