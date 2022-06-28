import React from 'react'
import ButtonLink from '../components/ButtonLink';
import LogoutModal from '../components/modals/LogoutModal';

import '../styles/pages/logout.styles.css'

 
const Logout = () => {
    return (
        <div className='log-out-container'>

            <p className='log-out-text'>You have successfully logged out!</p>
            <ButtonLink text="Log In" link="/login"/>
        </div>
    )
}

export default Logout;