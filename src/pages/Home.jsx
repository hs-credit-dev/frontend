import { useEffect } from "react";
import { useNavigate, } from "react-router-dom";

import { userInSession } from "../App";
import { useAtom } from 'jotai';

import Header from "../components/Header";

const Home = () => {
  const [user] = useAtom(userInSession);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate('/dashboard');
    } else {
      return navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <Header className="mb-auto" />
      <div className="flex flex-col content-center items-center my-auto">
        <img src="https://i.imgur.com/t5GkphG.png" alt="hsc logo" />
        <p className="text-xl font-extrabold text-black">
          researched, revised, relevant
        </p>
      </div>
    </>
  );
};

export default Home;
