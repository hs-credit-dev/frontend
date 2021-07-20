import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { DATABASE_URL } = process.env;

const StudentSignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [grade, setGrade] = useState('');
    const [location, setLocation] = useState('');
    const [school, setSchool] = useState('');
    const [userType, setUserType] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleGrade = (e) => {
        setGrade(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleSchool = (e) => {
        setSchool(e.target.value);
    }

    const handleUserType = (e) => {
        setUserType(e.target.value);
    }

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

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters
        if (password === confirmPassword && password.length >= 8) {
            const newUser = { firstName,lastName,location,school,userType,grade,userName, email, password };
           
            axios.post(`${DATABASE_URL}/api/users/register`, newUser)
            .then(response => {
                console.log('===> Yay, new user');
                console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log('===> Error in Signup', error));
        } else {
            if (password !== confirmPassword) return alert('Passwords don\'t match');
            alert('Password needs to be at least 8 characters. Please try again.');
        }
    }

    if (redirect) return <Redirect to="/login" /> // You can have them redirected to profile (your choice)

    return (
        <div>
            <h1 className="student-signup">Student Sign up</h1>
            <form className="student-signup-form" onSubmit={handleSubmit}>
                
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" value={firstName} onChange={handleFirstName}></input>
                
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" value={lastName} onChange={handleLastName}></input>
               
                    <label>Username</label>
                    <input type="text" value={userName} onChange={handleUserName}></input>
                
                    <label>Location</label>
                    <input type="text" value={location} onChange={handleLocation}></input>
                
                    <label>School</label>
                    <input type="text" value={school} onChange={handleSchool}></input>
                
                    <label>Grade</label>
                    <input type="text" value={grade} onChange={handleGrade}></input>
               
                    <label>User Type</label>
                    <input type="select" value={userType} onChange={handleUserType}></input>
                
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

export default StudentSignUp
