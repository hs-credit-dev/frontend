import React, { useState } from "react";

import "../../styles/basic-user-signup.styles.css";
import AccountCreationFooter from "../../components/Footer";
import SignUpStudent from "./components/SignUpStudent";
import SignUpTeacher from "./components/SignUpTeacher";
import NotFound from "../NotFound";
import SignUpHeader from "./components/SignUpHeader";
import SignUpUser from "./components/SignUpUser";

const SignUp = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState("");

  const renderSignUp = (page) => {
    switch (page) {
      case 0:
        return <SignUpUser setPage={setPage} type={type} setType={setType} />;
      case 1:
        switch (type) {
          case "student-signup":
            return <SignUpStudent />;
          case "teacher-signUp":
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
      <SignUpHeader />
      {renderSignUp(page)}
      <AccountCreationFooter />
    </>
  );
};

export default SignUp;
