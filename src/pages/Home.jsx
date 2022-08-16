import TopNavBar from "../components/NavBars/TopNavBar";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <TopNavBar />
      <div className="flex flex-col place-content-center items-center my-auto">
        <img src="https://i.imgur.com/t5GkphG.png" alt="hsc logo" />
        <Typography className="text-xl font-extrabold text-black">
          researched, revised, relevant
        </Typography>
      </div>
    </>
  );
};

export default Home;
