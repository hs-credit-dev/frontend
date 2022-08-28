import { Avatar, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import humanFigure from "../../../assets/svg/human-figure.svg";
import { useAtom } from "jotai";
import { userInSession } from "./../../../App";

const Dashboard = () => {
  const [user] = useAtom(userInSession);

  const [quote, setQuote] = useState(
    "The only purpose of education is freedom; the only method is experience"
  );

  return (
    <div className="w-screen">
      <div className="bg-hspurple mx-auto mt-8 w-11/12 h-32 rounded-3xl flow-root">
        <div className="bg-transparent rounded-3xl w-fit float-left z-10">
          <Typography
            className="text-white bg-transparent ml-10 pt-6 mr-0 z-10"
            variant="h3"
          >
            Welcome back, {user?.firstName}
          </Typography>
          <Typography
            className="text-white bg-transparent ml-10 pt-1 text-left z-10"
            variant="paragraph"
          >
            {quote}
          </Typography>
        </div>
        <div className="bg-transparent ml-auto float-right fixed right-0 z-0">
          <Avatar
            src={humanFigure}
            alt="human"
            className="bg-transparent w-fit h-36 pr-40 float-right z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
