import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="p-8">
        <Typography variant="h1" className="pb-4">
          Page Not Found
        </Typography>
        <Typography>
          Return{" "}
          <NavLink to="/" className="text-light-blue-700">
            home
          </NavLink>
        </Typography>
      </div>
    </>
  );
};

export default NotFound;
