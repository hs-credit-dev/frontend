import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import '../../styles/nav.styles.css'

export const NavBar = (props) => {
    const location = useLocation()

    return (
        <nav className="nav">
            {props.isAuth ?
                <nav>
                    <ul className='nav-ul' >
                        <li className='nav-credit-info'>
                            <div className='nav-credit-info-container'>
                                <p className='nav-credit-info-title'>Credit in Progress</p>
                                <a href='/username/credits/the-revolutionary-war' className='nav-credit-info-body'>Espionage in The American Revolution</a>
                                <p className='nav-credit-info-title'>My Educator</p>
                                <p className='nav-credit-info-body'>Franklin Johnson</p>
                                <p className='nav-credit-info-title'>Earned Credits</p>
                                <p className='nav-credit-info-body'>8</p>
                            </div>
                        </li>
                        <div className='divider'></div>
                        <li className={location.pathname === '/explore' ? 'current-page' : 'nav-li'}>
                            <NavLink to="/explore">
                                Explore
                            </NavLink>
                        </li>
                        <li className={location.pathname === '/credit-search' ? 'current-page' : 'nav-li'}>
                            <NavLink to="/credit-search">Search</NavLink>
                        </li>
                        <li className={location.pathname === '/about' ? 'current-page' : 'nav-li'}>
                            <NavLink to="/about">About</NavLink>
                        </li>

                        <li className={location.pathname === '/contact' ? 'current-page' : 'nav-li'}>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav> : null
            }
        </nav>
    );
}

export default NavBar

