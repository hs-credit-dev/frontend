// imports
import React, { useState } from 'react';
// import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footers/AccountCreationFooter';

import { users } from '../api';

import Logo from './../components/Logo';
import Input from './../components/Input';
import Button from './../components/Button';

const Login = (props) => {

    // state variables
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();

    // set email based on event
    const handleEmail = (e) => {
        setUsername(e.target.value);
    }

    // set password based on event
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSignup = () => {
        navigate("/basic-signup");
    }

    // handle submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        users.login(username, password);
    }

    // if there is user logged in, redirect them home
    // if (props.user) return <Redirect to="/home" />

    return (
        <>
            <div className='flex flex-col align-middle content-center h-full py-32'>
                <div className='flex flex-col space-y-6 w-full'>
                    <Logo className='mx-auto mb-4' size='xl' />
                    <form className='flex flex-col space-y-6'>
                        <Input name='username' placeholder='Username' className='mx-auto text-center w-4/5 sm:w-full max-w-lg' />
                        <Input name='password' placeholder='Password' className='mx-auto text-center w-4/5 sm:w-full max-w-lg' />
                    </form>
                    <Button className='mx-auto'>Log In</Button>
                    <a className='mx-auto font-bold text-blue-700' href="">Forgot password?</a>
                </div>
                <Button className='mx-auto mt-auto block'>Create account</Button>
            </div>
            <Footer />
        </>
    );
};


export default Login;
