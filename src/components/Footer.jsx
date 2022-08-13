import React from "react";
import { Avatar } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

import PrivacyPolicyModal from "./modals/PrivacyPolicyModal";
import TermsOfServiceModal from "./modals/TermsOfServiceModal";

import logo from "../assets/svg/hsc-logo-no-text.svg";

// Top Navbar for Account Creation Pages
const Footer = () => {
  return (
    <>
      <div className="mx-2 md:mx-8 lg:mx-16 mb-2 flex items-center gap-x-2 text-xs text-black font-bold absolute bottom-0">
        <NavLink to="/">
          <Avatar src={logo} alt="logo" className="hidden md:block mr-8" />
        </NavLink>
        <NavLink to="/">
          <p>Powered by hs.credit</p>
        </NavLink>
        <p>|</p>
        <TermsOfServiceModal />
        <p>|</p>
        <PrivacyPolicyModal />
        <p>|</p>
        <p>© 2022 Academic Capital Foundation, Inc.</p>
      </div>
    </>
  );
};

export default Footer;
