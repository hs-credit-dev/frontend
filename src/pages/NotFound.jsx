import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="p-8">
        <Typography variant="h1" className="pb-4">
          Page Not Found
        </Typography>
        <p>
          Return{" "}
          <NavLink to="/" className="text-light-blue-700">
            home
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default NotFound;
