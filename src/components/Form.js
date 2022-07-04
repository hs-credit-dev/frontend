import { React, useState } from 'react'

import UserModel from '../models/user';

import '../styles/components/form.styles.css'

const REACT_APP_DATABASE_URL = process.env.REACT_APP_DATABASE_URL;

const Form = (props) => {
    const [about, setAbout] = useState('')

    const handleAboutChange = (event) => {
        setAbout(event.target.value)
        console.log(about)
    }

    const handleSubmit = () => {

        const updatedAbout = about

        // await axios.put(`${REACT_APP_DATABASE_URL}/users/update/:id`, updatedAbout)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="about" onChange={handleAboutChange} />
                    <p>({props.name})</p>
                </label>
                <input className='form-submit-button' type="submit" name="submit" />
            </form>
        </div>

    )
}

export default Form;
