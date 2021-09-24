import { React } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { REACT_APP_DATABASE_URL } = process.env;

const EducatorSignUp = (props) => {

    //required formData state variables
    const [schoolId, setSchoolId] = useState(0);
    const [image, setImage] = useState('');
    const [about, setAbout] = useState('');
    const [street1, setStreet1] = useState('');
    const [street2, setStreet2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    //redirect state variable
    const [redirect, setRedirect] = useState(false);

    //pull userId into state variable on first render
    const { user } = props;
    console.log(user)
    // let userId = props.user.id;
  
    //input data handling functions

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

    const handleSubmit = (e) => {
        e.preventDefault(); 

        //need to add userId to userData from props
        const userId = 16
        const userData = { userId, schoolId, image, about, street1, street2, city, state, zip }
        axios.post(`${REACT_APP_DATABASE_URL}/educators/create`, userData)
        .then(response => {
            console.log('===> educator created');
            console.log(response.data);
            setRedirect(true);
        })
        .catch(error => console.log('===> Error in Signup', error));
    }

    if (redirect) return <Redirect to="/profile" />

    return (
        <div>
            <h1 className="student-signup">Student Sign up</h1>
            <form className="student-signup-form" onSubmit={handleSubmit}>  
                <label>School Id</label>
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

export default EducatorSignUp
