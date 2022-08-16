import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Avatar, Typography } from "@material-tailwind/react";

import logo from "../../../assets/svg/hsc-logo-no-text.svg";
import userIcon from "../../../assets/svg/user-avatar.svg";
import logout from "../../../assets/svg/log-out-icon.svg";

const DashboardHeader = () => {
  const [username, setUsername] = useState("Nadav");
  const initial = username[0];

  return (
    <>
      <div className="flex mt-8 mx-8">
        <NavLink to="/" className="flex">
          <Avatar src={logo} alt="logo" className="mr-4" />
          <Typography className="text-black" variant="h3">
            hs.credit
          </Typography>
        </NavLink>
        <div variant="h3" className="ml-auto">
            <NavLink to="/" className="relative">
              <Avatar src={userIcon} alt="userIcon" className="mr-6 w-12 h-12"/>
              <Typography className='text-white font-bold text-4xl inline-block absolute right-9 -top-2'>{initial}</Typography>
            </NavLink>
            <NavLink to="/">
              <Avatar src={logout} alt="logout" className="mr-6 w-8 h-8" />
            </NavLink>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
