import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";

import { userInSession } from "../../App";

// Components
import Logo from "../Logo";
import AuthButton from "../AuthButton";

// Assets
import { ReactComponent as HamburgerOpen } from "./hamburger-open.svg";
import { ReactComponent as HamburgerClosed } from "./hamburger-closed.svg";

const lg = 960; // Large Screen Breakpoint

const isNavOpen = atom(false);

const Header = () => {
  const [user] = useAtom(userInSession);
  const [openNav, setOpenNav] = useAtom(isNavOpen);

  // Close mobile nav on resize to desktop size
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= lg && setOpenNav(false)
    );
  }, [setOpenNav]);

  // Elements in navbar
  const navList = (
    <>
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-4">
        {/* Add <NavLink>'s here to populate navbar */}
      </div>
      <div className="flex items-center gap-2">
        {user && (
          <>
            <NavLink to="/profile">
              <p className=" text-white font-bold text-4xl p-2 text-center w-14 h-14 aspect-square bg-hsblue rounded-xl">
                {user.firstName[0]?.toUpperCase()}
              </p>
            </NavLink>
          </>
        )}
        <AuthButton className="lg:ml-auto" />
      </div>
    </>
  );

  return (
    <>
      <Navbar className="bg-transparent border-none shadow-none max-w-none flex flex-wrap items-center">
        <NavLink to={user ? "/dashboard" : "/"} className="mr-auto">
          <Logo />
        </NavLink>
        <div className="hidden lg:flex lg:flex-grow lg:items-center">
          {!openNav && navList}
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
          {openNav && navList}
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Header;
