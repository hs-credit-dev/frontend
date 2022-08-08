// imports
import React, { useState } from 'react';
// import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
// import setAuthToken from '../utilities/setAuthToken';
import logo from '../assets/svg/hsc-logo-no-text.svg';
import Footer from '../components/Footers/AccountCreationFooter';

import { users } from '../api';

import '../styles/login.styles.css'

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
        <div>
            <div className="login-container">
                <div className="logo-title-banner">
                    <img src={logo} className="logo-image" />
                    <a className="title">hs.credit</a>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" name="email" value={username} onChange={handleEmail} placeholder="Username" className="form-input" />
                    <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Password" className="form-input" />
                    <button type="submit" className="login-button">Log In</button>
                    <a className='forgot-password-link' href="">Forgot password?</a>
                </form>

                <button onClick={handleSignup} className="create-account-button">Create account</button>
            </div>
            <Footer />
        </div>

    )
}


export default Login;
