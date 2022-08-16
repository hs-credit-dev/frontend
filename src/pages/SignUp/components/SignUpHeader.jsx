import { NavLink } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

import Logo from "./../../../components/Logo";

import { resetState } from "../utils";

const SignUpHeader = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6 items-center py-4 px-8">
        <NavLink
          to="/"
          className="flex"
          onClick={() => {
            resetState();
          }}
        >
          <Logo />
        </NavLink>
        <Typography className="text-3xl font-bold ml-auto">
          Account Creation
        </Typography>
      </div>
    </>
  );
};

export default SignUpHeader;
