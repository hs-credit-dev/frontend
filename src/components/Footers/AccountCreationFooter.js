import React from 'react';

import PrivacyPolicyModal from '../modals/PrivacyPolicyModal';
import '../../styles/footer.account.creation.styles.css';
import logo from '../../assets/images/hscLogo21.png';
import TermsOfServiceModal from '../modals/TermsOfServiceModal';

// Top Navbar for Account Creation Pages
const AccountCreationFooter = () => {


    return (
        <div className="footer-container">
            <img className="footer-hscredit-logo" src={logo} alt="HSC.Logo" />
            <p className="footer-text">Powered by hs.credit</p>
            <span className="footer-divider">|</span>
            <TermsOfServiceModal />
            <span className="footer-divider">|</span>
            <PrivacyPolicyModal />
            <span className="footer-divider">|</span>
            <p className="footer-text">© 2022 Academic Capital Foundation, Inc.</p>
        </div>
    )

}

export default AccountCreationFooter;