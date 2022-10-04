import { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import { useSearchParams } from "react-router-dom";

import CreditDisplay from './components/CreditDisplay';
import CloseButton from 'components/CloseButton';
import * as credits from 'api/credits';
import { userInSession } from 'App';
import { useAtom } from 'jotai';
import { isStudent } from 'util/api';
import Header from 'components/Header/index';
import Spinner from 'components/Spinner';


const CreditPage = () => {
    const [user] = useAtom(userInSession);
    const [searchParams] = useSearchParams();
    const [credit, setCredit] = useState(null);

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

    return <>
        <Header className="mb-auto" />
        <div className="bg-white rounded-3xl px-8 lg:px-16 py-8 m-8 flex flex-col items-center gap-4">
            <div className='flex items-center w-full'>
                <Typography
                    variant="h3">
                    Credit Detail
                </Typography>
                <CloseButton to="/dashboard" className="ml-auto" />
            </div>
            <CreditDisplay credit={credit} />
        </div>
    </>
};

export default CreditPage;