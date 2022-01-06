import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/nav.styles.css'

export const NavBar = (props) => {
    return (
        <nav className="nav">


            {props.isAuth ?
                <nav>

                    <ul >
                        <li className="nav-li">
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className="nav-li" >
                            <NavLink to="/browse">Browse</NavLink>
                        </li>

                        {/* <li >
                            <NavLink to="/registeras">Register as</NavLink>
                        </li> */}

                        <li className="nav-li">
                            <NavLink to="/profile">Profile</NavLink>
                        </li>

                        <li className="nav-li">
                            <span onClick={props.handleLogout}>Logout</span>
                        </li>
                    </ul>
                </nav> :
                <ul>
                    <li className="nav-li">
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to='/login'>Login</NavLink>
                    </li>

                    <li className="nav-li">
                        <NavLink to="/signup">Sign up</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="nav-li">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>}


        </nav>
    );
}



export default NavBar

