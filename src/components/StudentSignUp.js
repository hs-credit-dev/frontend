import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const REACT_APP_DATABASE_URL = process.env.REACT_APP_DATABASE_URL;

const StudentSignUp = () => {
    const [schoolId, setSchoolId] = useState('');
    const [street1, setStreet1] = useState('');
    const [street2, setStreet2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');



    const handleSchoolId = (e) => {
        setSchoolId(e.target.value);
    }

    const handleStreet1 = (e) => {
        setStreet1(e.target.value);
    }


    const handleStreet2 = (e) => {
        setStreet2(e.target.value);
    }

    const handleCity = (e) => {
        setCity(e.target.value);
    }
    
    const handleState = (e) => {
        setState(e.target.value);
    }

    const handleZip = (e) => {
        setZip(e.target.value);
    }

    const handleSubmit = async (e) => {
        //needs to check for valid email
        //needs to check for no existing users
        e.preventDefault(); 
        if (password === confirmPassword && password.length >= 8) {
            console.log('=====> passwords match')
            const newUser = { username, email, password };

            console.log(REACT_APP_DATABASE_URL)

            await axios.post(`${REACT_APP_DATABASE_URL}/student/create`, newUser)
            // await axios.post(`http://localhost:8000/api/users/create`, newUser)
            
            // .catch(error => console.log('===> Error in Signup', error));
        } else {
            if (password !== confirmPassword) return alert('Passwords don\'t match');
            // console.log(DATABASE_URL)
            alert('Password needs to be at least 8 characters. Please try again.');
        }
    }


    return (
        <div>
            <h1 className="basic-signup">Student Sign up</h1>
            <form className="basic-signup-form" onSubmit={handleSubmit}>

                <label>School ID</label>
                <input type="text" value={schoolId} onChange={handleSchoolId}></input>

                <label htmlFor="street 1">Street 1</label>
                <input type="text" name="street 1" value={street1} onChange={handleStreet1}></input>

                <label htmlFor="street 2">Street 2</label>
                <input type="text" value={street2} onChange={handleStreet2}></input>

                <label htmlFor="city" >City</label>
                <input type="text" value={city} onChange={handleCity}></input>

                <label htmlFor="state">State</label>
                <input type="text" value={state} onChange={handleState}></input>

                <label htmlFor="zipcode">Zipcode</label>
                <input type="text" value={zip} onChange={handleZip}></input>

                <button value="submit">Sign Up!</button>

            </form>
        </div>
    )
}

export default StudentSignUp;

