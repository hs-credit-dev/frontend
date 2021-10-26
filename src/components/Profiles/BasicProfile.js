import { React, useState } from 'react'
import Form from '../../Form'


const BasicProfile = () => {
    const [clicked, setClicked] = useState(false)

    const handleClick= () => {

        setClicked(!clicked)
    }

    return (
        <div className="profile-container">
            <img href="./assets/profiledefault" alt="default profile avatar" />
            {/* <h5>About { isAuthenticated ? user.name : 'User'}</h5> */}
            {/* <p>{ user.about ? user.about : `${user.name} doesn't have an about section yet.` }</p> */}
            <div className="profile-bio-section">
                {user.about}
                <button onClick={handleClick}>edit bio</button>
                {clicked ? <Form about={about}/> : ''}
            </div>

        </div>
    )
}

export default BasicProfile
