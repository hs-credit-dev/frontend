import { Avatar, Typography } from "@material-tailwind/react";
import humanFigure from "../../../../assets/svg/human-figure.svg";
import { useAtom } from "jotai";
import { userInSession } from "../../../../App";

import quotes from './quotes'

const Dashboard = () => {
  const [user] = useAtom(userInSession);

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <div className="bg-hspurple lg:h-36 rounded-3xl flex flex-col gap-4 lg:grid grid-cols-6 px-6 py-4 lg:py-0 lg:px-16 items-center">
        <Typography
          className="text-white col-span-2 whitespace-nowrap"
          variant="h3"
        >
          Welcome back, {user?.firstName}
        </Typography>
        <p className="col-span-1 justify-self-center text-2xl hidden lg:block">
          👋
        </p>
        <Avatar
          src={humanFigure}
          alt="human"
          className="col-span-3 row-span-2 min-h-full w-fit justify-self-center hidden lg:block"
        />
        <p className="text-white col-span-3 lg:self-start">
          {quote}
        </p>
      </div>
    </>
  );
};

export default Dashboard;
