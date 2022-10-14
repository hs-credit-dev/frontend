import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import * as credits from 'api/credits';
import { userInSession } from 'App';
import Button from 'components/Button';
import Input from 'components/Input';
import StripedTable from 'components/StripedTable';
import { isStudent } from 'util/api';
import { is2XXResponse } from './../../../util/axios';

const Page3 = ({ credit }) => {
    const todayFormatted = new Date().toLocaleDateString('en-CA');

    const [user] = useAtom(userInSession);
    const [isAdding, setIsAdding] = useState(false);
    const [dueDate, setDueDate] = useState(todayFormatted);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const [checkpoints, setCheckpoints] = useState([]);

    const resetState = () => {
        setIsAdding(false);
        setDueDate(todayFormatted);
        setDescription('');
    }

    useEffect(() => {
        (async () => {
            const res = await credits.getCheckpoints(credit.id);
            if (!is2XXResponse(res.status)) return;
            setCheckpoints(res.data.data);
        })();
    }, [credit]);

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
                    ...checkpoints.sort((a, b) => a.dueDate - b.dueDate).map(c => [new Date(c.dueDate).toLocaleDateString('en-US'), c.description]),
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
                        />, <Button className='w-16' onClick={async () => {
                            await credits.addCheckpoint(credit.id, dueDate, description);
                            const res = await credits.getCheckpoints(credit.id);
                            if (is2XXResponse(res.status)) {
                                setCheckpoints(res.data.data);
                            }

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