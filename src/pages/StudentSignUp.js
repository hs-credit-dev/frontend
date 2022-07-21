import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

import "../styles/student-signup.styles.css"
import '../components/Headers/SignUpHeader'
import SignUpHeader from '../components/Headers/SignUpHeader';

const { REACT_APP_DATABASE_URL } = process.env;

const StudentSignUp = (props) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [schoolId, setSchoolId] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [bio, setBio] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    //redirect state variable
    const [redirect, setRedirect] = useState(false);

    //set userId on first render
    const { user } = props;
    console.log(user)
    // const userId = user.id
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleMiddleName = (e) => {
        setMiddleName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleSchoolId = (e) => {
        setSchoolId(e.target.value);
    }

    const handleSchoolName = (e) => {
        setSchoolName(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //props not being passed, userId set manually here. 
        // userId 8 won't work again on my local db or yours unless you've made at least 8 test users.
        if (confirmed) {
            const userData = { firstName, middleName, lastName, schoolId, schoolName, bio }
        
            axios.post(`${REACT_APP_DATABASE_URL}/students/create`, userData)
            .then(response => {
                console.log('===> student created');
                console.log(response.data);
                setRedirect(true);
            })
        } else {
            return alert('Please confirm your age before continue.')
        }
    }

    if(redirect) return <Redirect to='/explore'/>

    return (
        <div className="student-signup-container">
            <SignUpHeader/>
            <form className="basic-signup-form" onSubmit={handleSubmit}>

                <div className='row-group'>
                    <div className='inline-student'>
                        <label>First Name</label>
                        <input type="text" value={firstName} onChange={handleFirstName} className='name-input student-form-control'></input>
                    </div>
                    <div className='inline-student'>
                        <label>M.I.</label>
                        <input type="text" value={middleName} onChange={handleMiddleName} className='mi-input student-form-control'></input>
                    </div>
                    <div className='inline-student'>
                        <label>Last Name</label>
                        <input type="text" value={lastName} onChange={handleLastName} className='name-input student-form-control'></input>
                    </div>
                </div>
                
                <div className='row-group'>
                    <div className='inline-student'>
                        <label className="ceeb" htmlFor="ceeb-code">
                            CEEB
                            <a href="https://satsuite.collegeboard.org/k12-educators/tools-resources/k12-school-code-search" className="ceeb-code">
                                Find code here
                            </a>
                        </label>
                        <input type="text" value={schoolId} onChange={handleSchoolId} className="ceeb-input input-field student-form-control"/>
                    </div>

                    <div className="inline-student">
                        <label className="school-name" htmlFor="school-name">School Name</label>
                        <input type="text" value={schoolName} onChange={handleSchoolName} className="input-field school-name-input student-form-control"/>
                    </div>
                </div>

                <label>Bio</label>
                <input type="text" value={bio} onChange={handleBio} className='bio-input student-form-control'></input>

                <label className='confirmation'>
                        <input type="checkbox" onClick={() => setConfirmed(!confirmed)} className='checkbox'/>
                        By checking this box, you are confirming that you are at least 13 years of age or older. You are also consenting to our terms/services and Data Use Policy.
                </label>

                <button value="submit" className='submit'>Create Account</button>

            </form>
        </div>
    )
}

export default StudentSignUp;

