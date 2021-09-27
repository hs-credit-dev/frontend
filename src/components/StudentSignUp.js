import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
const { REACT_APP_DATABASE_URL } = process.env;

const StudentSignUp = (props) => {
    const [schoolId, setSchoolId] = useState('');
    const [street1, setStreet1] = useState('');
    const [street2, setStreet2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    //redirect state variable
    const [redirect, setRedirect] = useState(false);

    //set userId on first render
    const { user } = props;
    console.log(user)
    // const userId = user.id
    

    const handleSchoolId = (e) => {
        setSchoolId(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }

    const handleAbout = (e) => {
        setAbout(e.target.value);
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
        e.preventDefault();
        //props not being passed, userId set manually here. 
        // userId 8 won't work again on my local db or yours unless you've made at least 8 test users.

        const userId = 8
        const userData = { userId, schoolId, street1, street2, city, state, zip }
        axios.post(`${REACT_APP_DATABASE_URL}/students/create`, userData)
        .then(response => {
            console.log('===> student created');
            console.log(response.data);
            setRedirect(true);
        })
    }

    if(redirect) return <Redirect to='/studentprofile'/>

    return (
        <div>
            <h1 className="basic-signup">Student Sign up</h1>
            <form className="basic-signup-form" onSubmit={handleSubmit}>

                <label>School ID</label>
                <input type="number" value={schoolId} onChange={handleSchoolId}></input>

                <label>Image Link</label>
                <input type="text" value={image} onChange={handleImage}></input>

                <label>About</label>
                <input type="text" value={about} onChange={handleAbout}></input>


                <label htmlFor="street 1">Street 1</label>
                <input type="text" name="street 1" value={street1} onChange={handleStreet1}></input>

                <label htmlFor="street 2">Street 2</label>
                <input type="text" value={street2} onChange={handleStreet2}></input>

                <label htmlFor="city" >City</label>
                <input type="text" value={city} onChange={handleCity}></input>

                <label htmlFor="state">State</label>
                <input type="text" value={state} onChange={handleState}></input>

                <label htmlFor="zipcode">Zipcode</label>
                <input type="number" value={zip} onChange={handleZip}></input>

                <button value="submit">Sign Up!</button>

            </form>
        </div>
    )
}

export default StudentSignUp;

