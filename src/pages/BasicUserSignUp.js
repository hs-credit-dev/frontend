import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import '../styles/signup.styles.css'

const REACT_APP_DATABASE_URL = "https://hs-credit-backend-test.herokuapp.com/api" //will need to be fixed later lol

const BasicUserSignUp = (props) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false)


    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }


    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }


    const handleSubmit = async (e) => {
        //needs to check for valid email
        //needs to check for no existing users
        e.preventDefault();
        if (password === confirmPassword && password.length >= 8) {

            console.log('=====> passwords match')
            const newUser = { username, firstName, lastName, email, password };


            await axios.post(`${REACT_APP_DATABASE_URL}/users/create`, newUser)
            // await axios.post(`http://localhost:8000/api/users/create`, newUser)


            // .catch(error => console.log('===> Error in Signup', error));
            setRedirect(true)
        } else {
            if (password !== confirmPassword) return alert('Passwords don\'t match');
            // console.log(DATABASE_URL)
            alert('Password needs to be at least 8 characters. Please try again.');
        }

    }
    if (redirect) return <Redirect to='/login' />

    return (
        <div className="signup-container">
            <h1 className="basic-signup">Sign up</h1>
            <form className="basic-signup-form" onSubmit={handleSubmit}>

                <div className='form-group'>
                    <input type="firstName" name="firstname" value={firstName} onChange={handleFirstName} className="form-control"></input>
                    <label htmlFor="first-name">(first name)</label>
                </div>

                <div className='form-group'>
                    <input type="lastName" name="lastname" value={lastName} onChange={handleLastName} className="form-control"></input>
                    <label htmlFor="last-name">(last name)</label>
                </div>

                <div className='form-group'>
                    <input type="text" value={username} onChange={handleUsername} className="form-control"></input>
                    <label>(username)</label>
                </div>

                <div className='form-group'>
                    <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"></input>
                    <label htmlFor="email">(email)</label>
                </div>

                <div className='form-group'>
                    <input type="password" value={password} onChange={handlePassword} className="form-control"></input>
                    <label htmlFor="password">(password)</label>
                </div>

                <div className='form-group'>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword} className="form-control"></input>
                    <label htmlFor="confirmPassword">(confirm password)</label>
                </div>

                <button value="submit" className="form-group-button">Sign Up!</button>

            </form>
        </div>
    )
}

export default BasicUserSignUp;

