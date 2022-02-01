import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import routes from '../../config/routes';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utilities/setAuthToken';
import axios from 'axios'

//components
import Login from '../../pages/Login'
import BasicUserSignUp from '../../pages/BasicUserSignUp';

//styles
import '../../styles/topnavbar.styles.css'

function TopNavBar(props) {
    return (
        <div className='top-nav-container'>
            <a href='/frontend'>
                <img className="hsc-logo-landing-nav" src='https://i.imgur.com/t5GkphG.png' alt='hsc logo' />
            </a>
            {props.isAuth ?
                    <ul className='top-nav-ul'>
                        <li className="top-nav-li">
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li className="top-nav-li" id='logout'>
                            <span onClick={props.handleLogout}>Logout</span>
                        </li>
                        <img className='top-nav-user-icon' src="https://raw.githubusercontent.com/mozilla/fxa/9ca5c4057cde5da1e2866cb9515e88bb18e5fb2b/packages/fxa-profile-server/lib/assets/default-profile.png" alt="default profile avatar" />

                    </ul>
                 :
                <ul className='top-nav-ul'>
                    <li className="top-nav-li">
                        <NavLink to='/login'>Login</NavLink>
                    </li>

                    <li className="top-nav-li">
                        <NavLink to="/signup">Sign up</NavLink>

                    </li>
                    <li className="top-nav-li">
                    </li>
                    <NavLink to="/about">How do I use Hs.Credit?</NavLink>
                </ul>
            }
        </div>
    )
}

export default TopNavBar
