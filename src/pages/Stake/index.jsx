import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";
import { userInSession } from "../../App";
import * as credits from 'api/credits';
import { emailRegex } from 'util/regex';
import { isStudent } from 'util/api';
import disciplines from 'data/disciplines';
import Header from 'components/Header';
import Input from 'components/Input';
import SubmitButton from 'components/SubmitButton';
import CloseButton from 'components/CloseButton';

const Stake = () => {
    const [user] = useAtom(userInSession);

    const [searchParams] = useSearchParams();

    const [discipline, setDiscipline] = useState(Object.keys(disciplines)[0]);
    const [contentStaked, setContentStaked] = useState("");
    const [teacherEmail, setTeacherEmail] = useState("");
    const [warning, setWarning] = useState("");

    const navigate = useNavigate();

    const isValidEmail = () => {
        return emailRegex.test(teacherEmail);
    };


    useEffect(() => {
        if (!user) {
            return navigate('/');
        }
    }, [user, navigate]);

    useEffect(() => {
        (async () => {
            const id = searchParams.get('id');
            if (!id) return;

            if (!isStudent(user)) return;

            const credit = await credits.get(user.studentId, id);
            setDiscipline(credit.discipline);
            setContentStaked(credit.contentStaked);
            setTeacherEmail(credit.teacherEmail);
        })();
    }, [searchParams, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (contentStaked.trim() === '') return setWarning("Specify content staked")
        if (!isValidEmail()) return setWarning("Email is not valid");
        if (!isStudent(user)) return;

        const id = searchParams.get('id');

        if (!id) {
            await credits.stake(discipline, contentStaked, teacherEmail);
        } else {
            await credits.update(id, { discipline, contentStaked, teacherEmail, });
        }


        navigate('/dashboard');
    }

    return <>
        <Header />
        <div className="bg-white rounded-3xl px-8 lg:px-16 py-8 m-8 flex flex-col gap-4">
            <div className='flex items-center'>
                <Typography
                    variant="h3">
                    Stake
                </Typography>
                <CloseButton to='/dashboard' className='ml-auto' />
            </div>
            <p>
                Here you show evidence that you invested your attention to “geek out” on a topic. List the discipline from the available options and then share a list of sources from which you have notes that will inform your podcast or video project.
            </p>
            <form className="grid grid-cols-2 gap-16" onSubmit={handleSubmit}>
                <Input
                    name="discipline"
                    type="select"
                    label={
                        <>
                            <p>Discipline</p>
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                className="cursor-pointer"
                            />
                        </>}
                    value={discipline}
                    onChange={(e) => {
                        setDiscipline(e.target.value);
                    }}
                    className="col-span-2 md:col-span-1"
                >
                    {Object.entries(disciplines).map(([dKey, dValue], i) => <option value={dKey} key={i}>{dValue.name}</option>)}
                </Input>
                <Input
                    name="content-staked"
                    type="textarea"
                    label={
                        <>
                            <p>Content Staked</p>
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                className="cursor-pointer"
                            />
                        </>}
                    value={contentStaked}
                    onChange={(e) => {
                        setContentStaked(e.target.value);
                    }}
                    className="h-52 col-span-2"
                />
                <Input
                    name="teacher-email"
                    label={
                        <>
                            <p>Teacher's Email</p>
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                className="cursor-pointer"
                            />
                            {isValidEmail() && (
                                <>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </>
                            )}
                        </>}
                    value={teacherEmail}
                    small="Teacher will have access to your full name. Your teacher will meet with you to review your notes before approving your STAKE."
                    onChange={(e) => {
                        setTeacherEmail(e.target.value);
                    }}
                    className="col-span-2 md:col-span-1"
                />
                <SubmitButton name="Submit" className="col-span-2 mt-24 lg:mt-12" />
                {warning && <p className="text-red-600 font-bold">{warning}</p>}
            </form>
        </div>
    </>;
}

export default Stake;