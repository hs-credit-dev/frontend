import React from 'react'

import CommonHeader from '../components/Headers/CommonHeader'
import AccountCreationFooter from '../components/Footers/AccountCreationFooter'
import "../styles/SignupSuccess.styles.css"

const SignupSuccess = (props) => {
    const handleResend = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tvq7tyj', 'template_xa670ar', e.target, 'mDzCQQXqWcC3Y5-lU')
        .then((result) => {
            window.location.reload()
        }, (error) => {
            console.log(error.text);
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

  return (
    <div className='success-container'>
        <CommonHeader/>
        <div className='success-page-content' onSubmit={handleSubmit}>
            <div className='success-message'>
                <p>Your account has successfully been created!</p>
                <p>Please verify your email before logging in.</p>
            </div>
            <button value="submit" className='verify'>Verify my email</button>
            <p className='verification-missing' onClick={handleResend}>Don't see your verification email?</p>
        </div>
        <AccountCreationFooter />
    </div>
  )
}

export default SignupSuccess
