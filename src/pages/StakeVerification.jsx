import { Navigate, useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import { verify } from "api/credits";
import Spinner from "components/Spinner";

const StakeVerification = () => {
    const [searchParams] = useSearchParams();
    const [isVerifying, setIsVerifying] = useState(true);

    useEffect(() => {
        const creditId = searchParams.get('id');
        const verificationPassword = searchParams.get('password');

        verify(creditId, verificationPassword).then((res) => {
            setIsVerifying(false);
        });
    }, [isVerifying, searchParams]);

    return (
        <>
            {isVerifying ?
                <>
                    <div className="my-auto flex flex-col content-center items-center gap-4">
                        <h1 className="font-bold">Verifying...</h1>
                        <Spinner />
                    </div>
                </>
                : <>
                    <Navigate to="/" />
                </>}
        </>
    );
};

export default StakeVerification;
