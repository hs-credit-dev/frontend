import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export const MainNavBar = () => {
    return (
        <Router>
            <nav>

                <ul >

                    <li >
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/howitworks">How It Works</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li >
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                    <li >
                        <NavLink to="/contact">Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </Router>

    );
}

export default MainNavBar