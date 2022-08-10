import { Avatar, Typography } from "@material-tailwind/react";

import img from "../assets/svg/hsc-logo-no-text.svg";

const Logo = () => {
  return (
    <div className="logo flex">
      <Avatar src={img} alt="logo" className="mr-4" />
      <Typography variant="h1" className="text-3xl">
        hs.credit
      </Typography>
    </div>
  );
};

export default Logo;
