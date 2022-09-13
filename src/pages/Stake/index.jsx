import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle,
    // faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";
import { IconButton } from '@material-tailwind/react';

import { userInSession } from "../../App";
import { credits } from "../../api_fake";
import Header from '../../components/Header';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import { ReactComponent as BackArrow } from "./back_arrow.svg";

const Stake = () => {
    const [user] = useAtom(userInSession);

    const [discipline, setDiscipline] = useState("");
    const [contentStaked, setContentStaked] = useState("");
    const [teacherEmail, setTeacherEmail] = useState("");
    const [warning,] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return navigate('/');
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        credits.stake(user.studentId, '', discipline, 'hs.credit', teacherEmail)

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
                <IconButton
                    className='ml-auto bg-transparent shadow-none hover:shadow-none'
                    onClick={() => {
                        navigate('/dashboard');
                    }}><BackArrow /></IconButton>
            </div>
            <p>
                Here you show evidence that you invested your attention to “geek out” on a topic. List the discipline from the available options and then share a list of sources from which you have notes that will inform your podcast or video project.
            </p>
            <form className="grid grid-cols-2 gap-16" onSubmit={handleSubmit}>
                <Input
                    name="discipline"
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
                />
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