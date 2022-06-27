import React from 'react'
import ButtonLink from '../components/ButtonLink';

import '../styles/logout.styles.css'

 
const Logout = () => {
    return (
        <div className='log-out-container'>

            <p className='log-out-text'>You have successfully logged out!</p>
            <ButtonLink text={"Log In"} />

        </div>
    )
}

export default Logout;