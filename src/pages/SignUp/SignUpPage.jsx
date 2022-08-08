import React, { useState } from "react";

import "../../styles/basic-user-signup.styles.css";
import AccountCreationFooter from "../../components/Footers/AccountCreationFooter";
import StudentSignUp from "./components/StudentSignUp";
import TeacherSignUp from "./components/TeacherSignUp";
import NotFound from "../NotFound";
import SignUpHeader from "./components/SignUpHeader";
import UserSignUp from "./components/UserSignUp";

const SignUpPage = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState("");

  const renderSignUp = (page) => {
    switch (page) {
      case 0:
        return <UserSignUp setPage={setPage} type={type} setType={setType} />;
      case 1:
        switch (type) {
          case "student-signup":
            return <StudentSignUp />;
          case "teacher-signUp":
            return <TeacherSignUp />;
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

export default SignUpPage;
