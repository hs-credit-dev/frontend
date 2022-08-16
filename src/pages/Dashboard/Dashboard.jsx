import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAtom } from "jotai";

import { userInSession } from "../../App";

// import "../../styles/basic-user-signup.styles.css";
import DashboardHeader from "./components/DashboardHeader.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import DashboardFooter from "./components/DashboardFooter.jsx";
// import NotFound from '../NotFound';

const Dashboard = () => {
  const [user] = useAtom(userInSession);

  // const [page, setPage] = useState(0);
  // const [type, setType] = useState("");

  // const renderDashboard = () => {
  // switch (page) {
  // case 0:
  // return <NotFound />;
  // case 1:
  // switch (type) {
  // case "student-dashboard":
  // return <StudentDashboard />;
  // default:
  // return <NotFound />;
  // }
  // default:
  // return <NotFound />;
  // }
  // };

  // useEffect(() => {
  //   if (!user) navigate("/");
  // });

  return (
    <>
      {/* {!user ? (
        <Navigate to={"/"} />
      ) : ( */}
        <>
          <DashboardHeader />
          {/* {renderDashboard(page)} */}
          <StudentDashboard />
          <DashboardFooter />
        </>
      {/* )} */}
    </>
  );
};

export default Dashboard;
