import { Avatar, Typography } from "@material-tailwind/react";

import img from "../assets/svg/hsc-logo-no-text.svg";

const Logo = ({ className }) => {
  return (
    <>
      <span className={`flex items-center w-fit ${className}`}>
        <Avatar src={img} alt="logo" className="block w-24 h-24 mr-4" />
        <Typography variant="h1" className="block text-3xl">
          hs.credit
        </Typography>
      </span>
    </>
  );
};

export default Logo;
