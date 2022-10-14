import { Avatar, Typography } from "@material-tailwind/react";

import PrivacyPolicyModal from "./modals/PrivacyPolicyModal";
import TermsOfServiceModal from "./modals/TermsOfServiceModal";

import logo from "../assets/svg/hsc-logo-no-text.svg";

const FooterElement = ({ children, className, ...props }) => {
  return (
    <>
      <Typography className={`text-sm font-bold ${className}`} {...props}>
        {children}
      </Typography>
    </>
  );
};

// Top Navbar for Account Creation Pages
const Footer = ({ className, ...props }) => {
  return (
    <>
      <div
        className={`px-4 md:px-16 pb-4 flex items-center gap-x-2 ${className}`}
        {...props}
      >
        <Avatar src={logo} alt="logo" className="hidden lg:block" />
        <FooterElement className="lg:ml-8">Powered by <a href="https://hs.credit/" className="hover:text-hspurple">hs.credit</a></FooterElement>
        <FooterElement>|</FooterElement>
        {/* <FooterElement> */}
        <TermsOfServiceModal text='Terms & Services' />
        {/* </FooterElement> */}
        <FooterElement>|</FooterElement>
        {/* <FooterElement> */}
        <PrivacyPolicyModal text='Privacy Policy' />
        {/* </FooterElement> */}
        <FooterElement>|</FooterElement>
        <FooterElement>© 2022 Academic Capital Foundation, Inc.</FooterElement>
      </div>
    </>
  );
};

export default Footer;
