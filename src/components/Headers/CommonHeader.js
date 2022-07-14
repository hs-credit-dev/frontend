import React  from "react";

import "../../styles/headers.styles.css";
import logo from '../../assets/images/hscLogo21.png';

export const CommonHeader = () => {
    return (
        <div className='signup-header'>
            <p className="left">
                <a href='/frontend'>
                    <img className="hsc-logo-landing-nav" src={logo} alt='hsc logo' />
                    <h4 className="comp-name">hs.credit</h4>
                </a> 
            </p>
        </div>
    )
}

export default CommonHeader