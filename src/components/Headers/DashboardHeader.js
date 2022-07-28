import React  from "react";

import "../../styles/dashboard-header.styles.css";
import logo from '../../assets/images/hscLogo21.png';

export const DashboardHeader = () => {
    return (
        <div className='dashboard-header'>
            <div className="hsc-logo">
                <a href='/frontend'>
                    <img className="hsc-logo-landing-nav" src={logo} alt='hsc logo' />
                    <h4 className="comp-name">hs.credit</h4>
                </a> 
            </div>
            <div className="util-btn">
                
            </div>
        </div>
    )
}

export default DashboardHeader;