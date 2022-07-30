import React from 'react'
import { NavLink } from 'react-router-dom';

//styles
import '../../styles/topnavbar.styles.css'

function TopNavBar(props) {
    return (
        <div className='top-nav-container'>
            <a href='/frontend'>
                <img className="hsc-logo-landing-nav" src='https://i.imgur.com/t5GkphG.png' alt='hsc logo' />
            </a>
            <p className='nav-hs-credit-title'>hs.credit</p>
            {props.isAuth ?
                <ul className='top-nav-ul'>
                    <li id="top-nav-li">
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li id="top-nav-li" className='logout'>
                        <span onClick={props.handleLogout}>Logout</span>
                    </li>
                    <img className='top-nav-user-icon' src="https://raw.githubusercontent.com/mozilla/fxa/9ca5c4057cde5da1e2866cb9515e88bb18e5fb2b/packages/fxa-profile-server/lib/assets/default-profile.png" alt="default profile avatar" />

                </ul>
                :
                <ul className='top-nav-ul'>
                    <li id="top-nav-li">
                        <NavLink to='/login'>Login</NavLink>
                    </li>

                    <li id="top-nav-li">
                        <NavLink to="/basic-signup">Sign up</NavLink>

                    </li>
                    <li id="top-nav-li">
                    </li>
                    <NavLink to="/about">How do I use Hs.Credit?</NavLink>
                </ul>
            }
        </div>
    )
}

export default TopNavBar
