import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Typography, Breadcrumbs } from '@material-tailwind/react';
import { useAtom } from "jotai";

import { userInSession } from "../../App";


import { isStudent } from 'util/api';
import * as credits from 'api/credits';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import CloseButton from 'components/CloseButton';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const Pitch = () => {
    const [user] = useAtom(userInSession);

    const [credit, setCredit] = useState(null);
    const pageState = useState(0);
    const [page, setPage] = pageState;

    const [searchParams] = useSearchParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return navigate('/');
        }
    }, [user, navigate]);

    useEffect(() => {
        (async () => {
            if (!isStudent(user)) {
                return;
            }

            const id = searchParams.get('id');
            const res = await credits.get(id);
            const credit = res.data.data;
            setCredit(credit);

        })();
    }, [user, searchParams]);

    if (!credit) {
        return <>
            <div className="flex h-full justify-center items-center">
                <Spinner />
            </div>
        </>
    }

    return (
        <>
            <Header />
            <div className="bg-white rounded-3xl px-8 lg:px-16 py-8 m-8 flex flex-col items-start gap-12">
                <div className='flex items-center self-stretch'>
                    <Typography
                        variant="h3">
                        Pitch
                    </Typography>
                    <div className='ml-auto flex items-center gap-8'>
                        <Breadcrumbs separator=" ">
                            {[...Array(3).keys()].map(i =>
                                <div className='flex items-center gap-2' key={i}
                                    onClick={() => {
                                        setPage(i);
                                    }}>
                                    <span className={`${i <= page ? 'bg-green-400' : 'bg-gray-400'} rounded-full w-8 h-8 text-transparent transition-colors`}>{"*"}</span>
                                    Step {i + 1}
                                </div>)}
                        </Breadcrumbs>
                        <CloseButton to='/dashboard' />
                    </div>
                </div>
                {
                    (() => {
                        const [page] = pageState;

                        switch (page) {
                            case 0:
                                return <Page1 pageState={pageState} credit={credit} />;
                            case 1:
                                return <Page2 pageState={pageState} credit={credit} />;
                            case 2:
                                return <Page3 pageState={pageState} credit={credit} />;
                            default:
                                return <></>;
                        }
                    })()
                }
            </div>
        </>
    );
};

export default Pitch;