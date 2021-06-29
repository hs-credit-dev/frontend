import React from 'react'
import Logo from '../../assets/hscLogo21.png'

export const IndexHeader = () => {
    return (
        <div>
            <img className="hsc-logo-landing" src={Logo} alt='hsc logo'/>
            <h3 className="tagline">researched, revised, relevant</h3>
        </div>
    )
}

export default IndexHeader