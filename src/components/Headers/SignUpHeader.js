import React  from "react";

import "../../styles/signup-header.styles.css";
import logo from '../../assets/svg/hsc-logo-no-text.svg';

export const SignUpHeader = () => {
    return (
        <div className='signup-header'>
            <p className="left">
                <a href='/frontend'>
                    <img className="hsc-logo-landing-nav" src={logo} alt='hsc logo' />
                    <h4 className="comp-name">hs.credit</h4>
                </a> 
            </p>
            <h3 className="page-title">Account Creation</h3>
        </div>
    )
}

export default SignUpHeader