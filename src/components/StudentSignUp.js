import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { DATABASE_URL } = process.env;

const StudentSignUp = () => {

    
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [schoolId, setSchoolId] = useState('');
    const [image, setImage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const handleGrade = (e) => {
        setGrade(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleSchool = (e) => {
        setSchool(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
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
    const handleSchoolId = (e) => {
        setSchoolId(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters
        if (password === confirmPassword && password.length >= 8) {
            const userForm = { userName, email, password };
           const studentForm = {schoolId, image, about, street1, street2, city, state, zip}
           

           const newUser = await axios.post(`${DATABASE_URL}/users/create`, userForm)
           const newstudent = await axios.post(`${DATABASE_URL}/students/create`, studentForm)

           
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
               
                    <label>Username</label>
                    <input type="text" value={userName} onChange={handleUserName}></input>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={handleEmail}></input>

                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={handlePassword}></input>
              
                    <label htmlFor="confirmPassword" >Confirm password</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword}></input>

                    <label>Street 1</label>
                    <input type="text" value={street1} onChange={handleLocation}></input>
                
                    <label>Street 2</label>
                    <input type="text" value={street2} onChange={handleLocation}></input>
                    
                    <label>Street 2</label>
                    <input type="text" value={street2} onChange={handleLocation}></input>

                    <label>School</label>
                    <input type="text" value={schoolId} onChange={handleSchoolId}></input>
                
                    <label>Grade</label>
                    <input type="text" value={grade} onChange={handleGrade}></input>
               
                    <label>Profile Picture</label>
                    <input type="select" value={image} onChange={handleImage}></input>
                
                    
                
                    
                
                <button value="submit">Sign Up!</button>

            </form>
        </div>
    )
}

export default StudentSignUp
