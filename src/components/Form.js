import { React, useState } from 'react'

const Form = (props) => {
    const [about, setAbout] = useState('')

    const handleAboutChange = (event) => {
        setAbout(event.target.value)
        console.log(about)
    }

    const handleSubmit = () => {
        //post data to backend
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
