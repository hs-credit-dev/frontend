import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import '../styles/basic-user-signup.styles.css'
import '../components/Headers/SignUpHeader'
import SignUpHeader from '../components/Headers/SignUpHeader';
import AccountCreationFooter from '../components/Footers/AccountCreationFooter';

const { REACT_APP_DATABASE_URL } = process.env

const BasicUserSignUp = (props) => {
    const [type, setType] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmedEmail, setConfirmedEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailCheckShow, setEmailCheckShow] = useState(false);
    const [passwordCheckShow, setPasswordCheckShow] = useState(false);
    const [confirmAge, setConfirmAge] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleType = (e) => {
        setType(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleConfirmEmail = (e) => {
        setConfirmedEmail(e.target.value);
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

        if (email === confirmedEmail && email !== "") {
            setEmailCheckShow(true);

            if (password === confirmPassword && password.length >= 8) {
                setPasswordCheckShow(true);

                if (confirmAge) {
                    const newUser = { type, username, email, password };
                
                    // await axios.post(`${REACT_APP_DATABASE_URL}/users/create`, newUser);
                    // await axios.post(`http://localhost:8000/api/users/create`, newUser)
        
                    // .catch(error => console.log('===> Error in Signup', error));
                    setRedirect(true);
                } else {
                    return alert('Please confirm your age before continue.')
                }
            } else {
                setPasswordCheckShow(false);
                if (password !== confirmPassword) return alert('Passwords don\'t match');
                // console.log(DATABASE_URL)
                alert('Password needs to be at least 8 characters. Please try again.');
            }
        
        } else {
            setEmailCheckShow(false);
            return alert('Email don\'t match');
        }
    }
    if (redirect) return <Navigate to={'/' + type} />

    return (
        <div className="basic-signup-container">
            <SignUpHeader/>
            <form className="basic-signup-form" onSubmit={handleSubmit}>
                <div className='basic-form-group'>
                    <label>Account Type</label>
                    <select className='type-dropdown' value={type} onChange={handleType}>
                        <option value="basic-signup">Select</option>
                        <option value="student-signup">Students</option>
                        <option value="teacher-signUp">Teacher</option>
                    </select>
                </div>

                <div className='basic-form-group'>
                    <div className='title-group'>
                        <label>Username</label>
                        <FontAwesomeIcon icon={faQuestionCircle} className='help-icon'/>
                    </div>
                    <input type="text" value={username} onChange={handleUsername} className="basic-form-control"></input>
                    <p className='username-note'>Please do not use your real name.</p>
                </div>

                <div className='input-group'>
                    <div className='basic-form-group inline-basic'>
                        <div className='title-group'>
                            <label htmlFor="email">Email Address</label>
                            {emailCheckShow && <FontAwesomeIcon icon={faCheckCircle} value={emailCheckShow} className='check-icon'/>}
                        </div>
                        <input type="email" name="email" value={email} onChange={handleEmail} className="basic-form-control"></input>
                    </div>
                    <div className='basic-form-group inline-basic'>
                        <div className='title-group'>
                            <label htmlFor="email-confirm">Confirm Email Address</label>
                            {emailCheckShow && <FontAwesomeIcon icon={faCheckCircle} value={emailCheckShow} className='check-icon'/>}
                        </div>
                        <input type="email" name="email" value={confirmedEmail} onChange={handleConfirmEmail} className="basic-form-control"></input>
                    </div>
                </div>
                
                <div className='input-group'>
                    <div className='basic-form-group inline-basic'>
                        <div className='title-group'>
                            <label htmlFor="password">Password</label>
                            <FontAwesomeIcon icon={faQuestionCircle} className='help-icon'/>
                            {passwordCheckShow && <FontAwesomeIcon icon={faCheckCircle} value={passwordCheckShow} className='check-icon'/>}
                        </div>
                        <input type="password" value={password} onChange={handlePassword} className="basic-form-control"></input>
                    </div>
                    <div className='basic-form-group inline-basic'>
                        <div className='title-group'>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            {passwordCheckShow && <FontAwesomeIcon icon={faCheckCircle} value={passwordCheckShow} className='check-icon'/>}
                        </div>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPassword} className="basic-form-control"></input>
                    </div>
                </div>
                

                <div basic-form-group>
                    <label className='confirmation'>
                        <input type="checkbox" onClick={() => setConfirmAge(!confirmAge)} className='checkbox'/>
                        By checking this box, you are confirming that you are at least 13 years of age or older.
                    </label>
                </div>
                <button value="submit" className="next-button">Next</button>

            </form>

            <AccountCreationFooter />
        </div>
    )
}

export default BasicUserSignUp;
