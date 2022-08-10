import React, { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai';

import { users } from '../api';
import { userInSession } from '../App';

import Logo from './../components/Logo';
import Input from './../components/Input';
import Button from './../components/Button';
import SubmitButton from '../components/SubmitButton';
import Footer from '../components/Footers/AccountCreationFooter';


const Login = (props) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [_userInSession, setUserInSession] = useAtom(userInSession);

    const form = useRef(null);

    // handle submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) return;

        try {
            const res = await users.login(username, password);
            const user = res.data.data.user;
            setUserInSession(user);
            navigate('/', { replace: true });
        } catch (err) {

        }
    }

    return (
        <>
            {_userInSession && <Navigate replace to='/' />}
            <div className='flex flex-col align-middle content-center h-full py-32'>
                <div className='flex flex-col space-y-6 w-full'>
                    <Logo className='mx-auto mb-4' size='xl' />
                    <form ref={form} className='flex flex-col space-y-6' onSubmit={handleSubmit}>
                        <Input name='username' autoComplete='username' placeholder='Username' className='mx-auto text-center w-4/5 sm:w-full max-w-lg' onChange={(e) => { setUsername(e.target.value); }} />
                        <Input type='password' autoComplete='current-password' name='password' placeholder='Password' className='mx-auto text-center w-4/5 sm:w-full max-w-lg' onChange={(e) => { setPassword(e.target.value); }} />
                        <SubmitButton name="Log In" className='mx-auto' />
                    </form>
                    <a className='mx-auto font-bold text-blue-700' href="">Forgot password?</a>
                </div>
                <Button type='submit' className='mx-auto mt-auto block'>Create account</Button>
            </div>
            <Footer />
        </>
    );
};

export default Login;
