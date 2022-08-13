import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { atom, useAtom } from "jotai";

import "./styles/App.css";

import { users } from "./api";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import NotFound from "./pages/NotFound";
import Spinner from "./components/Spinner";
import TopNavBar from "./components/NavBars/TopNavBar";
import Footer from "./components/Footer";

// State
export const userInSession = atom(null);

const App = () => {
  const [user, setUser] = useAtom(userInSession);
  const [isLoaded, setIsLoaded] = useState(false);
  // Get user in session on init once
  useEffect(() => {
    (async () => {
      try {
        if (user) return;
        const res = await users.getUserInSession();
        setUser(res.data.data);
      } catch (err) {}
      setIsLoaded(true);
    })();
  }, []);

  // Render Spinner if not yet loaded
  if (!isLoaded)
    return (
      <div className="flex h-full justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <div className="app h-full">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/*<Route exact path='/profile' element={<Profile />} user={currentUser} />
          <Route exact path='/explore' element={<Explore />} />
          <Route exact path='/credit-search' element={<CreditSearch />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/teacher-signup' element={<TeacherSignUp />} />
          <Route exact path='/username/credits/the-revolutionary-war' element={<CreditDetails />} />
          <Route exact path='/howitworks' element={<HowItWorks />} />
          <Route exact path='/studentplaylist' element={<StudentPlaylist />} />
          <Route
            exact path='/login'
            render={(props) =>
              <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser} />} />
          <Route exact path='/studentprofile' element={<StudentProfile />} user={currentUser} handleLogout={handleLogout} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
