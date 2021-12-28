import { React, useState } from 'react'
import UserModel from '../models/user';

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
        <form onSubmit={handleSubmit}>
            <label>
                { props.name }
                <input type="text" name="about" onChange={handleAboutChange} />
            </label>
            <input type="submit" name="submit" />
        </form>
    )
}

export default Form;
