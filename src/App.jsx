import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";
import { getUserInSession } from "./api/users";
import Routes from './Routes';
import Spinner from "components/Spinner";
import Footer from "components/Footer";

// State
export const userInSession = atom(null);
export const userTypeInSession = atom(null); // student | teacher

const App = () => {
  const [user, setUser] = useAtom(userInSession);
  const [userType, setUserType] = useAtom(userTypeInSession);

  const [isLoaded, setIsLoaded] = useState(false);

  // Get user in session on init (if no user)
  useEffect(() => {
    (async () => {
      try {
        if (user) return;
        const res = await getUserInSession();
        setUser(res.data.data);
      }
      catch (err) { }

      setIsLoaded(true);
    })();
  }, [user, setUser]);

  if (!isLoaded)
    return (
      <div className="app min-h-full flex justify-center items-center">
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
