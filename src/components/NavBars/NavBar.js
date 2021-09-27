import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = (props) => {
    return (
        <nav className="non-authenticated-nav">
            

            {props.isAuth ?
                <nav>
                   
                    <ul >
                        <li >
                        <NavLink  to="/">Home</NavLink>
                        </li>

                        <li >
                        <NavLink  to="/browse">Browse</NavLink>
                        </li>

                        <li >
                        <NavLink  to="/registeras">Register as</NavLink>
                        </li>

                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                      
                        <li>
                            <span onClick={props.handleLogout}>Logout</span>
                        </li>
                    </ul>
                </nav> :
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/signup">Sign up</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>}

          
        </nav>
    );
}

export default NavBar