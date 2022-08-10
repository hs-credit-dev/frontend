import { Avatar, Typography } from "@material-tailwind/react";

import img from "../assets/svg/hsc-logo-no-text.svg";

const Logo = ({ className, size }) => {
  return (
    <span className={`logo flex w-fit ${className}`}>
      <Avatar src={img} alt="logo" className="mr-4" size={size} />
      <Typography variant="h1" className="text-3xl my-auto">
        hs.credit
      </Typography>
    </span>
  );
};

export default Logo;
