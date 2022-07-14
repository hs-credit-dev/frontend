import React from 'react';
// Style Sheet
import '../../styles/footer.account.creation.styles.css';
import logo from '../../assets/images/hscLogo21.png';

// Top Navbar for Account Creation Pages
const AccountCreationFooter = () => {

    return (
        <div className="footer-container">
            <img className="footer-hscredit-logo" src={logo} alt="HSC.Logo" />
            <p className="footer-text">Powered by hs.credit</p>
            <span className="footer-divider">|</span>
            <a className="footer-text" href="/">Terms & Services</a>
            <span className="footer-divider">|</span>
            <a className="footer-text" href="/">Privacy Policy</a>
            <span className="footer-divider">|</span>
            <p className="footer-text">© 2022 Academic Capital Foundation, Inc.</p>

        </div>
    )

}

export default AccountCreationFooter;