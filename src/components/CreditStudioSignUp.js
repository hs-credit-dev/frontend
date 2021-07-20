import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
const { DATABASE_URL } = process.env;


const CreditStudioSignUp = () => {
    const [institution, setInstitution] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [redirect, setRedirect] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword && password.length > 7 && password.length < 31) {

            const newCreditStudio = { institution, email, password, confirmPassword };
            // need proper API for line 65
            axios.post(`${DATABASE_URL}/users/register`, newCreditStudio)
                .then(response => {
                    console.log(`===> 'Sucessfully created new Credit Studio', ${new newCreditStudio}`);
                    console.log(response);
                    setRedirect(true);
                })
                .catch(error => console.log(`===> Error in Signup’, ${error}`));
        } else if (password.length < 8 || password.length > 30 ){
            alert(`Password must be between 8 and 30 characters long. Please try again.`);

        } else if (password !== confirmPassword){
             return alert(`Passwords don\‘t match. Please try again.`);

        } else {
            alert(`Internal server error`)
        }
    }

    if (redirect) return <Redirect to='/login' />


    const handleInstitution = (e) => {
        setInstitution(e.target.value)
        console.log(`Institution: ${e.target.value}`)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(`Email: ${e.target.value}`)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(`Password: ******`)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        console.log(`Password: ******`)
    }

    return (
        <div>
            <form className="credit-studio-signup-form" onSubmit={handleSubmit}>
                <label>Name of Institution</label>
                <input type="text" name="name" onChange={handleInstitution}></input>
                <label>Email</label>
                <input type="text" name="email" onChange={handleEmail}></input>
                <label>Password</label>
                <input type="text" name="password" onChange={handlePassword}></input>
                <label>Confirm Password</label>
                <input type="text" name="confirm-password" onChange={handleConfirmPassword}></input>
                <button value="submit">Sign Up</button>
            </form>
        </div>

    )
}

export default CreditStudioSignUp