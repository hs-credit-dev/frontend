import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utilities/setAuthToken'

import '../styles/login.styles.css'


const REACT_APP_DATABASE_URL = process.env.REACT_APP_DATABASE_URL;

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)
 

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(`>>>> inside handleSubmit func`)
        e.preventDefault()
        const userData = {email,password}

        axios.post(`${REACT_APP_DATABASE_URL}/users/login`, userData)
        .then(response => {
            console.log(`>>>>inside handleSubmit reponse block`)

            console.log(response)
            const { token } = response.data
            //save token to localStorage
            localStorage.setItem('jwtToken', token)
            //set token to header
            setAuthToken(token)
            //decode token to get user data
            const decoded = jwt_decode(token)
            props.nowCurrentUser(decoded)
            setRedirect(true)
        })
        .catch(error => {
            console.log(`>>>> error logging in ${error}`)
            alert('incorrect email or password! please try again')
        })

    }

    if (props.user) return <Redirect to="/frontend" /> // double check

    return (
       
        <div className="login-container">
            <div>
                <div className='login-div'>
                <h1 className="login">Login</h1>
                    <form className="login-form"onSubmit={handleSubmit}>
                        <div className="form-group">
                            {/* <label htmlFor="email">Email</label> */}
                            <input type="text" name="email" value={email} onChange={handleEmail} className="form-control"/>
                            <p  className='input-text'>(email)</p>
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="password">Password</label> */}
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control"/>
                            <p className='input-text'>(password)</p>
                        </div>
                        <button type="submit" className="form-group">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Login;
