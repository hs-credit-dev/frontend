import React  from "react";

import "../../styles/signup-header.styles.css";
import logo from '../../assets/images/hscLogo21.png';

export const SignUpHeader = () => {
    return (
        <div className='signup-header'>
            <p className="left">
                <a href='/frontend'>
                    <img className="hsc-logo-landing-nav" src={logo} alt='hsc logo' />
                </a>
                <h4 className="comp-name">hs.credit</h4>
            </p>
            <h3 className="page-title">Account Creation</h3>
        </div>
    )
}

export default SignUpHeader