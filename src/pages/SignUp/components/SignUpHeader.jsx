import { NavLink } from "react-router-dom";
import { Avatar, Typography } from "@material-tailwind/react";

import logo from "../../../assets/svg/hsc-logo-no-text.svg";

const SignUpHeader = () => {
  return (
    <>
      <div className="flex mt-8 mx-8">
        <NavLink to="/" className="flex">
          <Avatar src={logo} alt="logo" className="mr-4" />
          <Typography className="text-black" variant="h3">
            hs.credit
          </Typography>
        </NavLink>
        <Typography variant="h3" className="ml-auto">
          Account Creation
        </Typography>
      </div>
    </>
  );
};

export default SignUpHeader;
