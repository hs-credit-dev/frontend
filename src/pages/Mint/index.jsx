import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle,
    // faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";
import { IconButton } from '@material-tailwind/react';

import { userInSession } from "../../App";
import Header from '../../components/Header';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import { ReactComponent as BackArrow } from "./back_arrow.svg";

const Mint = () => {
    const [user] = useAtom(userInSession);

    const [title, setTitle] = useState("");
    const [field, setField] = useState("");
    const [subField, setSubField] = useState("");
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
                <IconButton
                    className='ml-auto bg-transparent shadow-none hover:shadow-none'
                    onClick={() => {
                        navigate('/dashboard');
                    }}><BackArrow /></IconButton>
            </div>
            <p>
                You did it! Upload your final work product of no more than 10 minutes and give your work a title here. Your teacher will receive an email to verify that they approve this work for submission and then it will be routed to our credit expert team for final evaluation. You will receive an email when the scores are in. Congratulations!
            </p>
            <form className="grid grid-cols-4 gap-16" onSubmit={handleSubmit}>
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
                    className="col-span-4 lg:col-span-2"
                />
                <span className='hidden lg:block col-span-2'></span>
                <Input
                    name="field"
                    type="select"
                    label={
                        <>
                            <p>Field of study</p>
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                className="cursor-pointer"
                            />
                        </>}
                    value={field}
                    onChange={(e) => {
                        setField(e.target.value);
                    }}
                    className="col-span-4 lg:col-span-1"
                />
                <span className='hidden lg:block col-span-3'></span>
                <Input
                    name="subfield"
                    type="select"
                    label={
                        <>
                            <p>Subfield</p>
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                className="cursor-pointer"
                            />
                        </>}
                    value={subField}
                    onChange={(e) => {
                        setSubField(e.target.value);
                    }}
                    className="col-span-4 lg:col-span-1"
                />
                <span className='hidden lg:block col-span-3'></span>
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