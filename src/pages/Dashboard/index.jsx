import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

import { userInSession } from "../../App";

import StudentDashboard from "./components/StudentDashboard.jsx";
import DashboardFooter from "./components/DashboardFooter.jsx";
import Header from "../../components/Header";

const Dashboard = () => {
  const [user] = useAtom(userInSession);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col h-full">
      <Header className="mb-auto" />
      <StudentDashboard />
      <DashboardFooter />
    </div>
  );
};

export default Dashboard;
