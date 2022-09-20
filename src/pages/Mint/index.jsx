import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle,
    // faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";

import { userInSession } from "../../App";
import Header from '../../components/Header';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import CloseButton from './../../components/CloseButton';

const Mint = () => {
    const [user] = useAtom(userInSession);

    const [title, setTitle] = useState("");
    const [abstract, setAbstract] = useState("");
    const [warning,] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return navigate('/');
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }

    return <>
        <Header />
        <div className="bg-white rounded-3xl px-8 lg:px-16 py-8 m-8 flex flex-col gap-4">
            <div className='flex items-center'>
                <p
                    className='font-bold text-4xl'>
                    Mint
                </p>
                <CloseButton to='/dashboard' className='ml-auto' />
            </div>
            <p>
                You did it! Upload your final work product of no more than 10 minutes and give your work a title here. Your teacher will receive an email to verify that they approve this work for submission and then it will be routed to our credit expert team for final evaluation. You will receive an email when the scores are in. Congratulations!
            </p>
            <form className="grid grid-cols-3 gap-16" onSubmit={handleSubmit}>
                <Input
                    name="title"
                    label={
                        <>
                            <p>Title</p>
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                className="cursor-pointer"
                            />
                        </>}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    className="col-span-2 lg:col-span-2"
                />
                <span className='hidden lg:block col-span-1'></span>
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
                    value={abstract}
                    onChange={(e) => {
                        setAbstract(e.target.value);
                    }}
                    className="h-52 col-span-3"
                />
                <SubmitButton name="Click here to upload" className="col-span-4" />
            </form>
            <p className="text-sm text-gray-900 font-semibold italic col-span-4">
                Please make sure your attachment doesn’t exceed 25 MB.
            </p>
            {warning && <p className="text-red-600 font-bold">{warning}</p>}
        </div>
    </>;
}

export default Mint;