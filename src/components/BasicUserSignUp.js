import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const { DATABASE_URL } = process.env;

const BasicUserSignUp = () => {


    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }


    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault(); 
    //     if (password === confirmPassword && password.length >= 8) {
    //         console.log('=====> passwords match')
    //         const userForm = { userName, email, password };

    //         console.log(userForm)

    //         console.log(DATABASE_URL)
    //         const newUser = await axios.post(`${DATABASE_URL}/users/create`, userForm)



    //             // .catch(error => console.log('===> Error in Signup', error));
    //     } else {
    //         if (password !== confirmPassword) return alert('Passwords don\'t match');
    //         alert('Password needs to be at least 8 characters. Please try again.');
    //     }
    // }
    const handleSubmit = (e) => {
        console.log(`>>>> inside handleSubmit func`)
        if(password === confirmPassword && password.length >= 8){
            const newUser = { userName, email, password }
            axios.post(`${DATABASE_URL}/users/create`, newUser)
            .then(response => {
                console.log(`>>>> new user created`)
                console.log(response)
                
            })
            .catch(error => console.log(`>>>> signup error: ${error}`))
        } else {
            if(password !== confirmPassword) {
                alert('passwords dont\'t match')
            } else if (password.length <= 7){
                alert('password must be at least 8 characters long')
            }
        }
    }


    return (
        <div>
            <h1 className="student-signup">Sign up</h1>
            <form className="student-signup-form" onSubmit={handleSubmit}>

                <label>Username</label>
                <input type="text" value={userName} onChange={handleUserName}></input>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleEmail}></input>

                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={handlePassword}></input>

                <label htmlFor="confirmPassword" >Confirm password</label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPassword}></input>

                <button value="submit">Sign Up!</button>

            </form>
        </div>
    )
}

export default BasicUserSignUp

