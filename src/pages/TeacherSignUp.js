// imports
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import AccountCreationFooter from '../components/Footers/AccountCreationFooter';
import '../styles/teacher.signup.styles.css';

// database url
const { REACT_APP_DATABASE_URL } = process.env;

const TeacherSignUp = (props) => {
    const [ schoolId, setSchoolId ] = useState('');
    const [ schoolName, setSchoolName ] = useState('');
    const [ schoolWebsite, setSchoolWebsite ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ checked, setChecked ] = useState(false);
    const [ redirect, setRedirect] = useState(false);

    // pass in userId as props?

    const handleSchoolId = (e) => {
        setSchoolId(e.target.value);
    }
    
    const handleSchoolName = (e) => {
        setSchoolName(e.target.value);
    }

    const handleSchoolWebsite = (e) => {
        setSchoolWebsite(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    const handleChecked = () => {
        setChecked(!checked);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!checked) {
            alert("must agree to terms/services and Data Use Policy to proceed.")
        }
        
        if(schoolId && schoolName && schoolWebsite && checked){
            // pass data to backend
            const teacherData = { schoolId, schoolName, schoolWebsite, bio };
            
            try
            {
                const response = await axios.post(`${REACT_APP_DATABASE_URL}/teachers/create`, teacherData);
                console.log(">>>>> teacher created")
                console.log(teacherData);
                setRedirect(true);
            }
            catch(error)
            {
                console.log(`>>>>> error creating teacher${error}  `);
            }
        } else {
            alert("Please fill in all required items!");
        }
        
       
    }

    if(redirect) {
        // redirect user to Log In page when created successfully
        return <Redirect to='/login' />
    }


    return (
        <div className="signup-container">

            {/* Header */}
            
            <form className="info-form" onSubmit={handleSubmit}>

                <div className="row">
                    <div className="inline-div">
                        <label className="ceeb-label label" htmlFor="ceeb-code">
                            CEEB
                            <a 
                                href="https://satsuite.collegeboard.org/k12-educators/tools-resources/k12-school-code-search" 
                                className="ceeb-code-link">
                                Find code here
                            </a>
                        </label>
                        <input 
                            className="ceeb-input input-field" 
                            name="ceeb-code" 
                            type="text" 
                            value={schoolId} 
                            onChange={handleSchoolId} 
                        />
                    </div>

                    <div className="inline-div">
                        <label className="label" htmlFor="school-name">School Name</label>
                        <input 
                            className="input-field school-name-input" 
                            name="school-name" 
                            type="text" 
                            value={schoolName} 
                            onChange={handleSchoolName}     
                        />
                    </div>
                </div>

                <div className="row">
                    <label className="label" htmlFor="school-website">School Website</label>
                    <input 
                        className="input-field school-website-input" 
                        name="school-website" 
                        type="text" 
                        value={schoolWebsite} 
                        onChange={handleSchoolWebsite}    
                    />
                </div>

                <div className="row">
                    <label className="label" htmlFor="bio">Bio (Optional)</label>
                    <textarea 
                        className="input-field bio-input" 
                        name="bio" 
                        type="text" 
                        value={bio} 
                        onChange={handleBio}
                    />
                </div>

                <div className="row">
                    <label className="terms-label">
                        <input 
                            className={`terms-check ${checked ? "terms-check-true" : ""}`}
                            type="checkbox" 
                            value={checked}
                            onChange={handleChecked}
                        />
                        <span>By checking this box, you are consenting to our terms/services and Data Use Policy.</span>
                    </label>
                    <button className="create-btn" value="submit">Create Account</button>
                </div>
                

            </form>

            {/* <AccountCreationFooter /> */}

        </div>
    )
}

export default TeacherSignUp;