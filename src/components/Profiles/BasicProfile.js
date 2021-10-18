import { React, useState } from 'react'


const BasicProfile = () => {

    const [about, setAbout] = useState('You have nothing in your about section.')
    const [clicked, setClicked] = useState(false)

    const handleClick= () => {
       
        setClicked(!clicked)
    }

    const renderForm = () => {
        // <form>

        // </form>
        return (
            <div>
                <p>test test test</p>
                <button>Update</button>
            </div>
        )
    }

    return (
        <div>
            <img href="./assets/profiledefault" alt="default profile avatar" />
            <div>
                {about}
                <button onClick={handleClick}>edit bio</button>
                {clicked ? 'i hate this :(' : ''}
            </div>

        </div>
    )
}

export default BasicProfile
