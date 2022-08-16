import { Avatar } from "@material-tailwind/react";

import img from "../assets/svg/hsc-logo-no-text.svg";

const Logo = ({ className, ...props }) => {
  return (
    <>
      <span className={`flex items-center w-fit h-20 ${className}`} {...props}>
        <Avatar src={img} alt="logo" className="inline-block w-fit h-full" />
        <p className="inline-block pl-4 font-bold text-3xl">hs.credit</p>
      </span>
    </>
  );
};

export default Logo;
