import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";

import { users } from "./api_fake";

import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import Routes from './Routes';

// State
export const userInSession = atom(null);

const App = () => {
  const [user, setUser] = useAtom(userInSession);

  const [isLoaded, setIsLoaded] = useState(false);

  // Get user in session on init
  useEffect(() => {
    (async () => {
      try {
        if (user) return;
        const res = await users.getUserInSession();
        setUser(res.data.data);
      }
      catch (err) { }

      setIsLoaded(true);
    })();
  }, [user, setUser]);

  if (!isLoaded)
    return (
      <div className="flex min-h-full justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <div className="app min-h-full flex flex-col">
      <Routes />
      <Footer className="mt-auto" />
    </div>
  );
};

export default App;
