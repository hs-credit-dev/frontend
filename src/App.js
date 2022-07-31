import React, { } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import BasicUserSignUp from './pages/BasicUserSignUp';
import StudentSignUp from './pages/StudentSignUp';
import TeacherSignUp from './pages/TeacherSignUp';
import NotFound from './pages/NotFound';

import { Button } from '@material-tailwind/react';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className='mainAppContainer'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/basic-signup' element={<BasicUserSignUp />} />
            <Route exact path='/student-signup' element={<StudentSignUp />} />
            <Route exact path='/teacher-signup' element={<TeacherSignUp />} />
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
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
