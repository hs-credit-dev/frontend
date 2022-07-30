// imports
import React, { useState } from 'react';
import axios from 'axios';
// import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
// import setAuthToken from '../utilities/setAuthToken';
import logo from '../assets/images/hscLogo21.png';
import Footer from '../components/Footers/AccountCreationFooter';

import '../styles/login.styles.css'

// storing database url in environment
const { REACT_APP_DATABASE_URL } = process.env

const Login = (props) => {

    // state variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    // set email based on event
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    // set password based on event
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // handle submit function
    const handleSubmit = async (e) => {
        console.log(`>>>> inside handleSubmit func`)
        e.preventDefault()
        const userData = { email, password }

        try 
        {
            const response = await axios.post(`${REACT_APP_DATABASE_URL}/users/login`, userData)
            console.log(`>>>>inside handleSubmit reponse block`)
            const token = await response.data
            await localStorage.setItem('jwtToken', token)
            // setAuthToken(token)
            // const decoded = jwt_decode(token)
            // props.nowCurrentUser(decoded)
            setRedirect(true) 
        }
        catch(error)
        {
            console.log(`>>>> error in handleSubmit func: ${error}`)
            alert('incorrect email or password! please try again')
        }

    }

    // if there is user logged in, redirect them home
    // if (props.user) return <Redirect to="/home" />

    return (
        <div>
            <div className="login-container">
                <div className="logo-title-banner">
                    <img src={logo} className="logo-image"/>
                    <a className="title">hs.credit</a>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" name="email" value={email} onChange={handleEmail} placeholder="Username" className="form-input" />
                    <input type="password" name="password" value={password} onChange={handlePassword} placeholder="Password" className="form-input"/>
                    <button type="submit" className="login-button">Log In</button>
                    <a className='forgot-password-link' href="">Forgot password?</a>
                </form>

                <button href="www.google.com" className="create-account-button">Create account</button>
            </div>
            <Footer />
        </div>

    )
}


export default Login;
