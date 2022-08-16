import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { atom, useAtom } from "jotai";

import SignUpStudent from "./components/SignUpStudent";
import SignUpTeacher from "./components/SignUpTeacher";
import NotFound from "../NotFound";
import SignUpHeader from "./components/SignUpHeader";
import SignUpUser from "./components/SignUpUser";

import { userInSession } from "../../App";

export const page = atom(0);
export const userType = atom("");

const SignUp = () => {
  const [_page, setPage] = useAtom(page);
  const [type] = useAtom(userType);

  const [user] = useAtom(userInSession);

  useEffect(() => {
    setPage(0);
  }, []);

  const renderSignUp = (page) => {
    switch (page) {
      case 0:
        return <SignUpUser />;
      case 1:
        switch (type) {
          case "student":
            return <SignUpStudent />;
          case "teacher":
            return <SignUpTeacher />;
          default:
            return <NotFound />;
        }
      default:
        return <NotFound />;
    }
  };

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <>
          <SignUpHeader />
          {renderSignUp(_page)}
        </>
      )}
    </>
  );
};

export default SignUp;
