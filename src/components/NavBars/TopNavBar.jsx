import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";

import { userInSession } from "../../App";

// Components
import Logo from "../Logo";
import AuthButton from "./../AuthButton";

// Assets
import { ReactComponent as HamburgerOpen } from "../../assets/svg/hamburger-open.svg";
import { ReactComponent as HamburgerClosed } from "../../assets/svg/hamburger-closed.svg";

const lg = 960; // Large Screen Breakpoint

const isNavOpen = atom(false);

const TopNavBar = () => {
  const [user] = useAtom(userInSession);
  const [openNav, setOpenNav] = useAtom(isNavOpen);
  const location = useLocation();

  // Close mobile nav on resize to desktop size
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= lg && setOpenNav(false)
    );
  }, []);

  // Elements in navbar
  const navList = (
    <>
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-4">
        {user && <NavLink to="/dashboard">Dashboard</NavLink>}
        <NavLink to="/about">How do I use Hs.Credit?</NavLink>
      </div>
      {location.pathname !== "/login" && <AuthButton className="lg:ml-auto" />}
    </>
  );

  return (
    <>
      <Navbar className="bg-transparent border-none shadow-none max-w-none flex flex-wrap items-center">
        <NavLink to="/" className="mr-auto">
          <Logo />
        </NavLink>
        <div className="hidden lg:flex lg:flex-grow lg:items-center">
          {navList}
        </div>
        <IconButton
          variant="text"
          className="text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mx-auto"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <HamburgerClosed /> : <HamburgerOpen />}
        </IconButton>
        <MobileNav
          open={openNav}
          className="flex flex-col items-center gap-8 h-fit overflow-visible"
        >
          {navList}
        </MobileNav>
      </Navbar>
    </>
  );
};

export default TopNavBar;
