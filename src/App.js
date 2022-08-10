import React, { } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { atom } from 'jotai';

import './styles/App.css';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUpPage from './pages/SignUp/SignUpPage';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import NotFound from './pages/NotFound';

export const userInSession = atom(null);

const App = () => {
  return (
    <div className="app h-full">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUpPage />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;