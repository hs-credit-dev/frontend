import { NavLink } from "react-router-dom";
import { Avatar, Typography } from "@material-tailwind/react";

import shareIcon from '../../../assets/svg/share-icon.svg';
import downloadIcon from '../../../assets/svg/download-icon.svg';

const DashboardFooter = () => {
  return (
    <> 
      <div className="flex mt-8 mx-8 absolute right-0 bottom-8 bg-transparent">
        <NavLink to="/" className="flex mr-4 items-center bg-transparent">
          <Typography className="text-black font-bold bg-transparent">
            Share
          </Typography>
          <Avatar src={shareIcon} alt="share" className="mr-4 w-6 h-6" />
        </NavLink>
        <NavLink to="/" className="flex mr-4 items-center bg-transparent">
          <Typography className="text-black font-bold bg-transparent">
            Download
          </Typography>
          <Avatar src={downloadIcon} alt="download" className="mr-4 w-6 h-6" />
        </NavLink>
      </div>
    </>
  );
};

export default DashboardFooter;
