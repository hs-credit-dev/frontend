import React from 'react'
import Button from '../components/Button';

import '../styles/logout.styles.css'

 
const Logout = () => {
    return (
        <div className='log-out-container'>

            <p className='log-out-text'>You have successfully logged out!</p>
            <Button text={"Log In"} />

        </div>
    )
}

export default Logout;