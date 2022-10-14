import { NavLink, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { IconButton } from "@material-tailwind/react";

import { userInSession } from "../App";
import * as users from "api/users";
import Button from "./Button";

import { ReactComponent as LogoutIcon } from "../assets/svg/log-out-icon.svg";

/**
 * Button that conditionally renders Login/Logout depending on session state
 * & handles login/logout functionality
 */
const AuthButton = ({ className, ...props }) => {
  const [user, setUser] = useAtom(userInSession);
  const navigate = useNavigate();

  return (
    !user ? (
      <NavLink to="/login">
        <Button className={className} {...props}>
          Login
        </Button>
      </NavLink>
    ) :
      (
        <IconButton
          variant="text"
          onClick={async () => {
            await users.logout();
            setUser(null);
            navigate("/");
          }}
          className={`hover:bg-transparent focus:bg-transparent active:bg-transparent ${className}`}
          {...props}
        >
          <LogoutIcon />
        </IconButton>
      )
  );
};

export default AuthButton;
